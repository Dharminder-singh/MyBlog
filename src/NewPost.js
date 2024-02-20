const NewPost = ({postTitle, setpostTitle, postBody, setpostBody, addNewPost}) =>{
    return(
        <>
        <form className="newPost-from"  onSubmit={addNewPost}>
            <label htmlFor="title">Title</label>
            <input 
                type="text"
                id="title"
                placeholder="Title"
                required
                value={postTitle}
                onChange={(e) => setpostTitle(e.target.value)}
            />
            <label htmlFor="context">Post</label>
            
            <textarea
            type="text"
            id="context"
            placeholder="Type in New Post"
            required
            value={postBody}
            onChange={(e) => setpostBody(e.target.value)}
            ></textarea>
            <button className="submit-btn" type="submit">submit</button>
        </form>
    </>
    )

}
export default NewPost