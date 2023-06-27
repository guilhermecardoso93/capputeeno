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
      <Image src={props.image} height={300} width={256} alt={props.title}/>
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
}
