export type Cart = {
  id: number;
  price: number;
  title: string;
  desc: string;
  type: string;
};

export type ProductData = {
  product: {
    id: number;
    title: string;
    category: string;
    type: string;
    price: number;
    reviews: number;
    description: string;
  };

  features: [
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    }
  ];
};
