import * as React from "react"
import {createContext, FC, useContext} from "react";

export const foobarContext = createContext({text: "CONTEXT NOT AVAILABLE!"})

export const FooBarProvider: FC = (props) => {
    const context = {
        text: Math.random() < 0.5 ? "foo" : "bar"
    }
    return <foobarContext.Provider value={context}>
        {props.children}
    </foobarContext.Provider>
}

export function useFooBar() {
    return useContext(foobarContext)
}