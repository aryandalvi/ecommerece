import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Product=()=>{
    const { id } = useParams();
    console.log("Balls")
    const [product,setProduct]=useState<any>(null);
    useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => setProduct(response.data))
    }, [id]);
    console.log(product)
    return(
        <>
        <div className="min-h-screen bg-Background text-Textcolor p-10 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          {/* <img
            // src={product.thumbnail}
            alt={product.title}
            className="rounded-lg w-full h-96 object-contain border border-amber-200 bg-white p-4"
          /> */}
          <div className="flex gap-3 justify-center">
            {product.images.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                alt={`${product.title}-${i}`}
                className="w-20 h-20 object-cover rounded-md border hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg text-gray-400 mb-4">{product.category}</p>
            <p className="text-3xl font-semibold mb-4">${product.price}</p>
            <p className="text-md text-gray-300 mb-4">{product.description}</p>
            <div className="flex gap-3 mb-4">
              <span className="badge badge-warning text-lg">{product.rating} ★</span>
              <span className="badge badge-outline">Stock: {product.stock}</span>
              <span className="badge badge-outline">{product.availabilityStatus}</span>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Brand: {product.brand}</p>
              <p>Warranty: {product.warrantyInformation}</p>
              <p>Shipping: {product.shippingInformation}</p>
              <p>Return Policy: {product.returnPolicy}</p>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Product