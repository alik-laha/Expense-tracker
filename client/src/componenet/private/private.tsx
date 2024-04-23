import axios from "axios";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const verify = () => {
    axios.get('/api/user/verify')
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('loggedIn', 'true')
            if (res.data.verified) {
                localStorage.setItem('verified', 'true')
            }
        })
        .catch((err) => {
            console.log(err)
            localStorage.clear()
        })
}

export const PrivateComponent = () => {

    useEffect(() => {
        verify()
    }, [])

    const auth = localStorage.getItem('loggedIn')

    return auth ? <Outlet /> : <Navigate to="/login" />
}


