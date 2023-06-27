import { formatPrice } from "@/utils/formatPrice";
import { Card } from "./styles";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export function ProductCard(props: ProductCardProps) {
  const price = formatPrice(props.price);

  return (
    <Card>
      <img src={props.image} alt={props.title}/>
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
}
