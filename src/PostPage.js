import { useParams, Link } from "react-router-dom"

const PostPage = ({posts , DelPost}) =>{

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return(
        <>
        {post &&
        <>
        <article className={`article post-${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="post-date">Publish:- {post.date}</p> 
            <Link to={`/postedit/${post.id}`} >
            <button className="edit-button">
                Edit
            </button>
            </Link> 
            <button className="del-button" onClick={() => DelPost(post.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	            </svg>Delete
            </button>
        </article>
        
        </>
         }
         {!post &&
            <>
                <h2>Oops...! Post not found</h2>
                <Link to='/' className="back-Button">Back to Home</Link>
            </>
            }
        </>
    )

}
export default PostPage