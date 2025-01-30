import axios from "axios"

export const getReq = async(url :string)=> {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch(err) {
        alert("오류 발생");
        return null;
    }
}