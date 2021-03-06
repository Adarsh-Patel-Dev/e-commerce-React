import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "AirPurifyingPlants",
    img:"https://m.media-amazon.com/images/I/716U5ZRF3CL._SX679_.jpg",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
      
  },
  {
    _id: uuid(),
    categoryName: "IndoorPlants",
    img:"https://m.media-amazon.com/images/I/618GkDO6kVL._SX679_.jpg",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "FloweringPlants",
    img:"https://m.media-amazon.com/images/I/51z+TsjbfIL.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "HerbPlants",
    img:"https://m.media-amazon.com/images/I/51dBWq4a2KL._SX679_.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
