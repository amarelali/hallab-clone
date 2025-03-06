import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const stores = [
  { id: 1, name: "Lebanon Store" },
  { id: 2, name: "Europe Store" },
  { id: 3, name: "International Store" },
];

export const currency = [
  { id: 1, name: "USD $" },
  { id: 2, name: "LBP" },
];
export const sortby = [
  {
    id: 1,
    name: "Featured",
  },
  {
    id: 2,
    name: "Newest Arrivals",
  },
  {
    id: 3,
    name: "Name (A-Z)",
  },
  {
    id: 4,
    name: "Price - Low to High",
  },
  {
    id: 5,
    name: "Price - High to Low",
  },
];

// used for home
export const Hallabproducts: { image: string; name: string; price: number }[] =
  [
    {
      image: "/web/image/product.product/66542/image_512?unique=7e79390",
      name: "Box of 700 gr Milk & Dark Chocolate No Added Sugar",
      price: 32.0,
    },
    {
      image: "/web/image/product.product/66541/image_512?unique=7e79390",
      name: "Gift Box of 170 gr Chocolate Supreme",
      price: 13.0,
    },
    {
      image: "/web/image/product.product/66540/image_512?unique=7e79390",
      name: "Gift Box of 630 gr Chocolate Deluxe",
      price: 34.0,
    },
    {
      image: "/web/image/product.product/66539/image_512?unique=7e79390",
      name: "Gift Box of 400 gr Chocolate Golden",
      price: 21.0,
    },
    {
      image: "/web/image/product.product/66538/image_512?unique=7e79390",
      name: "Box of 615 gr Milk Chocolate",
      price: 29.0,
    },
    {
      image: "/web/image/product.product/66537/image_512?unique=7e79390",
      name: "Box of 615 gr Dark Chocolate",
      price: 36.0,
    },
    {
      image: "/web/image/product.product/66536/image_512?unique=db82f25",
      name: "Gift Box of 415 gr Chocolate Arabesque",
      price: 20.5,
    },
    {
      image: "/web/image/product.product/65837/image_512?unique=7e79390",
      name: "Box Of 500Gr Barazek",
      price: 14.0,
    },
    {
      image: "/web/image/product.product/65833/image_512?unique=7e79390",
      name: "Box Of Petit Four Regular (Large)",
      price: 17.0,
    },
    {
      image: "/web/image/product.product/65832/image_512?unique=7e79390",
      name: "Box Of Petit Four Regular (Small)",
      price: 10.0,
    },
    {
      image: "/web/image/product.product/65831/image_512?unique=7e79390",
      name: "Box Of Petit Four Mix (Large)",
      price: 21.0,
    },
    {
      image: "/web/image/product.product/65830/image_512?unique=7e79390",
      name: "Box Of Petit Four Mix (Small)",
      price: 11.0,
    },
    {
      image: "/web/image/product.product/65829/image_512?unique=7e79390",
      name: "Box Of Petit Four Extra (Large)",
      price: 22.0,
    },
  ];

export const feedbacks: { name: string; description: string }[] = [
  {
    name: "​Rockstar Pandey",
    description:
      "Must-visit in Tripoli, Lebanon. Superb Lebanese breakfast & sweets. Top-notch service, cleanliness, and desserts. Unmissable stop in Lebanon.",
  },
  {
    name: "A Soufan",
    description:
      "What a great and professional customer service, very polite and friendly, really amazed with how they serve people here.",
  },
  {
    name: "Lukas Kubin",
    description: "Amazing Lebanese sweets and gorgeous service.",
  },
  {
    name: "Israa Elamary",
    description:
      "The best in terms of quality, taste, and service. Simply number 1! Super tasty and friendly staff. I came from the south specially to try it and it's worth. Highly recommended 👏🏻",
  },
  {
    name: "Tarek Mar",
    description:
      "Hallab 1881 قصر الحلو excels in oriental sweets, cakes, and ice cream. Renowned for quality and warm ambiance. Enjoy Lebanese breakfast, diverse coffee, and desserts.",
  },
  {
    name: "Angelo Baaklini",
    description:
      "Impressive breakfast experience; must-try knefe with jebne. Unmatched service, clean setting, diverse sweets. Don't miss the flavorful lahm b3ajin. Excellent value.",
  },
];

