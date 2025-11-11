import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminRoutes = (props: Props) => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AdminRoutes