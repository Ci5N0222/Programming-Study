import axios from "axios";
import { useState } from "react"

interface User {
    name :string
}

export const useUserName = () :[User, () => void] => {
    const [ user, setUser ] = useState({name : "kim"});
    const getName = () :void => {
        axios.get('/public/data/user.json').then(res => {
            console.log("user name ==== ", res);
            if(res.data) {
                setUser(prev => ({ ...prev, name : res.data.name }) );
            }
        })
        .catch(err => {
            console.log("Error ==== ", err);
        });
    }
    return [ user, getName ];
}

export default useUserName;