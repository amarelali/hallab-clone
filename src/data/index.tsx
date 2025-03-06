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

export const sweetsProducts = [
  {
    name: "Chocolate Baklawa Peanuts",
    description: "A delightful fusion between Baklava and Chocolate.",
    image:
      "/web/image/product.template/78243/image_512/Chocolate%20Baklawa%20Peanuts?unique=cfe65a6",
    url: "/shop/chocolate-baklawa-peanuts-78243",
    product_id: "63988",
    price: "19.50",
    currency: "USD",
    min_quantity: "0.5",
  },
  {
    name: "Prepacked-Baklawa&Maamoul",
    description:
      "Double layered assortment of 1265 gr including 635 gr of Mix Baklava pieces stuffed with Pistachios Cashew nuts & Walnuts and 630 gr Mix Maamoul Mini pieces stuffed with a variety of fillings such as Dates Ground Walnuts and Ground Pistachios.",
    image:
      "/web/image/product.template/72146/image_512/Prepacked-Baklawa%26Maamoul?unique=82dbe08",
    url: "/shop/prepacked-baklawa-maamoul-72146",
    product_id: "54412",
    price: "44.50",
    currency: "USD",
    min_quantity: "1.0",
  },
  {
    name: "Mchakal Baklawa Dome",
    description:
      "Bronze tray of 1600 gr mixed baklava pieces stuffed with Cashew Nuts Pistachios and Walnuts.",
    image:
      "/web/image/product.template/50374/image_512/%5BMixed%20Baklava%20Dome%5D%20Mchakal%20Baklawa%20Dome?unique=14c4d3e",
    url: "/shop/mixed-baklava-dome-mchakal-baklawa-dome-50374",
    product_id: "40519",
    price: "43.00",
    currency: "USD",
    min_quantity: "1.0",
  },
  {
    name: "Mixed Baklava Original",
    description: "Bite-sized mix baklava pieces.",
    image:
      "/web/image/product.template/77808/image_512/Mixed%20Baklava%20Original?unique=c8e04f5",
    url: "/shop/mixed-baklava-original-77808",
    product_id: "62884",
    price: "20.00",
    currency: "USD",
    min_quantity: "0.5",
  },
  {
    name: "Knefeh Kashta Platter",
    description:
      "Two layered semolina dough centered with kashta garnished with ground pistachios & flower jam.",
    price: 25.0,
    currency: "USD",
    image:
      "/web/image/product.template/77887/image_512/Knefeh%20Kashta%20Platter?unique=b8ad8cb",
    product_url: "/shop/knefeh-kashta-platter-77887",
    product_id: 63067,
    min_quantity: 1.0,
  },
  {
    name: "Knefeh Cheese Platter",
    description:
      "Two layered semolina dough centered with cheese garnished with ground pistachios.",
    price: 25.0,
    currency: "USD",
    image:
      "/web/image/product.template/77886/image_512/Knefeh%20Cheese%20Platter?unique=af81982",
    product_url: "/shop/knefeh-cheese-platter-77886",
    product_id: 63062,
    min_quantity: 1.0,
  },
  {
    name: "Lebanese Kaak Round",
    description: "Round Arabic kaak suits with knefe or mafrouke.",
    price: 0.5,
    currency: "USD",
    image:
      "/web/image/product.template/49055/image_512/Lebanese%20Kaak%20Round?unique=a8b718d",
    product_url: "/shop/lebanese-kaak-round-49055",
    product_id: 42918,
    min_quantity: 6.0,
  },
  {
    name: "Chocolate Assabeh Cashew",
    description: "A delightful fusion between Baklava fingers and Chocolate.",
    price: 22.5,
    currency: "USD",
    image:
      "/web/image/product.template/78246/image_512/Chocolate%20Assabeh%20Cashew?unique=a8ec92b",
    product_url: "/shop/chocolate-assabeh-cashew-78246",
    product_id: 63991,
    min_quantity: 0.5,
  },
  {
    name: "Knefeh Cheese & Kashta",
    description:
      "A Combination of Knefeh Kashta and Knefeh Cheese. Two layered semolina dough centered with kashta or cheese garnished with ground pistachios and flower jam. Served with a bottle of sugar syrup aside.",
    price: 21.0,
    currency: "USD",
    image:
      "/web/image/product.template/77873/image_512/Knefeh%20Cheese%20%26%20Kashta?unique=811efd6",
    product_url: "/shop/knefeh-cheese-kashta-77873",
    product_id: 63031,
    min_quantity: 0.5,
  },
  {
    name: "Knefeh Chocolate",
    description:
      "Two Layered Semolina dough centered with kashta cream and topped with Belgium Chocolate.",
    price: 29.5,
    currency: "USD",
    image:
      "/web/image/product.template/77872/image_512/Knefeh%20Chocolate?unique=426243c",
    product_url: "/shop/knefeh-chocolate-77872",
    product_id: 63029,
    min_quantity: 0.5,
  },
  {
    name: "Knefeh Cheese & Chocolate",
    description:
      "Two Layered Semolina dough centered with cheese and topped with Belgium Chocolate.",
    price: 29.5,
    currency: "USD",
    image:
      "/web/image/product.template/77874/image_512/Knefeh%20Cheese%20%26%20Chocolate?unique=8e7d2ba",
    product_url: "/shop/knefeh-cheese-chocolate-77874",
    product_id: 63035,
    min_quantity: 0.5,
  },
  {
    name: "Knefeh Apple Cinnamon",
    description:
      "Two layered semolina dough centered with caramelized apples and cinnamon.",
    price: 21.0,
    currency: "USD",
    image:
      "/web/image/product.template/77877/image_512/%5BKnefeh%20Apple%20Cinnamon%5D%20Knefeh%20Apple%20Cinnamon?unique=feaf7d4",
    product_url: "/shop/knefeh-apple-cinnamon-knefeh-apple-cinnamon-77877",
    product_id: 63041,
    min_quantity: 1.0,
  },
  {
    name: "Kaaket Knefeh Chocolate",
    description:
      "A delightful combination between traditional Arabic kaak Knefeh and Chocolate.",
    price: 5.0,
    currency: "USD",
    image:
      "/web/image/product.template/77885/image_512/Kaaket%20Knefeh%20Chocolate?unique=fd043e5",
    product_id: 63059,
    min_quantity: 1.0,
    url: "/shop/kaaket-knefeh-chocolate-77885",
  },
  {
    name: "Kaaket Knefeh Cheese Chocolate",
    description:
      "A delightful combination between traditional Arabic kaak Knefeh and Chocolate.",
    price: 5.0,
    currency: "USD",
    image:
      "/web/image/product.template/77884/image_512/Kaaket%20Knefeh%20Cheese%20Chocolate?unique=35d74c6",
    product_id: 63058,
    min_quantity: 1.0,
    url: "/shop/kaaket-knefeh-cheese-chocolate-77884",
  },
  {
    name: "Knefeh Kashta",
    description:
      "Two layered semolina dough centered with kashta garnished with ground pistachios and flower jam. Served with a bottle of sugar syrup aside.",
    price: 21.0,
    currency: "USD",
    image:
      "/web/image/product.template/77871/image_512/Knefeh%20Kashta?unique=975a7d9",
    product_id: 63027,
    min_quantity: 0.5,
    url: "/shop/knefeh-kashta-77871",
  },
  {
    name: "Knefeh Cheese",
    description:
      "Two layered semolina dough centered with cheese garnished with ground pistachios and flower jam. Served with a bottle of sugar syrup aside.",
    price: 21.0,
    currency: "USD",
    image:
      "/web/image/product.template/77870/image_512/Knefeh%20Cheese?unique=1bca9b0",
    product_id: 63033,
    min_quantity: 0.5,
    url: "/shop/knefeh-cheese-77870",
  },
  {
    name: "Croissant Knefeh",
    description:
      "A delightful combination between Croissant and knefeh Cheese or Kashta.",
    price: 4.5,
    currency: "USD",
    image:
      "/web/image/product.template/77732/image_512/Croissant%20Knefeh?unique=61743e6",
    product_id: 62669,
    min_quantity: 1.0,
    url: "/shop/croissant-knefeh-77732",
  },
  {
    name: "Kaaket Knefeh Kashta",
    description:
      "A delightful combination between traditional arabic kaak and knefeh.",
    price: 2.5,
    currency: "USD",
    image:
      "/web/image/product.template/77881/image_512/Kaaket%20Knefeh%20Kashta?unique=269c22f",
    product_id: 63052,
    min_quantity: 1.0,
    url: "/shop/kaaket-knefeh-kashta-77881",
  },
  {
    name: "Kaaket Knefeh Cheese",
    description:
      "A delightful combination between traditional arabic kaak and knefeh.",
    price: 2.5,
    currency: "USD",
    image:
      "/web/image/product.template/77880/image_512/Kaaket%20Knefeh%20Cheese?unique=d8b9fc2",
    product_id: 63050,
    min_quantity: 1.0,
    url: "/shop/kaaket-knefeh-cheese-77880",
  },
  {
    name: "Knefeh Plate Take Away",
    description: "A portion of 200 gr of knefeh Kashta or Cheese.",
    price: 5.5,
    currency: "USD",
    image:
      "/web/image/product.template/77878/image_512/Knefeh%20Plate%20Take%20Away?unique=734f916",
    product_id: 63042,
    min_quantity: 1.0,
    url: "/shop/knefeh-plate-take-away-77878",
  },
];
