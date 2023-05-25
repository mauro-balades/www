import styled from "styled-components";

export default styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CenteredText = styled.div`
    text-transform: uppercase;
    color: #fff;

    font-weight: 600;
    letter-spacing: .075em;

    font-size: 1em;
    font-family: "Quicksand",sans-serif;

    width: 25%;
`

export const CenteredTextJustify = styled.div`
    text-align: justify;

    display: flex;
    justify-content: space-between;

    margin: 15px 0;
    width: 100%;
`
