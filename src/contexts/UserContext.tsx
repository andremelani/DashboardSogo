import { createContext, ReactNode, useState } from "react";

type UserContextProps = {
    children: ReactNode;
}

type UserContextType = {
    isLogged: boolean;
    setIsLogged: (newState: boolean) => void;
}


const initialValue = {
    isLogged: true,
    setIsLogged: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue)
export const UserContextProvider =  ({children}: UserContextProps) => {
    const [ isLogged, setIsLogged] = useState(initialValue.isLogged)
    return(
        <UserContext.Provider value={{ setIsLogged, isLogged }}>
            {children}
        </UserContext.Provider>
    )
}