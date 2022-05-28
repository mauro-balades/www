import React from "react";

const STATIC_SVG_PREFIX = "/static/svg";

export var FILE_STRUCTURE = {};

export const initializeFiles = (props: any) => {
    const { pong_setClosed } = props;

    FILE_STRUCTURE = {
        "/": {
            projects: {
                __type: "folder",

                wonoly: {
                    __type: "file",
                    __icon: `${STATIC_SVG_PREFIX}/wonoly.svg`,
                    __handle: "",
                },
            },
            games: {
                __type: "folder",
                pong: {
                    __type: "file",
                    __handle: () => {
                        pong_setClosed(false);
                    },
                },
            },
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
        },
    };
};
