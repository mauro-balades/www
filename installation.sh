#!/bin/bash

SQL_FILE_DEV="installation.dev.sql"
SQL_FILE_PRO="installation.pro.sql"

run() {
    echo " + $@"
    eval $@
}

createSQLIfNotExists() {
    run cd installation

    if [ ! -f "$SQL_FILE_PRO" ]; then
        run cp $SQL_FILE_DEV $SQL_FILE_PRO
    fi

    run cd ..
}

installPythonPackages() {

    run python3 -m venv venv
    run source venv/bin/activate

    run pip3 install -r requirements.txt
}

copyDotEnv() {
    if [ ! -f ".env" ]; then
        run cp .example.env .env
    fi
}

main() {
    run createSQLIfNotExists
    run installPythonPackages
    run copyDotEnv

    echo ""
    echo "intructions:"
    echo "1. fill mysql files (located in ./installation/intallation.[PRODUCTION OR DEVELOPMENT].sql)"
    echo "2. fill your .env file"
    echo "3. run the following commands:"
    echo "  * mysql -u [USERNAME] -p [PASSWORD] < ./installation/intallation.[PRODUCTION OR DEVELOPMENT].sql"
    echo "4. python3 setup.py"
}


main
