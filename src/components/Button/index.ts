import styled from 'styled-components';

export default styled.div`
    background: #DADAD3;
    color: #142C69;
    border: 1px solid #142C69;
    box-shadow: inset 0 1px 0 0 #DADAD3, 3px 3px 0 0 rgb(0 0 0 / 10%);

    line-height: 100%;
    font-size: 14px;
    letter-spacing: 1.5px;
    padding: 0.75em 1em;

    user-select: none;

    &:active {
        box-shadow: inset 0 1px 0 0 #DADAD3, inset -3px -3px 0 0 rgb(0 0 0 / 10%);
    }
`

