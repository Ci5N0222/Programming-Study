import axios from "axios"

export const getReq = async(url :string) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch(err) {
        alert(`오류 발생 \n 원인 : ${err}`)
        return null;
    }
}

export const postReq = async(url :string, data: Object) => {
    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch(err) {
        alert(`오류 발생 \n 원인 : ${err}`);
        return null;
    }
}