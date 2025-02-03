import { connectDB } from '@/util/database';
import styles from './page.module.css'
import { PostType } from '@/types/types';
import { ObjectId } from 'mongodb';

// Component 이름 입력
export default async function Detail(props : { params : { idx : ObjectId }}) {

  const id = props.params.idx;

  const db = (await connectDB).db("forum");

  // post collection에 있는 데이터를 Array로 반환
  let detail :PostType | null = await db.collection<PostType>('post').findOne({ _id : new ObjectId(id) });
  if(!detail) throw new Error("게시물을 찾을 수 없습니다.");
  
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{ detail.title }</h4>
      <p>{ detail.content }</p>
    </div>
  )
}