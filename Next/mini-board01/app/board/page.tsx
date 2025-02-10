import { connectDB } from '@/util/database';
import { PostType } from '@/types/types';
import styles from './page.module.css'

import ListItem from './ListItem';

export default async function List() {

  const db = (await connectDB).db("forum");

  // post collection에 있는 데이터를 Array로 반환
  let list :PostType[] = await db.collection<PostType>('post').find().toArray();
  let items = list.map(item => ({
    ...item, _id: item._id.toString()
  }))

  return (
    <div className={ styles.bg }>
      <ListItem list={ items }/>
    </div>
  )
} 