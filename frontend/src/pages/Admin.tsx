import React from 'react'
import { useUser } from '../context/UserContext'

type Props = {}

const Admin = (props: Props) => {
    const { user } = useUser();
    
    return (
        <div>Admin</div>
    )
}

export default Admin