import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import './List.css'
import bg from '../bg.jpg'

function List() {

    const [users, setUsers] = useState([]); // state to hold the user data fetched from api

    //first time mounting
    useEffect(async () => {
        try {
            let res = await axios.get(`https://randomuser.me/api/?results=10`);
            let data = res.data;
            console.log(data.results);
            setUsers([...data.results])

        } catch (error) {
            console.log(error)
        }
    }, [])

    document.body.style.backgroundImage = `url(${bg})`;

    return (

        <div className='cardWrapper'>
            {
                // using map to loop over different users and 
                // displaying their details in different cards
                users.map((userObj) => (
                    <Card className='mq' sx={{display:'flex', border:'2px solid black', marginTop: '2%', marginBottom: '3%' }}>
                        <div className="image">
                            <img style={{borderRadius:'50%'}} src={userObj.picture.large} alt="user image" />
                        </div>
                        <div className="details">
                            <div>
                                <strong>{userObj.name.title} {userObj.name.first} {userObj.name.last}</strong>
                            </div>
                            <div>
                                {userObj.email}
                            </div>
                            <div>
                                {userObj.location.street.number}, {userObj.location.street.name},
                                {userObj.location.city}, {userObj.location.state}, {userObj.location.country},
                                {userObj.location.postcode}
                            </div>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}

export default List