import { useContext } from "react";
import { GlobalContext } from "../../context";
import useFetchHook from "../../hooks/useFetchHook";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const { products, setProducts } = useContext(GlobalContext);
  const { loading, errors } = useFetchHook(
    setProducts,
    "http://localhost:3000/api/V1/products"
  );

  if (loading) return <p>Loading, please wait...</p>;

  if (errors !== null) return <p>{errors}</p>;

  console.log(products);

  return (
    <div className="h-96 flex justify-center items-center max-w-5xl mx-auto">
      {products &&
        products.length > 0 &&
        products.map((item) => <ProductCard key={item.id} item={item} />)}
    </div>
  );
}
