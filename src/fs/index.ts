import React from "react";

const STATIC_SVG_PREFIX = "/static/svg";

export var FILE_STRUCTURE = {};

export const initializeFiles = (props: any) => {
    const { pong_setClosed, projects_setClosed, man_setClosed } = props;

    FILE_STRUCTURE = {
        "/": {
            infinite: {
                __type: "folder",
                infinite: {
                    __type: "folder",
                    infinite: {
                        __type: "folder",
                        infinite: {
                            __type: "folder",
                            infinite: {
                                __type: "folder",
                                infinite: {
                                    __type: "folder",
                                    infinite: {
                                        __type: "folder",
                                        infinite: {
                                            __type: "folder",
                                            infinite: {
                                                __type: "folder",
                                                infinite: {
                                                    __type: "folder",
                                                    infinite: {
                                                        __type: "folder",
                                                        infinite: {
                                                            __type: "folder",
                                                            stop: {
                                                                __type: "folder",
                                                                "please stop": {
                                                                    __type: "folder",
                                                                    STOP: {
                                                                        __type: "folder",
                                                                        "why?": {
                                                                            __type: "folder",
                                                                            "readme[DOT]txt":
                                                                                {
                                                                                    __type: "file",
                                                                                },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "mauro[DOT]7": {
                __type: "file",
                __handle: () => {
                    man_setClosed(false);
                }
            },
            "projects[DOT]exe": {
                __type: "file",
                __handle: () => {
                    projects_setClosed(false);
                }
            }
        },
    };
};
