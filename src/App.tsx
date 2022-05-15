import React, { useState } from "react";
import ViewWrapper, { NavigationBar } from "./components/ViewWrapper";

import Pong from "./components/windows/Pong";
import Cookies from "./components/windows/Cookies";
import Settings from "./components/windows/Settings";

import DropDown from "./components/DropDown";
import LoadingView from "./components/LoadingView";
import Games from "./components/windows/Games";

import Email from "./components/windows/Email";
import ApplicationBar from "./components/ApplicationBar";

import "normalize.css";

function App() {

  const [ isLoading, setLoading ] = useState(true);

  const [cookies_closed, cookies_setClosed]   = useState(false);
  const [settings_closed, settings_setClosed] = useState(true);
  const [pong_closed, pong_setClosed] = useState(true);
  const [games_closed, games_setClosed] = useState(true);
  const [email_closed, email_setClosed] = useState(true);

    let windows = [
      <Cookies closed={cookies_closed} setClosed={cookies_setClosed} />,
      <Email closed={email_closed} setClosed={email_setClosed} />,
      <Settings closed={settings_closed} setClosed={settings_setClosed} />,
      <Pong closed={pong_closed} setClosed={pong_setClosed} />,
      <Games closed={games_closed} setClosed={games_setClosed}
          pong_setClosed={pong_setClosed} />
    ];

    const onFileSelection = (value: any) => {
      if (value == "games") {
        games_setClosed(false);
      }
    }

    return !isLoading ? (
        <>
          <NavigationBar>
            <div className="menu_item pointer">
              <DropDown onSelection={onFileSelection} options={[
                "games",
              ]} header="File" />
            </div>
            <div className="menu_item pointer" onClick={() => settings_setClosed(false)}>
              Settings
            </div>
          </NavigationBar>
          <ViewWrapper>
            {windows}
            <ApplicationBar email_setClosed={email_setClosed} />
          </ViewWrapper>
        </>
    ) : (
      <LoadingView setLoading={setLoading} />
    );
}

export default App;
