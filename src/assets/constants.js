import blachotrapez_icon from "./furnizori/blachotrapez.svg";
import rufster_icon from "./furnizori/rufster.png";

import tigla_metalica_icon from "./tigla_metalica.jpg";
import tabla_cutata_icon from "./tabla_cutata.jpg";
import tabla_click_icon from "./tabla_click.jpg";

import aqua from "./products/tigla_metalica/aqua.png";
import celesta from "./products/tigla_metalica/celesta.png";
import nova from "./products/tigla_metalica/nova.png";
import terra from "./products/tigla_metalica/terra.png";
import enigma from "./products/tigla_metalica/enigma.png";
import diament from "./products/tigla_metalica/diament.webp";
import kingas from "./products/tigla_metalica/kingas.webp";

let PHONE_NUMBER = "+40772274867";
let EMAIL = "millenniumdachroof@gmail.com";

export const constants = {
  PHONE_NUMBER,
  EMAIL,
};

export const suppliers = [
  {
    _id: 1,
    name: "Rufster",
    logo: rufster_icon.src,
    website: "https://rufster.ro",
  },
  {
    _id: 2,
    name: "Blancho",
    logo: blachotrapez_icon.src,
    website: "https://blacho.ro/",
  },
];

export const color_type = [
  {
    _id: 1,
    name: "lucios",
  },
  {
    _id: 2,
    name: "mat",
  },
  {
    _id: 3,
    name: "ms",
  },
  {
    _id: 4,
    name: "mpr",
  },
];

export const colors = [
  {
    _id: 1,
    categories: [1, 2, 3, 4],
    name: "RAL 1015",
    description: "Fildeș Deschis",
    color: "#EADEBD",
  },
  {
    _id: 2,
    categories: [1, 2, 3, 4],
    name: "RAL 3000",
    description: "Roșu Aprins",
    color: "#AB2524",
  },
  {
    _id: 3,
    categories: [1, 2, 3, 4],
    name: "RAL 3005",
    description: "Vișiniu",
    color: "#5E2028",
  },
  {
    _id: 4,
    categories: [1, 2, 3, 4],
    name: "RAL 3009",
    description: "Cărămiziu",
    color: "#703731",
  },
  {
    _id: 5,
    categories: [1, 2, 3, 4],
    name: "RAL 3011",
    description: "Roșu Maroniu",
    color: "#7E292C",
  },
  {
    _id: 6,
    categories: [1, 2, 3, 4],
    name: "RAL 5010",
    description: "Albastru",
    color: "#13447C",
  },
  {
    _id: 7,
    categories: [1, 2, 3, 4],
    name: "RAL 6005",
    description: "Verde",
    color: "#0F4336",
  },
  {
    _id: 8,
    categories: [1, 2, 3, 4],
    name: "RAL 6011",
    description: "Verde Deschis",
    color: "#6C7C59",
  },
  {
    _id: 9,
    categories: [1, 2, 3, 4],
    name: "RAL 7024",
    description: "Gri Grafit",
    color: "#474A50",
  },
  {
    _id: 10,
    categories: [1, 2, 3, 4],
    name: "RAL 8004",
    description: "Maro Cupru",
    color: "#8F4E35",
  },
  {
    _id: 11,
    categories: [1, 2, 3, 4],
    name: "RAL 8017",
    description: "Maro Ciocolatiu",
    color: "#44322D",
  },
  {
    _id: 12,
    categories: [1, 2, 3, 4],
    name: "RAL 9002",
    description: "Alb",
    color: "#E7EBDA",
  },
  {
    _id: 13,
    categories: [1, 2, 3, 4],
    name: "RAL 9006",
    description: "Gri Aluminiu",
    color: "#A5A5A5",
  },
  {
    _id: 14,
    categories: [1, 2, 3, 4],
    name: "RAL 9007",
    description: "Gri Aluminiu (Închis)",
    color: "#8F8F8F",
  },
];

export const thicknesses = [
  {
    _id: 1,
    value: 0.4,
  },
  {
    _id: 2,
    value: 0.45,
  },
  {
    _id: 3,
    value: 0.5,
  },
];

export const categories = [
  {
    _id: 1,
    name: "Țiglă metalică",
    src: tigla_metalica_icon.src,
    description: "Descriere Țiglă metalică",
  },
  {
    _id: 2,
    name: "Tablă cutată",
    src: tabla_cutata_icon.src,
    description: "Descriere Tablă cutată",
  },
  {
    _id: 3,
    name: "Tablă click",
    src: tabla_click_icon.src,
    description: "Descriere Tablă click",
  },
];

