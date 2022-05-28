import React from "react";
import styled from "styled-components";

// Components

export function TimeSection() {
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

    React.useEffect(() => {
        const timer = setInterval(() => {
            // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        };
    }, []);

    return (
        <div
            style={{
                userSelect: "none",
                padding: "0 10px",
                fontWeight: "bold",
            }}
        >
            <span>{today.getHours()}</span>
            <span style={{ margin: "0 10px" }}>:</span>
            <span>{today.getMinutes()}</span>
        </div>
    );
}

// Styles

export const NavigationSection = styled.div`
    height: 100%;
    width: min-content;

    border-right: 2px solid
        ${(props: any) => (props.theme.light ? "#000" : "#fff")};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 5px;

    &.both {
        border-left: 2px solid
            ${(props: any) => (props.theme.light ? "#000" : "#fff")};
    }

    & svg {
        margin: 10px;
    }
`;

export const NavigationSpacer = styled.div`
    width: 100%;
`;

export const LogoImage = styled.img`
    position: absolute;
    transform: scale(0.8);
    ${(props: any) => (!props.theme.light ? "filter: invert(1);" : "")};

    &.optimized {
        image-rendering: optimizeSpeed; /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges; /* Firefox                        */
        image-rendering: -o-crisp-edges; /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated; /* Chrome */
        image-rendering: optimize-contrast; /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor; /* IE8+                           */
    }
`;
