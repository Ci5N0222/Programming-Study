'use client'

import { useEffect, useState } from "react"

export default function ListItem(){
    const [ result, setResult ] = useState("TEST");
    useEffect(()=>{
        setResult("DELETE");
    },[])
  
    return (
      <div>{result}</div>
    )
}