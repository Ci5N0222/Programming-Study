import { getConnect } from '@/util/database';
import styles from './page.module.css';
import { ObjectId } from 'mongodb';
import { PostType } from '@/types/types';

export default async function Edit({ params } : { params :{ idx :ObjectId }}) {

    // DB Connect
    const db = await getConnect("forum", "post");
    let result = await db.findOne({ _id : new ObjectId(params.idx) });

    if(!result) return "";

    return (
        <div className={ "p-20" }>
            <h4>글작성</h4>
            <form action="/api/edit" method="POST">
            <input className={ styles.input } type="text" name="title" placeholder="제목을 입력하세요" defaultValue={ result.title }/>
            <input className={ styles.input } type="text" name="content" defaultValue={ result.content } />
            <input className={ styles.input } type="hidden" name="_id" defaultValue={ result._id.toString() }/>
            <button className={ styles.button } type="submit">전송</button>
            </form>
        </div>
    )
}