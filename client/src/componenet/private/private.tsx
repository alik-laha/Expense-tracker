import axios from 'axios';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

const PrivateComponent = () => {
    useEffect(() => {
        axios.get('/api/user/verify')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return <Outlet />
}
export default PrivateComponent;