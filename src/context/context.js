import { createContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [event, setEvent] = useState();
    useEffect(() => {}, []);
    return (
        <Context.Provider
            value={{
                event,
                setEvent,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
