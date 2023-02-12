import styled from "styled-components";
import { BG, BG2 } from "../constants";

export const ThemedGist = styled.div`

    border: 6px solid ${BG};
    border-bottom: none;
    border-radius: 6px;
    overflow: hidden;

    position: relative;

    background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG};
    border: 1px solid ${(props: any) => props.theme.theme === "light" ? "hsl(0, 0%, 78%)" : "rgba(255,255,255,.5)"};

    margin-bottom: 20px;

    & .gist .gist-file {
        margin: 0 !important;
        background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG} !important;
        border: none !important;
        border-radius: 0 !important;
    }

    & article h2 {
        color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};
        font-weight: 600;

        background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG};
        padding: 8px;

        font-size: 13px;
        margin: 0;

        & div:nth-child(1) {
            opacity: .6;
        }
    }


    & .gist .gist-data,
    & .gist .gist-data table {
        background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG2} !important;
    }

    & .gist .gist-data {
        max-height: 500px;
        overflow: auto;

        border-top: 1px solid ${(props: any) => props.theme.theme === "light" ? "hsl(0, 0%, 78%)" : "rgba(255,255,255,.5)"} !important;
        border-radius: 5px !important;
    }

    & .gist .gist-data table {
        background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG2} !important;
    }

    & .gist table tr {
        border: none !important;
        background: transparent !important;
    }

    & {
        .blob-code {
            color: ${(props: any) => props.theme.theme === "light" ? "rgba(0,0,0,.6)" : "#fff"} !important;
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
            background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG} !important;
            margin: 0 !important;

            padding: 1rem 15px !important;

            a {
                color: ${(props: any) => props.theme.theme === "light" ? "#000" : "#696969"};

                text-decoration: none;
                transition: 0.2s ease-in color;
                &:hover {
                    color: black;
                }
            }
        }

        .Box-body {
            .highlight {
                background-color: ${(props: any) => props.theme.theme === "light" ? "transparent" : "#1e1e1e"};
                .blob-num {
                    color: #b9b9b9ab;
                    border: none !important;
                    border-right: 1px solid ${(props: any) => props.theme.theme === "light" ? "transparent" : BG} !important;
                }
            }
        }
    }
`;
