import React from "react";

const STATIC_SVG_PREFIX = "/static/svg";

export var FILE_STRUCTURE = {};

export const initializeFiles = (props: any) => {
    const { projects_setClosed, man_setClosed, easterEgg_setClosed } = props;

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
                                                            "for real, it's infinite": {
                                                                __type: "folder",
                                                                "infinite": {
                                                                    __type: "folder",
                                                                    "omg": {
                                                                        __type: "folder",
                                                                        "readme[DOT]txt":
                                                                        {
                                                                            __type: "file",
                                                                            __handle: () => {
                                                                                easterEgg_setClosed(false);
                                                                            }
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
