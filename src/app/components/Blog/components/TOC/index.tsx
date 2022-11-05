import { useEffect, useRef } from "react";
import { replace_id } from "../../utils";
import { Section, Sticky, Title, Wrapepr } from "./style";

export default function({ contents, ...otherProps }: any) {


    return contents.length > 0 ? (
        <Wrapepr>
            <Sticky {...otherProps}>
                <Title>table of contents</Title>
                {contents.map((el: any) => (
                    <Section level={el.level} href={"#" + replace_id(el.name)}>{el.name}</Section>
                ))}
            </Sticky>
        </Wrapepr>
    ) : null
}
