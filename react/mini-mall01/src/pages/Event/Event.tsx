import { Outlet } from "react-router-dom"

export const Event = () => {
    return (
        <div>
            이벤트~
            <Outlet></Outlet>
        </div>
    )
}