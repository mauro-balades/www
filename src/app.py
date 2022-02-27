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
from expross import Expross
from src.errors import UndefinedApp

from markdown2 import Markdown

class Application:
    """ This is the main website's application class """

    app: Expross = None
    markdowner: Markdown = None

    def __init__(self, *argv, **kwargs):
        self.app = kwargs.get("app", None)
        self.markdowner = Markdown()

        if self.app is None:
            raise UndefinedApp("App has no been defined")

        self.set_routes()

    def set_routes(self):
        self.app.get("/", self.main())
        self.app.get("/blog/{blog}", self.blog())

        # TODO: blog list
        # self.app.get("/blogs/", self.main())

    # --------------- ROUTES

    def main(self):

        def route(req, res):
            content = self.app.render_template("index.html")
            return content, 200

        return route

    def blog(self):
    
        def route(req, res):
            blog = self.app.context.blog

            with open(f'./src/blogs/{blog}.md', 'r') as f:
                text = f.read()
                html = self.markdowner.convert(text)

            content = self.app.render_template("blog.html", blog=html)
            return content, 200

        return route