export const products = [
  {
    _id: "aqua",
    name: "Țiglă AQUA",
    images: [aqua.src],
    categories: [1],
    supplier: 1,
    color_types: [1, 2, 3, 4],
    thicknesses: [1, 2, 3, 4],
    description: "Descriere AQUA",
    price: 123,
    prices: [
      {
        thickness_id: 1,
        color_type: [1, 2, 3, 4],
        price: 123,
      },
      {
        thickness_id: 2,
        color_type: [1, 2, 3, 4],
        price: 234,
      },
      {
        thickness_id: 3,
        color_type: [1, 2, 3, 4],
        price: 456,
      },
    ],
  },
  {
    _id: "celesta",
    name: "Țiglă CELESTA",
    images: [celesta.src],
    supplier: 1,
    categories: [1, 2],
    color_types: [1, 2, 3, 4],
    thicknesses: [1, 2, 3, 4],
    description: "Descriere CELESTA",
    price: 234,
    prices: [
      {
        thickness_id: 1,
        color_type: [1, 2],
        price: 123,
      },
      {
        thickness_id: 2,
        color_type: [1, 2, 3],
        price: 245,
      },
      {
        thickness_id: 3,
        color_type: [4],
        price: 456,
      },
    ],
  },
  {
    _id: "nova",
    name: "Țiglă NOVA",
    images: [nova.src],
    supplier: 1,
    categories: [1],
    color_types: [1, 2, 3, 4],
    thicknesses: [1, 2, 3, 4],
    description: "Descriere NOVA",
    price: 456,
    prices: [
      {
        thickness_id: 1,
        color_type: [1, 2],
        price: 123,
      },
      {
        thickness_id: 2,
        color_type: [1, 2, 3],
        price: 245,
      },
      {
        thickness_id: 3,
        color_type: [4],
        price: 456,
      },
    ],
  },
  {
    _id: "terra",
    name: "Țiglă TERRA",
    images: [terra.src],
    supplier: 1,
    categories: [1],
    color_types: [1, 2, 3, 4],
    thicknesses: [1, 2, 3, 4],
    description: "Descriere TERRA",
    price: 567,
    prices: [
      {
        thickness_id: 1,
        color_type: [1, 2],
        price: 123,
      },
      {
        thickness_id: 2,
        color_type: [1, 2, 3],
        price: 245,
      },
      {
        thickness_id: 3,
        color_type: [4],
        price: 456,
      },
    ],
  },
  {
    _id: "enigma",
    name: "Țiglă ENIGMA",
    images: [enigma.src],
    categories: [1],
    supplier: 2,
    color_types: [1, 2, 3, 4],
    thicknesses: [1, 2, 3, 4],
    description: "Descriere ENIGMA",
    price: 987,
    prices: [
      {
        thickness_id: 1,
        color_type: [1, 2],
        price: 123,
      },
      {
        thickness_id: 2,
        color_type: [1, 2, 3],
        price: 245,
      },
      {
        thickness_id: 3,
        color_type: [4],
        price: 456,
      },
    ],
  },
  {
    _id: "kingas",
    name: "Țiglă KINGAS",
    images: [kingas.src],
    categories: [1],
    supplier: 2,
    color_types: [1, 2, 3, 4],
    thicknesses: [1, 2, 3, 4],
    description: "Descriere KINGAS",
    price: 987,
    prices: [
      {
        thickness_id: 1,
        color_type: [1, 2],
        price: 123,
      },
      {
        thickness_id: 2,
        color_type: [1, 2, 3],
        price: 245,
      },
      {
        thickness_id: 3,
        color_type: [4],
        price: 456,
      },
    ],
  },
  {
    _id: "diament",
    name: "Țiglă DIAMENT",
    images: [diament.src],
    categories: [1],
    supplier: 2,
    color_types: [1, 2, 3, 4],
    thicknesses: [1, 2, 3, 4],
    description: "Descriere DIAMENT",
    price: 987,
    prices: [
      {
        thickness_id: 1,
        color_type: [1, 2],
        price: 123,
      },
      {
        thickness_id: 2,
        color_type: [1, 2, 3],
        price: 245,
      },
      {
        thickness_id: 3,
        color_type: [4],
        price: 456,
      },
    ],
  },
];
