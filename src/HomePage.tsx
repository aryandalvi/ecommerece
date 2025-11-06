import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



type Dim = {
  width: number;
  height: number;
  depth: number;
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type Item = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  weight: number;
  dimensions: Dim;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

const HomePage = () => {
  const [products, setProducts] = useState<Item[]>([]);


  useEffect(() => {
    axios.get("https://dummyjson.com/products")
        .then((response) => setProducts(response.data.products))
      .catch((error) => {
        console.error("Error LMAO: ", error);
      });
  }, []);

  const categorys= new Set(products.map((d)=>d.category)) 
  const categoryArray=Array.from(categorys)
  const highRated = products.filter((p) => p.rating >= 4.5);

  return (
    <>
    
    <div className="min-h-screen w-full bg-Background text-Textcolor">
    
      <div className="flex justify-center items-center text-center py-32">
        
        <div>
          <h1 className="text-6xl md:text-8xl font-black">
            ShopyFy, The One Shop
          </h1>
          <h2 className="text-6xl md:text-8xl font-black">
            For Every Item!
          </h2>
        </div>
      </div>

     
      <div className="py-20 px-10">
        <div className="flex justify-center pt-20 py-10">
            <span className="border-2 rounded-2xl bg-Textcolor text-Background text-5xl p-2.5">Top Rated</span>
        </div>
        <div className="">
            <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[ Navigation,Autoplay]}
          className="w-[80%]"
          loop={true}
          autoplay={{
            delay:1500,
            disableOnInteraction: false,
          }}

        >
          {highRated.map((item) => (
            <SwiperSlide className=" py-2" key={item.id}>
                <Link to={`/products/${item.id}`} className=" h-90 bg-amber-50 m-1 card group shadow ease-in-out duration-400 transition hover:shadow-lg hover:-translate-y-2">
              <div className="card shadow-md rounded-2xl h-96 border-2 bg-amber-100 border-Textcolor text-center p-5 flex flex-col justify-center">
                <span className="absolute top-3 left-3 badge-warning text-2xl">{item.rating} ★</span>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-40 h-40 object-contain mx-auto mb-4 bg"
                />
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-lg mt-2">${item.price}</p>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>   
        </div>
        <div>
            <div className="flex justify-center pt-20">
                    <span className="border-2 rounded-2xl bg-Textcolor text-Background text-5xl p-2.5">All Prodcuts</span>
                </div>
            <div className="flex justify-center pt-10">
                <div className="grid w-3/4 grid-cols-3 gap-4">
                {products.map((item)=>(
                    <Link to={`/products/${item.id}`} className=" h-90 m-1 bg-amber-50 card group shadow text-black ease-in-out duration-400 transition hover:shadow-lg hover:-translate-y-2">
                    <span className="absolute top-3 left-3 badge badge-sm badge-warning">{item.rating} ★</span>
                    <span className="absolute top-10 left-3 text-2xl badge">${item.price}</span>
                    <figure className="p-3 bg-amber-100  transition-colors ease-in-out duration-400 group-hover:bg-amber-200 ">
                        <img src={item.thumbnail} className="h-50 object-contain"></img>
                    </figure>
                    <div className="card-body">
                        <div className="card-title text-black">
                            <p className="truncate">{item.title}</p>
                        </div>
                        <span className="font-light truncate">{item.description}</span>        
                        <div className="card-actions justify-end">                            
                            <div className="badge badge-outline">{item  .category}</div>
                        </div>
                    </div>
                </Link>
                ))}
                </div>    
            </div>

        </div>
        <div>
            <div className="py-20 px-10">
                <div className="flex justify-center pt-20    py-10">
                    <span className="border-2 rounded-2xl bg-Textcolor text-Background text-5xl p-2.5">Browse By Category</span>
                </div>
            <div className="flex justify-center ">
                {categoryArray.map((cat)=>(
                    <div className="grid w-full grid-cols-2">
                        <div className="card shadow-md rounded-2xl h-96 border-2 font-serif text-4xl border-Textcolor bg-Textcolor/10 text-center flex flex-col justify-center">
                            <span>{cat}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default HomePage;
