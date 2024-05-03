import { Book } from "./book";

export interface Offer {
    id: number;
    title: string;
    description: string;
    isSpecial: boolean;
    startDate: Date;
    endDate: Date;
    books: Book[];
<<<<<<< HEAD
    imageData: string;
=======
>>>>>>> 3efc6b92fb6f7d8cd142a77baa24edc36dd7bc2c
  }