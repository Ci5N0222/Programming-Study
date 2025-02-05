import { connectDB } from '@/util/database';
import { PostType } from '@/types/types';
import styles from './page.module.css'
import Link from 'next/link';
import ListItem from './ListItem';

export default async function List() {

  const db = (await connectDB).db("forum");

  // post collection에 있는 데이터를 Array로 반환
  let list :PostType[] = await db.collection<PostType>('post').find().toArray();

  return (
    <div className={ styles.bg }>
      {
        list.map((item :PostType, i :number) => {
          return (
            <div className={ styles.item } key={ i }>
              <Link href={ `/board/${item._id}` }>{ item.title }</Link>
              <Link href={ `/edit/${item._id}` }> ✏️</Link>
              <ListItem />
              <p>{ item.content }</p>
            </div>
          )
        })
      }
    </div>
  )
} 