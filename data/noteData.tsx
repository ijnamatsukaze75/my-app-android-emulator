import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/img1.png"),
    title: "Belajar Mobile App",
    description: "Belajar membuat aplikasi mobile app",
    date: "29 October 2025",
  },
  {
    id: 2,
    image: require("@/assets/images/img2.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
  {
    id: 3,
    image: require("@/assets/images/img3.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
  {
    id: 4,
    image: require("@/assets/images/img4.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
  {
    id: 5,
    image: require("@/assets/images/img4.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
  {
    id: 6,
    image: require("@/assets/images/img4.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
  {
    id: 7,
    image: require("@/assets/images/img4.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
   {
    id: 8,
    image: require("@/assets/images/img4.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
   {
    id: 9,
    image: require("@/assets/images/img4.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
   {
    id: 10,
    image: require("@/assets/images/img4.png"),
    title: "Belajar BackEnd",
    description: "Belajar membuat aplikasi restful api",
    date: "30 October 2025",
  },
];

type Note = {
  id: number;
  image: ImageSourcePropType ;
  title: string;
  description: string;
  date: string;
};