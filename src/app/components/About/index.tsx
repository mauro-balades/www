
import { MotionConfig } from "framer-motion";
import React, { useState } from "react";
import NavigationBar from "../NavigationBar";
import Info from "./Info";
import Range from "./Range";
import { PageWrapper } from "./style";

export default function() {
    let [range, setRange] = useState(40);

    return (
        <PageWrapper>
            <NavigationBar></NavigationBar>
            <Info range={range} />
            <Range range={range} setRange={setRange} />
        </PageWrapper>
    )
}
