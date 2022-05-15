import React, { useState } from "react";
import ViewWrapper, { NavigationBar } from "./components/ViewWrapper";

import Pong from "./components/windows/Pong";
import Cookies from "./components/windows/Cookies";
import Settings from "./components/windows/Settings";

import "normalize.css";
import DropDown from "./components/DropDown";

function App() {

  const [cookies_closed, cookies_setClosed]   = useState(false);
  const [settings_closed, settings_setClosed] = useState(true);
  const [pong_closed, pong_setClosed] = useState(false);

    let windows = [
      <Cookies closed={cookies_closed} setClosed={cookies_setClosed} />,
      <Settings closed={settings_closed} setClosed={settings_setClosed} />,
      <Pong closed={pong_closed} setClosed={pong_setClosed} />
    ];

    const onFileSelection = (value: any) => {
      alert(value)
    }

    return (
        <>
          <NavigationBar>
            <div className="menu_item pointer">
              <DropDown onSelection={onFileSelection} options={[
                "hello",
                "hello 2"
              ]} header="File" />
            </div>
            <div className="menu_item pointer" onClick={() => settings_setClosed(false)}>
              Settings
            </div>
          </NavigationBar>
          <ViewWrapper>
            {windows}
          </ViewWrapper>
        </>
    );
}

export default App;
