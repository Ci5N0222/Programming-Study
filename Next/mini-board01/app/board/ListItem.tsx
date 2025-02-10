'use client'
import Link from 'next/link';
import { PostType } from "@/types/types";
import { useEffect, useState } from "react"
import styles from './page.module.css'
import { ObjectId } from 'mongodb';

export default function ListItem({ list } : { list : PostType[]}){

    const [ listItem, setListItem ] = useState<PostType[]>([]);

    const handleListItem = (id :string | ObjectId) => {
      setListItem((prev :PostType[]) => {
        return prev.filter(item => item._id !== id);
      });
    }

    useEffect(()=>{
      setListItem(list);
    },[])
  
    return (
      <>
        {
        listItem.map((item :PostType, i :number) => {
          return (
            <div className={ styles.item } key={ i }>
              <Link href={ `/board/${item._id}` }>{ item.title }</Link>
              <Link href={ `/edit/${item._id}` }> ✏️ </Link>
              <span onClick={ () => {
                fetch('/api/board', {
                  method : 'DELETE',
                  headers : { "Content-Type" : "application/json" },
                  body : JSON.stringify({_id : item._id})
                })
                .then(data => data.json())
                .then(res => {
                  alert(res.message);
                  handleListItem(item._id);
                })
              }}> 🗑️ </span>
              <p>{ item.content }</p>
            </div>
          )
        })
      }
      </>
    )
}