import { ObjectId } from "mongodb";

export interface PostType {
  _id: ObjectId | string;
  title: string;
  content: string;
}
