// Data from the CSV file for IDs 1 to 13

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  images?: string[];
  descriptions?: string;
  itemdetails?: string;
  category?: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "oversized_black",
    price: 500,
    imageUrl: "https://i.postimg.cc/TPybfSd7/flib-oversized-black.png",
    quantity: 50,
    images:["https://i.postimg.cc/TPybfSd7/flib-oversized-black.png",
      "https://i.postimg.cc/TPybfSd7/flib-oversized-black.png",
      "https://i.postimg.cc/TPybfSd7/flib-oversized-black.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 2,
    name: "oversized_white",
    price: 500,
    imageUrl: "https://i.postimg.cc/kGCRNgxz/flib-oversized-white.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/kGCRNgxz/flib-oversized-white.png",
      "https://i.postimg.cc/kGCRNgxz/flib-oversized-white.png",
      "https://i.postimg.cc/kGCRNgxz/flib-oversized-white.png"
     ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 3,
    name: "roundneck_black",
    price: 500,
    imageUrl: "https://i.postimg.cc/brMXDCQ4/flib-roundneck-black.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/brMXDCQ4/flib-roundneck-black.png",
      "https://i.postimg.cc/XYqGkhCj/flib-bottle.png",
      "https://i.postimg.cc/brMXDCQ4/flib-roundneck-black.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 4,
    name: "bottle",
    price: 500,
    imageUrl: "https://i.postimg.cc/XYqGkhCj/flib-bottle.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/XYqGkhCj/flib-bottle.png",
      "https://i.postimg.cc/XYqGkhCj/flib-bottle.png",
      "https://i.postimg.cc/XYqGkhCj/flib-bottle.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 5,
    name: "mug",
    price: 500,
    imageUrl: "https://i.postimg.cc/XYPZH8fw/flib-mug.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/XYPZH8fw/flib-mug.png",
      "https://i.postimg.cc/XYPZH8fw/flib-mug.png",
      "https://i.postimg.cc/XYPZH8fw/flib-mug.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 6,
    name: "totebag",
    price: 500,
    imageUrl: "https://i.postimg.cc/9FFrcS1d/flib-totebag.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/9FFrcS1d/flib-totebag.png",
      "https://i.postimg.cc/9FFrcS1d/flib-totebag.png",
      "https://i.postimg.cc/9FFrcS1d/flib-totebag.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 7,
    name: "pullover_hoodie_black",
    price: 500,
    imageUrl: "https://i.postimg.cc/tJ7QMhtx/flib-pullover-hoodie-black.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/tJ7QMhtx/flib-pullover-hoodie-black.png",
      "https://i.postimg.cc/tJ7QMhtx/flib-pullover-hoodie-black.png",
      "https://i.postimg.cc/tJ7QMhtx/flib-pullover-hoodie-black.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 8,
    name: "zipup_hoodie_white",
    price: 500,
    imageUrl: "https://i.postimg.cc/Y9qJv1Ps/flib-zipup-hoodie-white.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/Y9qJv1Ps/flib-zipup-hoodie-white.png",
      "https://i.postimg.cc/Y9qJv1Ps/flib-zipup-hoodie-white.png",
      "https://i.postimg.cc/Y9qJv1Ps/flib-zipup-hoodie-white.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 9,
    name: "collared_white",
    price: 500,
    imageUrl: "https://i.postimg.cc/6qFSbFpk/flib-collared-white.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/6qFSbFpk/flib-collared-white.png",
      "https://i.postimg.cc/6qFSbFpk/flib-collared-white.png",
      "https://i.postimg.cc/6qFSbFpk/flib-collared-white.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 10,
    name: "flib_dryfit_white",
    price: 500,
    imageUrl: "https://i.postimg.cc/XvnPPfnY/flib-dryfit-white.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/XvnPPfnY/flib-dryfit-white.png",
      "https://i.postimg.cc/XvnPPfnY/flib-dryfit-white.png",
      "https://i.postimg.cc/XvnPPfnY/flib-dryfit-white.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 11,
    name: "dropshoulder_black",
    price: 500,
    imageUrl: "https://i.postimg.cc/Sj0Tf8Zq/flib-dropshoulder-black.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/Sj0Tf8Zq/flib-dropshoulder-black.png",
      "https://i.postimg.cc/Sj0Tf8Zq/flib-dropshoulder-black.png",
      "https://i.postimg.cc/Sj0Tf8Zq/flib-dropshoulder-black.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 12,
    name: "dropshoulder_white",
    price: 500,
    imageUrl: "https://i.postimg.cc/TYgfMcvV/flib-dropshoulder-white.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/TYgfMcvV/flib-dropshoulder-white.png",
      "https://i.postimg.cc/TYgfMcvV/flib-dropshoulder-white.png",
      "https://i.postimg.cc/TYgfMcvV/flib-dropshoulder-white.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  },
  {
    id: 13,
    name: "notebook",
    price: 500,
    imageUrl: "https://i.postimg.cc/jShTCd5C/flib-notebook.png",
    quantity: 50,
    images:[ "https://i.postimg.cc/jShTCd5C/flib-notebook.png",
      "https://i.postimg.cc/jShTCd5C/flib-notebook.png",
      "https://i.postimg.cc/jShTCd5C/flib-notebook.png"
    ],
    descriptions: "A cap with adjustable hook-and-loop strap at the back lets you personalise the fit.",
    itemdetails: "1. Material: 100% polyester\r\n\r\n2. Underbill: 100% cotton"
  }
];

export default initialProducts;