import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import PostEditPage from './PostEditPage'
import Aside from './Aside'
import { Route, Routes , useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts'

function App() {

  const [posts, setposts] = useState([])

  const [postTitle, setpostTitle] = useState('')
  const [postBody, setpostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [search, setsearch] = useState('')
  const [searchFilter, setsearchFilter] = useState('')

  const API_URL = 'http://localhost:3500/posts/'

  useEffect(()=>{
    const fetachdata = async () =>{
      try{
        const response = await api.get(API_URL);
        if(!response.ok) throw Error('post not found')
        setposts(response.data)
        }catch(err){
          console.log(err)
        }
    }
    fetachdata()
  },[])

  useEffect(()=>{
    const postFilter = posts.filter(post =>((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setsearchFilter(postFilter.reverse());
  },[posts, search])

  const history = useNavigate();
  const DelPost = async (id)=>{
    try{
      await api.delete(`/posts/${id}`)
      const postlist = posts.filter(post => post.id !== id);
      setposts(postlist)
      history('/');
    }catch(err){
      console.log(err)
    }
  }
  const addNewPost = async (e)=>{
    e.preventDefault()
    const id = posts.length ? (Number(posts[posts.length -1].id) + 1).toString() : "1";
    const dateTime = format(new Date(), 'MMMM , yyyy ')
    const newpost = {id , title : postTitle , date : dateTime , body : postBody};
    try{
      const response = await api.post(`/posts` , newpost)
      const allposts = [...posts, response.data];
      setposts(allposts)
      setpostTitle('')
      setpostBody('')
      history('/');
    }catch(err){
      console.log(err)
    }
  }
  const updatepost = async (id)=>{
    const dateTime = format(new Date(), 'MMMM , yyyy ')
    const postUpdate = {id , title : editTitle , date : dateTime , body : editBody};
    try{
      const response = await api.put(`/posts/${id}` , postUpdate)
      setposts(posts.map(post => post.id === id ? {...response.data}: post));
      setEditTitle('')
      setEditBody('')
      history('/');
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="App">
      <Header 
        title={"MY BLOG"}
        search = {search}
        setsearch = {setsearch}
      />
      <Aside />
      <main className='MainContainer'>
        <Routes>
          <Route path="/" element={<Home 
            posts = {searchFilter}
          />} />
          <Route path="newpost" element={<NewPost 
            postTitle = {postTitle}
            setpostTitle = {setpostTitle}
            postBody = {postBody}
            setpostBody = {setpostBody}
            addNewPost = {addNewPost}
          />} />
          <Route path="postpage/:id" element={<PostPage 
            posts ={posts}
            DelPost = {DelPost}
          />} />
           <Route path="postedit/:id" element={<PostEditPage 
            posts ={posts}
            editTitle = {editTitle}
            setEditTitle = {setEditTitle}
            editBody = {editBody}
            setEditBody = {setEditBody}
            updatepost = {updatepost}
          />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes> 
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
