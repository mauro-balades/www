// @ts-nocheck

import React from "react";
import Window from "../../Window";

import { FILE_STRUCTURE } from "../../../fs";
import { FilesWrapper, Item, UserBar, UserBarButton, UserBarLocation } from "./styles";

const getFileByPath = (path: string) => {
    let splitted = path.split(".");
    let folder_index = 0;

    let current_folder = FILE_STRUCTURE;

    while (folder_index < splitted.length) {
        current_folder = current_folder[splitted[folder_index]];
        folder_index++;
    }

    return current_folder;
};

function Folders(props: any) {
    const { currentFolder, setCurrentFolder } = props;
    const folder = getFileByPath(currentFolder);

    return (
        <Window
            closable={true}
            y="55"
            x="55"
            title="File explorer"
            width="40"
            height="25"
            {...props}
        >
            <FilesWrapper>
                {Object.keys(folder).map((index: string) =>
                    !index.startsWith("__") ? (
                        <Item
                            className="pointer"
                            onClick={() => {
                                if (folder[index].__type === "folder") {
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
                                        : folder[index].__icon ||
                                          "/static/svg/file.svg"
                                }
                                alt={index}
                            />
                            <p>{index.replace(/\[DOT\]/g, ".")}</p>
                        </Item>
                    ) : null
                )}
            </FilesWrapper>
            <UserBar>
                <UserBarButton onClick={() => setCurrentFolder("/")} className="pointer">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </UserBarButton>
                <UserBarLocation>
                    /home/guest{currentFolder.replace(/\./g, "/").substring(1)}
                </UserBarLocation>
                <UserBarButton></UserBarButton>
            </UserBar>
        </Window>
    );
}

export default Folders;
