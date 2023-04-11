import {useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const AddToCart = () => {
    const { id } = useParams();
    const [state, setState] = useState({
        id: 0,
        description: "",
        image: "",
        price: "",
        category:"",
    },[]);
    useEffect(() => {
        getData();
      }, );
    
      const getData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
          console.log(data);
          setState(data);
      
      };
  return (
    <div style={{textAlign:"center",margin:"50px",boxShadow:"0 0 10px black"}}>
          <h2>{state.category}</h2> 
          <img src={state.image} alt="img" width='300' height="300" />
          <h3>{state.title}</h3>
          <p>₹{ state.price}</p>
          
    </div>
  );
};

export default AddToCart;
