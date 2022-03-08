import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './List.css'

export default function Navbar() {


    return (
        <Box  className='mobnav' sx={{ flexGrow: 1 }}>

            <AppBar position="fixed">
                <Toolbar style={{width:'80%',textAlign:'center'}}>

                    <div style={{ cursor: 'pointer' }}>
                        User List
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
