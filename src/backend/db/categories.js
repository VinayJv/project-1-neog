import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Graphic Cards",
    description:
      "A graphics card is a computer expansion card that generates a feed of graphics output to a display device such as a monitor.",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    _id: uuid(),
    categoryName: "CPU Coolers",
    description:
      "A component that draws heat away from a CPU chip and other hot-running chips such as a graphics processor (GPU).",
    image:
      "https://images.unsplash.com/photo-1658673609646-9c7ba9514b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3B1JTIwY29vbGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Storage",
    description:
      "Computer data storage is a technology consisting of computer components and recording media that are used to retain digital data.",
    image:
      "https://images.unsplash.com/photo-1628557118391-56cd62c9f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
  },
];
