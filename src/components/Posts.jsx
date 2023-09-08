import React, { useEffect, useState } from 'react'
import { data } from '../Data';
import Post from './Post';
import "../index.css"
import { Button } from '@mui/material';



const Posts = () => {
  function refreshPage() {
    window.location.reload();
  }
  const [posts, setPosts] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (postId) => {  
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };
  useEffect(() => {
    // Filter posts based on the search query
    if (searchQuery.trim() === '') {
      setPosts(posts); 
    } else{
      const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPosts(filtered);
    }
   
  }, [posts, searchQuery]);
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  JSON.stringify(posts.id)
  return (

    <div style={{marginTop:"10px"}}>
       <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      <Button style={{marginLeft:"10px"}}  variant="outlined">Search</Button>
      <br/>
        <Button style={{marginTop:"10px"}} onClick={()=>refreshPage()} variant="contained">RESTORE STATE</Button>
       
    <div className="posts"  >
     
   {posts.map(post=>{
    
    return (
        <div style={{alignItems:"center"}} >
           <p>for your reference  <span style={{fontWeight:"bold"}}> ObjectID : {JSON.stringify(post.id)}</span> </p>
            <Post  key={post.id} post={post} onDelete={handleDelete}/>
            
        </div>
    )
   })}
    </div>
    </div>
    
  )
}

export default Posts