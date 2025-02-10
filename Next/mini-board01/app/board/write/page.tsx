import Link from 'next/link'
import styles from './page.module.css'

export default function Write(){
  return (
    <div className={ "p-20" }>
      <h4>글작성</h4>
      <form action="/api/board" method="POST">
        <input className={ styles.input } type="text" name="title" placeholder="제목을 입력하세요"/>
        <input className={ styles.input } type="text" name="content" />
        <button className={ styles.button } type="submit">버튼</button>
        <Link href={ '/board' }>취소</Link>
      </form>
    </div>
  )
}