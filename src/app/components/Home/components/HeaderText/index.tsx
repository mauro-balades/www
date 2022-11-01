
import React from "react";
import { DefaultBlob, SimpleBlob, SimpleBlob2 } from "../../../blobs";
import { BigText, SmallText, Wrapper } from "./style";

export default function() {
    return (
        <Wrapper>
            {/* <SimpleBlob style={{
                position: 'absolute',
                width: '45rem',
                height: '45rem',
                top: '-10%',
                left: '-10%'
            }}></SimpleBlob>
            <SimpleBlob2 style={{
                position: 'absolute',
                width: '50rem',
                height: '50rem',
                bottom: '-10%',
                right: '-10%'
            }}></SimpleBlob2> */}

            <div style={{ position: 'relative', zIndex: '2' }}>
                <SmallText>
                    Welcome to my portfolio!
                </SmallText>
                <BigText>
                    Software developer from Madrid, Spain.<br />
                    I love to make software in any sort of <br />
                    branch
                </BigText>
            </div>
        </Wrapper>
    )
}
