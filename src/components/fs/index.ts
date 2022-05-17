
import React from "react";

export var FILE_STRUCTURE = {};


export const initializeFiles = (props: any) => {
    const {
        pong_setClosed
     } = props;

    FILE_STRUCTURE = {
        "/": {
            "projects": {
                "__type": "folder",

                "wonoly": {
                    "__type": "file",
                    "__icon": "",
                    "__handle": "",
                }
            },
            "games": {
                "__type": "folder",
                "pong": {
                    "__type": "file",
                    "__icon": "",
                    "__handle": () => { pong_setClosed(false) },
                }
            }
        }
    }
}
