import React, { useState } from "react";
import { sendEmail } from "../../../utils";

import Button from "../../Button";
import Window from "../../Window";
import { Wrapper, SubjectWrapper, SubjectInput, TextArea } from "./styles";

function Email(props: any) {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    return (
        <>
            <Window
                y="50"
                x="50"
                title="Contact me"
                width="25"
                height="29"
                closable={true}
                {...props}
            >
                <SubjectWrapper>
                    <div>Subject:</div>
                    <SubjectInput
                        value={subject}
                        onChange={(event: any) =>
                            setSubject(event.target.value)
                        }
                    />
                </SubjectWrapper>
                <Wrapper>
                    <TextArea
                        className="scrollbar"
                        placeholder="Hey, I am contacting you because of..."
                        value={body}
                        onChange={(event: any) => setBody(event.target.value)}
                    ></TextArea>
                    <Button onClick={() => sendEmail(subject, body)} className="submit_btn">Submit</Button>
                </Wrapper>
            </Window>
        </>
    );
}

export default Email;
