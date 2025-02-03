import styles from "./page.module.css";
import { connectDB } from "@/util/database";

export default async function Home() {

  const db = (await connectDB).db("forum");

  // post collection에 있는 데이터를 Array로 반환
  let list = await db.collection('post').find().toArray();

  return (
    <div className={styles.page}>
      Hi
    </div>
  );
}
