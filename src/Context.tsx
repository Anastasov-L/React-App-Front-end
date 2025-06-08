import { createContext, useState, useContext, ReactNode } from 'react';
//createContext => share state or functions between components without having to manually pass them through prop
//useState => used to manage state in a functional component
//useContext => consume value from a context thats been created with createContext
//ReactNode => type that represents any valid child in JSX

interface AuthContextType {
  isAuthenticated: boolean //simple bool
  login: () => void //takes no args and returns no args
  logout: () => void
}

/* 
This line creates the actual context using createContext.
<AuthContextType | undefined> is specifying that the context will either have the structure defined in AuthContextType or be undefined.
The context could be undefined if it hasn't been wrapped in the AuthProvider component. The undefined passed to
createContext is the default value. It ensures that if the context is used outside of a provider, it will default to undefined.
*/
const AuthContext = createContext<AuthContextType | undefined>(undefined)

/*
AuthProvider is a component that will wrap parts of the app, mainly authentication state.
{ children }: { children: ReactNode }: This is using TypeScript to specify that the AuthProvider component will accept a children prop. 
Children will be any valid React node.Inside the component, useState(false) is used to define the isAuthenticated state. 
Initially, I set it to false, because user hasnt been authenthicated yet
*/

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true) //login makes isAuth. true while logout makes it false
  const logout = () => setIsAuthenticated(false);

/*
The component wraps the children passed to it ({children}) with an AuthContext.
Provider: value={{ isAuthenticated, login, logout }}: This makes the isAuthenticated, login, and logout values accessible to any child components
 that use this context.
{children}: The children of AuthProvider  will now have access to the AuthContext values.
*/

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

/*
Hook, which allows me to access values stored in AuthContext.
const context = useContext(AuthContext): This uses React’s useContext hook to pull the context value from AuthContext. It gives access to
isAuthenticated, login, and logout.
*/

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {   // if context is undefined (component is trying to use useAuth outside of Authenthicator provider) => ERROR
    throw new Error('!NO!')
  }
  return context //finally i return the context value, which contains isAuthenthicated, login and logout
}
