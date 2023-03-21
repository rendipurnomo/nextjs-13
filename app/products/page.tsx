type Product = {
  id: number;
  title: string;
  price: number;
};

import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

async function getProduct() {
  const res = await fetch("http://localhost:8000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function page() {
  const products: Product[] = await getProduct();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex gap-2">
                <DeleteProduct {...product} />
                <UpdateProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
