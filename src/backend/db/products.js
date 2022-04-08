import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Areca Plant",
    desc: "Green Arcea Palm Air Purifier Natural Live Plant",
    rating: 3.4,
    inStock: true,
    price: {
      original: "1000",
      discount: "50",
      discounted: "500",
    },
    img: "https://m.media-amazon.com/images/I/716U5ZRF3CL._SX679_.jpg",
    categoryName: "AirPurifyingPlants",
  },
  
  {
    _id: uuid(),
    title: "Philodendron Broken Heart",
    desc: "Philodendron Broken Heart Indoor Plant with Self Watering Pot",
    rating: 4.4,
    inStock: false,
    price: {
      original: "1950",
      discount: "20",
      discounted: "600",
    },
    img:"https://m.media-amazon.com/images/I/618GkDO6kVL._SX679_.jpg",
    categoryName: "IndoorPlants",
  },
  
  {
    _id: uuid(),
    title: "Monstera Deliciosa Plant",
    desc: "Loved for beautiful leathery green foliage Plant with self watering pot",
    rating: 4.5,
    inStock: false,
    price: {
      original: "2160",
      discount: "20",
      discounted: "1150",
    },
    img:"https://m.media-amazon.com/images/I/61wC74yvwBL._SX679_.jpg",
    categoryName: "IndoorPlants",
  },
  
  {
    _id: uuid(),
    title: "Golden Money Plant",
    desc: "Money plant is an excellent indoor plant due to its ability ot survive in low light",
    rating: 2.4,
    inStock: true,
    price: {
      original: "3950",
      discount: "25",
      discounted: "2500",
    },
    img:"https://m.media-amazon.com/images/I/61w0c0qeqXL._SX679_.jpg",
    categoryName: "AirPurifyingPlants",
  },
  
  {
    _id: uuid(),
    title: " Lucky Bamboo Plant",
    desc: "One of the popular indoor plant it is easy to care for making it a perfect plant for home decor.",
    rating: 3.1,
    inStock: true,
    price: {
      original: "1360",
      discount: "80",
      discounted: "560",
    },
    img:"https://m.media-amazon.com/images/I/51goUkNZtgL.jpg",
    categoryName: "IndoorPlants",
  },
  
  {
    _id: uuid(),
    title: "Camellia Flower Plant",
    desc: "Camellia Flower Plant is Appealing elegant and easy to grow plant for your home.",
    rating: 1.4,
    inStock: true,
    price: {
      original: "2050",
      discount: "53",
      discounted: "1100",
    },
    img:"https://m.media-amazon.com/images/I/51z+TsjbfIL.jpg",
    categoryName: "FloweringPlants",
  },
  
  {
    _id: uuid(),
    title: "Aglaonema Red Plant",
    desc: "Aglaonema Red is the most stylish houseplant and needs minimal care and can thrive extremely well in low light levels.",
    rating: 3.4,
    inStock: true,
    price: {
      original: "1650",
      discount: "52",
      discounted: "650",
    },
    img:"https://m.media-amazon.com/images/I/71XnBPcAW7L._SX679_.jpg",
    categoryName: "AirPurifyingPlants",
  },
  
  {
    _id: uuid(),
    title: "Calathea Rufibarba Plant",
    desc: "Calatheas plants are known to be temperamental with the right amount of water and indirect light they are a treat.",
    rating: 4.9,
    inStock: true,
    price: {
      original: "2000",
      discount: "55",
      discounted: "950",
    },
    img:"https://m.media-amazon.com/images/I/51dBWq4a2KL._SX679_.jpg",
    categoryName: "HerbPlants",
  },
  
  {
    _id: uuid(),
    title: "Red Rose Plant Button Rose ",
    desc: "Red Rose Plant Button Rose with White Pot In Green Colour. It is a very popular plant for indoor use.",
    rating: 5.0,
    inStock: true,
    price: {
      original: "1450",
      discount: "20",
      discounted: "500",
    },
    img:"https://m.media-amazon.com/images/I/61xHxnPAlyL._SL1000_.jpg",
    categoryName: "FloweringPlants",
  },
  
];
