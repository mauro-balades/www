import React from "react";
import Wrapper from "./styles";
import Core from 'react-input-switch';
import { useTheme } from 'styled-components';

function Switch(props: any) {
    const theme = useTheme();

    return (
        <Wrapper {...props} className={`pointer ${props.className}`}>
            <Core styles={{
                container: {
                    width: '100%',
                    height: 25
                },
                button: {
                    borderRadius: 20
                },
                buttonChecked: {
                    right: 5,
                    left: 'calc(100% - 28px)'
                },
                trackChecked: {
                    backgroundColor: `${theme.viewBackground} !important`
                }
            }} {...props} />
        </Wrapper>
    );
}

export default Switch;
