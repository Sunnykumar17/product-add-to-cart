import { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };
  return (
    <div style={{ margin: "30px" }}>
      <h2 style={{ color: "orange" }}>Product Component</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        quasi iusto consequuntur provident, quibusdam earum consequatur vero
        iure voluptates quis. Illum unde itaque laborum dolore temporibus
        tempora quaerat autem, impedit eveniet laudantium, eos ut veritatis
        omnis. Quia possimus assumenda nostrum amet delectus nesciunt libero
        velit, numquam hic! Ea, quam aliquid.
      </p>
      {products.length > 0 ? (
        <div className="main-container">
          {products.map((ele) => {
            return (
              <div className="card">
                <h3>{ele.category}</h3>
                <img src={ele.image} alt="img" width="200" height="200" />
                <h3>{ele.title}</h3>
                <p>₹ {ele.price}</p>
                <Link to={`/addtocart/${ele.id}`}>
                  <button>Add to Cart</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Data Found</h2>
      )}
    </div>
  );
};

export default Product;
