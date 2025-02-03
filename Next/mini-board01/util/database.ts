import { MongoClient } from 'mongodb'

// .env.local 파일 만들어서 사용
const url = process.env.NEXT_PUBLIC_MONGO_URI as string;

// MongoClient 인스턴스를 캐싱하여 개발 환경에서 연결 유지
declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}
  
let connectDB: Promise<MongoClient>;
  
if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = new MongoClient(url).connect();
    }
    connectDB = global._mongoClientPromise;
} else {
    connectDB = new MongoClient(url).connect();
}

export { connectDB }


  

