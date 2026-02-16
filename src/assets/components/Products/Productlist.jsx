import ProductCard from "./ProductCard";

export default function Produclist(props) {
  const { products } = props;
  return products.map((element) => {
    return (
      <ProductCard
        key={element.id}
        thumb={element.thumb}
        title={element.title}
      />
    );
  });
}
