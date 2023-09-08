import React, { useState } from 'react'
import { AppBar,    Tab, Tabs, Toolbar, Typography} from "@mui/material"

import {NavLink} from 'react-router-dom'


const Header = () => {


    const [ value,setValue]=useState();
  
  return (
    <div>
      
        <AppBar  sx={{backgroundColor:"#232f3D"}}position="sticky">
       
            <Toolbar>
                <Typography>
              
                </Typography>
                
                
                <Tabs sx={{ml:"auto"}} textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
              
                  <h2 style={{marginRight:"750px"}}>POST MANAGEMENT </h2>
                  
                    <Tab  LinkComponent ={NavLink} to="/" label ="posts"/>
                    <Tab  LinkComponent ={NavLink} to="/About" label ="About"/>
                    
                  
                
     
                 
                </Tabs>
            
            </Toolbar>

            

         
            
        </AppBar>
   

    </div>
  )
}

export default Header