import { UUID } from "crypto";

export type Course = {
  id: UUID;
  image: string;
  author: string;
  title: string;
  duration: string;
  numberOfStudents: number;
  price: number;
  discountPercentage?: number;
  category: string;
};
