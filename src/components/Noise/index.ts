
import styled from "styled-components";

export default styled.div`
    height: 100%;
    left: 0;
    opacity: .3;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
    background: -webkit-linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), -webkit-linear-gradient(left, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 2px, 3px 100%;
`
