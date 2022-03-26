#!/usr/bin python
#  __  __                         ____        _           _
# |  \/  | __ _ _   _ _ __ ___   | __ )  __ _| | __ _  __| | ___  ___
# | |\/| |/ _` | | | | '__/ _ \  |  _ \ / _` | |/ _` |/ _` |/ _ \/ __|
# | |  | | (_| | |_| | | | (_) | | |_) | (_| | | (_| | (_| |  __/\__ \
# |_|  |_|\__,_|\__,_|_|  \___/  |____/ \__,_|_|\__,_|\__,_|\___||___/
# -----------------------------------------------------------------------------
# 2021 - 2022 Copyirght Mauro Baladés <mauro.balades@tutanota.com>
# This project is under the license of MIT
# -----------------------------------------------------------------------------

# Imports
from dotenv import load_dotenv
load_dotenv()

from expross import Expross
from src.errors import UndefinedApp

import mistune
from mistune.directives import DirectiveToc
from mistune.directives import Admonition

import pymysql.cursors
import os

class MyRenderer(mistune.HTMLRenderer):
    def theading(self, text, level, tid):
        title = f"<h{level}>{text}</h{level}>"
        return f"""<section class="flex items-center blog_header" id="{id}">
                        <a href="#{tid}" class="section_link">
                            <svg class="w-6 h-6 absolute" style="transform: translate(calc(-50% + -20px), -50%);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                        </a>
                        <span>{title}</span>
                   </section>"""


class Application(object):
    """This is the main website's application class"""

    app: Expross = None
    db = None

    VISIT_NORMAL = 1
    VISIT_BLOG = 2
    VISIT_EASTER_EGG = 3

    def __init__(self, *argv, **kwargs):
        self.app = kwargs.get("app", None)

        if self.app is None:
            raise UndefinedApp("App has no been defined")

        self.db = pymysql.connect(
            host = os.getenv("DB_HOST"),
            user = os.getenv("DB_USERNAME"),
            password = os.getenv("DB_PASSWORD"),
            database = "mauroPortfolio",
            cursorclass=pymysql.cursors.DictCursor
        )

        self.set_routes()

    def __del__(self):
        self.db.close()

    def __enter__(self):
        self.__del__()

    def __exit__(self):
        self.__del__()

    def set_routes(self):
        self.app.get("/", self.main())
        self.app.get("/blog/{blog}", self.blog())

    # --------------- UTILS

    def _add_visit(self, type: int = 0):
        cur = self.db.cursor()
        cur.execute("UPDATE mauroPortfolio.visits SET `count` = `count` + 1 WHERE `id` = %s", type)
        self.db.commit()
        cur.close()

    # --------------- ROUTES

    def main(self):

        def route(req, res):
            self._add_visit(self.VISIT_NORMAL)

            content = self.app.render_template("index.html")
            return content, 200

        return route

    def blog(self):
        def route(req, res):

            self._add_visit(self.VISIT_BLOG)

            blog = self.app.context.blog
            markdown = mistune.create_markdown(
                renderer=MyRenderer(),
                escape=False,
                plugins=[
                    DirectiveToc(),
                    Admonition(),
                    "footnotes",
                    "strikethrough",
                    "abbr",
                ],
            )

            with open(f"./src/blogs/{blog}.md", "r") as f:
                text = f.read()
                html = markdown(text)

            content = self.app.render_template("blog.html", blog=html)
            return content, 200

        return route
