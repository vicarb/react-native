import { createContext, useState } from 'react'

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [count, setCounter] = useState(0)

    return (
        <GlobalContext.Provider value={{count, setCounter}}>{children}</GlobalContext.Provider>
    )
}

export default GlobalContext;