import styled from "styled-components";

export default styled.div`

    & label {

        padding: 0 10px;

        & span {
            border-radius: 50px;
            border: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};
            ${(props: any) => !props.theme.light ? "background: transparent;" : ""}
        }

        & span:last-child {
            width: 15px;
            height: 15px;

            margin-left: 5px;

            top: 50%;
            transform: translateY(-50%);

            background: ${(props: any) => !props.theme.light ? "#1d1e1c" : "#fff"};

        }
    }
`;
