import { connectDB } from '@/util/database';
import { PostType } from '@/types/types';
import styles from './page.module.css'

import ListItem from './ListItem';
import Link from 'next/link';

// 캐싱된 페이지를 60초 동안 보관
// export const revalidate = 60;

// Dynamic rendering 사용
// export const dynamic = "force-dynamic";

export default async function List() {

  const db = (await connectDB).db("forum");

  // post collection에 있는 데이터를 Array로 반환
  let list :PostType[] = await db.collection<PostType>('post').find().toArray();
  let items = list.map(item => ({
    ...item, _id: item._id.toString()
  }))

  return (
    <div className={ styles.bg }>
      <Link href={ '/board/write' }>글쓰기</Link>
      <ListItem list={ items }/>
    </div>
  )
} 