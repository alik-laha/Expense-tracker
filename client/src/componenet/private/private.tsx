import axios from "axios";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";



export const PrivateComponent = () => {
    const navigate = useNavigate()
    const verify = () => {
        axios.get('/api/user/verify')
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('loggedIn', 'true')
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                localStorage.clear()
                navigate('/login')
            })
    }

    useEffect(() => {
        verify()
    }, [])

    const auth = localStorage.getItem('loggedIn')

    return auth ? <Outlet /> : <Navigate to="/login" />
}


