import styled from "styled-components";
import { BG, BG2 } from "../constants";

export const DarkGist = styled.div`

    border: 6px solid ${BG};
    border-bottom: none;
    border-radius: 5px;

    position: relative;

    background: ${BG};
    border: 1px solid #fff;

    margin-bottom: 20px;

    & .gist .gist-file {
        margin: 0 !important;
        background: ${BG} !important;
    }

    & article h2 {
        color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};
        font-weight: 600;
    
        background: ${BG};
        padding: 5px 5px 10px;

        font-size: 15px;
        margin: 0;

        & div:nth-child(1) {
            opacity: .6;
        }
    }


    & .gist .gist-data,
    & .gist .gist-data table {
        background: ${BG2} !important;
    }

    & .gist .gist-data {
        max-height: 500px;
        overflow: auto;

        border-bottom: 1px solid rgba(0,0,0,.7) !important;
        border-radius: 5px !important;
    }

    & .gist .gist-data table {
        background: ${BG2} !important;
    }

    & .gist table tr {
        border: none !important;
        background: transparent !important;
    }

    & {
        .blob-code {
            color: #fff !important;
            font-weight: 600;
        }

        .pl-c1 {
            color: #9cdcfe  !important;
        }
        .pl-pds,
        .pl-k {
            color:  rgb(198, 120, 221)  !important;
        }

        .pl-en {
            color: rgb(97, 175, 239) !important;
        }
        .pl-smi {
            color: #dadada  !important;
        }

        .pl-c {
            color: #6c8998 !important;
        }

        .gist-meta {
            background: ${BG} !important;
            margin: 0 !important;

            padding: 1rem 5px !important;

            a {
                color: #696969;

                text-decoration: none;
                transition: 0.2s ease-in color;
                &:hover {
                    color: black;
                }
            }
        }

        .Box-body {
            .highlight {
                background-color: #1e1e1e;
                .blob-num {
                    color: #b9b9b9ab;
                    border: none !important;
                    border-right: 1px solid ${BG} !important;
                }
            }
        }
    }


    & {
        .gist-file {
            background-color: black !important;
            border: none !important;
            .gist-meta {
                background-color: #151515;
                color: rgb(146, 146, 146);
                a {
                    color: #c9c9c9;
                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }
`;
