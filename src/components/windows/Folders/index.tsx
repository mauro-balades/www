// @ts-nocheck

import React from "react";
import Window from "../../Window";

import { FILE_STRUCTURE } from "../../../fs";
import { FilesWrapper, Item } from "./styles";

const getFileByPath = (path: string) => {
    let splitted = path.split(".");
    let folder_index = 0;

    console.log(FILE_STRUCTURE);
    let current_folder = FILE_STRUCTURE;

    while (folder_index < splitted.length) {
        console.log(current_folder[splitted[folder_index]]);
        current_folder = current_folder[splitted[folder_index]];
        folder_index++;
    }

    console.log(current_folder);
    return current_folder;
};

function Folders(props: any) {
    const { currentFolder, setCurrentFolder } = props;
    const folder = getFileByPath(currentFolder);
    console.log(currentFolder);

    return (
        <Window
            closable={true}
            y="45"
            x="50"
            title={
                currentFolder === "/"
                    ? "File explorer"
                    : currentFolder.split(".")[
                          currentFolder.split(".").length - 1
                      ]
            }
            width="40"
            height="30"
            {...props}
        >
            <FilesWrapper>
                {Object.keys(folder).map((index: string) =>
                    !index.startsWith("__") ? (
                        <Item
                            className="pointer"
                            onClick={() => {
                                if (folder[index].__type === "folder") {
                                    console.log(folder);
                                    setCurrentFolder(
                                        currentFolder + `.${index}`
                                    );
                                } else {
                                    folder[index].__handle();
                                }
                            }}
                        >
                            <img
                                src={
                                    folder[index].__type === "folder"
                                        ? "/static/svg/folder.svg"
                                        : folder[index].__icon || "/static/svg/file.svg"
                                }
                                alt={index}
                            />
                            <p>{index.replace(/\[DOT\]/g, ".")}</p>
                        </Item>
                    ) : null
                )}
            </FilesWrapper>
        </Window>
    );
}

export default Folders;
