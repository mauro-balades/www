import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;

    overflow: hidden;

    display: flex;
    padding: 20px;
    padding: 0 30px;
`;

export const Game = styled.div`

    position: relative;
    width: 4.5rem;
    height: min-content;

    & img {
        width: 4.5rem;
        height: 4.5rem;
    }

    &:hover img {
        transform: scale(1.2);
    }

    & h1 {
        margin: 0;
        font-size: 0.8rem;

        font-weight: bold;
        text-align: center;
    }
`
