import { Book } from "./book";

export interface Offer {
    id: number;
    title: string;
    description: string;
    isSpecial: boolean;
    startDate: Date;
    endDate: Date;
    books: Book[];
  }