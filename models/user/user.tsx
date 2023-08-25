import { Book } from "../book/book";

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  borrowedBooks: Book[];
  depositedBooks: Book[];
  createdAt: Date;
  updatedAt: Date;
}
