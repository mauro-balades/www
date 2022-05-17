import styled from "styled-components";

export const FilesWrapper = styled.div`
    padding: 20px;
    display: flex;
`;

export const LineBreak = styled.div`
    width: 100%;
`;

export const Item = styled.div`
    width: 5rem;
    height: 5rem;

    margin: 0 20px;
    text-align: center;

    & img {
        width: 100%;
    }

    &:hover img {
        transform: scale(1.1);
    }

    & p {
        margin: 10px;
        font-size: 0.8rem;
        font-weight: bold;
        text-align: center;
    }
`;
