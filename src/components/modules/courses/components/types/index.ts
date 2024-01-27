export type Course = {
  id: string;
  author: string;
  title: string;
  thumbnail: string;
  duration: string;
  students: number;
  lessons: number;
  price: number;
  level: string;
  discontPercentage?: number;
};
