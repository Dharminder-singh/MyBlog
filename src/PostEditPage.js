import { useEffect } from "react";
import { useParams } from "react-router-dom"

const PostEditPage = ({editTitle, setEditTitle, editBody, setEditBody, posts, updatepost })=>{
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(()=>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post, setEditTitle, setEditBody])

 return (
    <>
         
        <form className="newPost-from"  onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="title">Title</label>
            <input 
                type="text"
                id="title"
                placeholder="Title"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="context">Post</label>
            
            <textarea
            type="text"
            id="context"
            placeholder="Type in New Post"
            required
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
            <button className="submit-btn" onClick={() => updatepost(post.id)} >submit</button>
        </form>
    </>
 )
}

export default PostEditPage