import Nav from "./Nav"
const Header = ({search, setsearch, title}) =>{
    return(
        <>
            <header>
            <h1 className="logo">{title}</h1>
            <Nav 
             search = {search}
             setsearch = {setsearch}
            />
            </header>
        </>
    )

}


export default Header