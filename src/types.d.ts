type Item = {
  name: string;
  color: string;
  imageUrl: string;
  price: number;
};

type CartItem = {
  id: number;
} & Item;
