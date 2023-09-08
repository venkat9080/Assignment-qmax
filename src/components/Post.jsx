import { Box, CardContent, Typography } from '@mui/material';
import React from 'react'
import  "../index.css"




const Post = ({post , onDelete}) => {


  // const [posts , setPosts] = useState([post])

  const deleteHandler = (id) => {
    console.log("Deleting post with ID:", id);
    onDelete(id); // Call the onDelete callback from the parent component
  };

    console.log("Rendering Post component with ID:", post.id);

      
 
  return (
 
    
    
    <div  className="box" >
       
<Box m={2} p={1} border={1} borderColor="dark.main" className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          User ID: {post.userId}
        </Typography>
      </CardContent>
   
 
      <CardContent>
        {/* <Typography variant="h6" component="div">
          Title: {post.title}
        </Typography> */}
        <span> <h4>TITLE:</h4>  {post.title}</span> 
      </CardContent>

  
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          Body: {post.body}
        </Typography> */}
        <h6 className="para"> Body:{post.body}</h6>
        <div className="btns" >
    <button className="comment" onClick={()=>alert("No comments in the file")}    style={{cursor:"pointer"}}  >comments</button>

    <button className="delete" style={{cursor:"pointer"}} onClick={()=>deleteHandler(post.id)}>Delete</button>
    </div>
      </CardContent>
      
    </Box>
 

        </div>
 

      );

}

export default Post