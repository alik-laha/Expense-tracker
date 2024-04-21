import axios from 'axios';
import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect } from 'react';

const PrivateComponent = () => {
    let auth: boolean = false
    useEffect(() => {
        axios.get('/api/user/verify')
            .then((res) => {
                console.log(res.data)
                res.data.verified ? auth = true : auth = false
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return auth ? <Outlet /> : <Navigate to='/signup' />
}
export default PrivateComponent;