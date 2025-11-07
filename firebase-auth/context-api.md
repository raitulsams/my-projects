Context API: A method for passing data through a component tree without the need for manual prop drilling.
createContext: A function that generates a Context object.
Provider: A component that supplies the value of the context to its child components.
useContext: A hook that enables a component to access and use a context.

step 1:
export const BioContext = createContext()

step 2:
export const BioProvider = ({children}) => {
const anyValue = "sams"
return <BioContext.provider value={{anyValue}}> {children} </BioContext.provider>
}
