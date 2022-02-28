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

# Expross is a low-weight web framework I made
# for people with not a lot of experience with
# Python but they know a lot about express.js
from expross import Expross
from src.app import Application
from os import getenv

# Define costants
VIEWS: str = "src/views"
STATIC: str = "src/static"
PORT: int = getenv("PORT", 8000)

# Define application's web server
app: Expross = None

# Define main application's site
site: Application = None


def initiate_site():
    """Initiate web server application."""
    global app
    global site

    # Define application
    app = Expross()

    # Set templates and static folders.
    app.set_templates("src/views")
    app.serve_static(folder="./src/static", route="/cdn/")

    # Define main application's site
    site = Application(app=app)


def server_callback():
    print(f"Server running on http://localhost:{PORT}")


def serve_site():
    """This function is used to serve the serve."""
    global app

    app.listen(serverPort=PORT, cb=server_callback)
