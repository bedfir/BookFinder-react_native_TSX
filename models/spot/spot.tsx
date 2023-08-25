import { Book } from "../book/book";

export class Spot {
    id: string;
    name: string;
    address: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
    books: Book[];
    createdAt: Date;
    updatedAt: Date;
}

