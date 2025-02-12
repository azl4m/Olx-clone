import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const Home = () => {
  const { products, search, menu } = useProductContext();
  console.log(products);

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products
        ?.filter((data: any) => data?.title?.includes(search ? search : menu))
        .map((product: any, index: number) => {
          return (
            <Link to="/details" state={{ data: product }} key={index}>
              <div className="border border-gray-300 rounded-lg p-4 shadow-md">
                <img
                  className="w-full h-48 object-cover rounded-md"
                  src={product?.image}
                  alt={product?.title}
                />
                <h1 className="font-bold text-xl mt-2">${product?.price}</h1>
                <h1 className="text-lg">{product?.title}</h1>
                <h1 className="text-gray-500">{product?.category}</h1>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
