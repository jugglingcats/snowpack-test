import * as React from "react"
import {useFooBar} from "./FooBarProvider";

export const FooBarConsumer = () => {
    const context = useFooBar()
    return <div>{context.text}</div>
}