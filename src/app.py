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

class Application:
    """ This is the main website's application class """

    app: Expross = None

    def __init__(self, *argv, **kwargs):
        self.app = kwargs.get("app", None)

        if self.app is None:
            raise UndefinedApp("App has no been defined")

        self.set_routes()

    def set_routes(self):
        self.app.get("/", self.main())

    # --------------- ROUTES

    def main(self):

        def route(req, res):
            content = self.app.render_template("index.html")
            return content, 200

        return route

    