import React, { useState } from "react";
import ViewWrapper, { NavigationBar } from "./components/ViewWrapper";

import Cookies from "./components/windows/Cookies";
import Settings from "./components/windows/Settings";

import "normalize.css";

function App() {

  const [cookies_closed, cookies_setClosed]   = useState(false);
  const [settings_closed, settings_setClosed] = useState(true);

    let windows = [
      <Cookies closed={cookies_closed} setClosed={cookies_setClosed} />,
      <Settings closed={settings_closed} setClosed={settings_setClosed} />
    ];

    return (
        <>
          <NavigationBar>
            <div className="menu_item pointer">File</div>
            <div className="menu_item pointer" onClick={() => settings_setClosed(false)}>Settings</div>
            <div className="menu_item pointer">Execute</div>
          </NavigationBar>
          <ViewWrapper>
            {windows}
          </ViewWrapper>
        </>
    );
}

export default App;
