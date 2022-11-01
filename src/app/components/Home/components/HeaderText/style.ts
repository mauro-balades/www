
import styled from 'styled-components';
import { alignment } from '../../../../const';

export const Wrapper = styled.div`
    margin: 0 ${alignment.BIG};
    width: 100%;
`

export const SmallText = styled.div`
    font-size: 17px;
    opacity: .7;

    font-weight: 500;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
`


export const BigText = styled.div`
    font-size: 50px;
    font-weight: 700;

    line-height: 1.4;
    font-family: 'Poppins', sans-serif;
`

export const EasterEgg = styled.span`
    position: relative;

    & span {
        background: linear-gradient(0.25turn, #2193b0, #6dd5ed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & img {
        display: none;
        opacity: 0;
        transition: .2s;
        position: absolute;
        bottom: 100%;
        right: 20%;

        width: 100px;
    }

    &:has(span:hover) img {
        display: block;
        opacity: 1;
    }
`
