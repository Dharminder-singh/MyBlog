import { Link } from "react-router-dom"

const Home = ({posts}) =>{
    return(
        <>
            <section className="Home">
            {posts.length ? (
                <ul>
                {posts.map(post =>(
                    <li key={post.id}>
                    <Link to={`/postpage/${post.id}`} >
                    <h2>{post.title}</h2>
                    <p className="post-date">Publish:- {post.date}</p>
                    <p>{
                    (post.body).length <=25 ? 
                    post.body 
                    : `${(post.body).slice(0 , 25)}.... Read More !`
                    }
                    </p>
                    </Link>
                    </li>
                ))}
                </ul>
                 ) : (
                    <>
                        <h2 className="No-post-title">No Post Found..!</h2>
                        <Link className="btn" to="newpost">Please Add new post </Link>
                    </>
                ) }
            </section>
           
        </>
    )

}
export default Home