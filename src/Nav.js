import { Link } from "react-router-dom"

const Nav = ({search, setsearch}) =>{
    return(
        <>
            <nav>
                <form className="searchForm" onSubmit={(e)=> e.preventDefault() }>
                    <label htmlFor="search">search</label>
                    <input 
                        id="search"
                        type="text"
                        placeholder="search"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                    />
                </form>
                <ul>
                    <li><Link className="link" to="/"><>Home</></Link></li>
                    <li><Link className="link" to="about"><>About</></Link></li>
                    <li><Link className="link" to="newpost"><>New Post</></Link></li>
                </ul>
            </nav>
        </>
    )

}
export default Nav