export const socialMediaLinks = [
  { icon: faFacebookF, url: "https://www.facebook.com", name: "Facebook" },
  { icon: faInstagram, url: "https://www.instagram.com", name: "Instagram" },
  { icon: faXTwitter, url: "https://twitter.com", name: "Twitter" },
  { icon: faLinkedin, url: "https://www.linkedin.com", name: "LinkedIn" },
];

export const categories = [
  {
    name: "All Products",
    link: "/shop",
  },
  {
    name: "Teacher's Day 2025",
    link: "/shop/category/teacher-s-day-2025-121",
    id: 121,
  },
  {
    name: "Ramadan 2025",
    link: "/shop/category/ramadan-2025-115",
    id: 115,
    subcategories: [
      {
        name: "Ramadan Specials",
        link: "/shop/category/ramadan-2025-ramadan-specials-119",
        id: 119,
      },
      {
        name: "Ramadan Sweets",
        link: "/shop/category/ramadan-2025-ramadan-sweets-116",
        id: 116,
      },
      {
        name: "Ramadan Sweets Pieces",
        link: "/shop/category/ramadan-2025-ramadan-sweets-pieces-118",
        id: 118,
      },
      {
        name: "Ramadan Arrangements",
        link: "/shop/category/ramadan-2025-ramadan-arrangements-120",
        id: 120,
      },
      {
        name: "Ramadan Boxes",
        link: "/shop/category/ramadan-2025-ramadan-boxes-117",
        id: 117,
      },
    ],
  },
  {
    name: "Fasting 2025",
    link: "/shop/category/fasting-2025-86",
    id: 86,
  },
  {
    name: "Winter Season 2025",
    link: "/shop/category/winter-season-2025-110",
    id: 110,
  },
  {
    name: "Knefeh",
    link: "/shop/category/knefeh-7",
    id: 7,
  },
  {
    name: "Baklava",
    link: "/shop/category/baklava-1",
    id: 1,
  },
  {
    name: "Maamoul",
    link: "/shop/category/maamoul-3",
    id: 3,
  },
  {
    name: "Kashtawet",
    link: "/shop/category/kashtawet-6",
    id: 6,
    subcategories: [
      {
        name: "Kashtawet / Plate",
        link: "/shop/category/kashtawet-kashtawet-plate-41",
        id: 41,
      },
      {
        name: "Kashtawet / Kashtawet",
        link: "/shop/category/kashtawet-kashtawet-kashtawet-42",
        id: 42,
      },
    ],
  },
  {
    name: "Oriental Sweets",
    link: "/shop/category/oriental-sweets-77",
    id: 77,
  },
  {
    name: "Chocolate & Confectioneries",
    link: "/shop/category/chocolate-confectioneries-5",
    id: 5,
    subcategories: [
      {
        name: "Winter Chocolate Arrangements",
        link: "/shop/category/chocolate-confectioneries-winter-chocolate-arrangements-112",
        id: 112,
      },
    ],
  },
  {
    name: "Cakes & French Pastries",
    link: "/shop/category/cakes-french-pastries-8",
    id: 8,
    subcategories: [
      {
        name: "Cakes",
        link: "/shop/category/cakes-french-pastries-cakes-19",
        id: 19,
      },
      {
        name: "Cake Pieces",
        link: "/shop/category/cakes-french-pastries-cake-pieces-20",
        id: 20,
      },
      {
        name: "Seasonal Cakes",
        link: "/shop/category/cakes-french-pastries-seasonal-cakes-28",
        id: 28,
      },
      {
        name: "French Pastries",
        link: "/shop/category/cakes-french-pastries-french-pastries-40",
        id: 40,
      },
      {
        name: "Croissants",
        link: "/shop/category/cakes-french-pastries-croissants-22",
        id: 22,
      },
    ],
  },
  {
    name: "Ice Cream",
    link: "/shop/category/ice-cream-9",
    id: 9,
    subcategories: [
      {
        name: "Ice Cream Prepacked",
        link: "/shop/category/ice-cream-ice-cream-prepacked-16",
        id: 16,
      },
      {
        name: "Ice Cream Cakes",
        link: "/shop/category/ice-cream-ice-cream-cakes-17",
        id: 17,
      },
    ],
  },
  {
    name: "Pastries",
    link: "/shop/category/pastries-32",
    id: 32,
  },
  {
    name: "Signature Items",
    link: "/shop/category/signature-items-11",
    id: 11,
  },
];
