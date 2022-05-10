import Header from "./Header"


export default function Screen ({ children, title }) {

    return (
        <>
            <Header title={title}/>
            { children }
        </>
    )
}