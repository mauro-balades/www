import styled from "styled-components";

export const Wrapper = styled.div`
    overflow: hidden;
    position: relative;

    padding: 0 30px;

    & div.submit_btn {
        margin-top: 1rem !important;
    }
`;

export const SubjectWrapper = styled.div`
    background: ${(props: any) => props.theme.titleBarBackground};
    height: 35px;

    border-bottom: 2px solid
        ${(props: any) => (props.theme.light ? "#000" : "#fff")};

    display: flex;
    align-items: center;

    padding: 0.2rem 10px;

    & div {
        font-weight: bold;
        user-select: none;
    }
`;

export const SubjectInput = styled.input`
    width: 100%;
    margin-left: 10px;

    background: transparent;

    border: none;
    outline: none;

    font-weight: 600;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 18rem;
    margin-top: 30px;

    background: transparent;
    border: none;
    outline: none;

    resize: none;
`;
