import { useState } from "react"

export const useLike = () => {
    let [ like, setLike ] = useState(0);
    const addLike = () => {
        setLike(prev => prev + 1);
    }
    return [ like, addLike ];
}

export default useLike;