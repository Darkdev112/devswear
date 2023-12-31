import { useRouter } from 'next/router'
import { useState } from 'react'
const mongoose = require("mongoose");
import Product from "../../models/Product"

const Product_this = ({cart, addToCart, product}) => {
  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  console.log(product);

  const checkService = async()=>{
    const pins = await fetch("http://localhost:3000/api/pincode");
    const pinData = await pins.json();
    if(pinData.pins.includes(parseInt(pin)))
    {
      setService(true);
    }
    else
    {
      setService(false)
    }
    setTimeout(()=>{
      setService((prev)=>{
        return null;
      });
    },5000)
  }

  const handlePinChange = (e) => {
    setPin(e.target.value);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 md:py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center ">
          <img alt="ecommerce" className="md:mb-auto md:mt-7 w-auto h-[350px] px-5 " src={product.img}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.desc}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#b1fc31]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#b1fc31]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#b1fc31]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#b1fc31]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#b1fc31]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ml-auto items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {product.size.split(",").map((op)=>{return(op && <option>{op}</option>)})}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">{`₹ ${product.price}`}</span>
                <button className="flex ml-11 text-white bg-[#b1fc31] border-0 py-2 px-2 md:px-3 focus:outline-none hover:bg-[#82bb20] rounded">Buy Now</button>
                <button onClick={()=>{addToCart(slug,1,499,"Wear the code" , "XL", "Red")
              }} className="flex ml-4 text-white bg-[#b1fc31] border-0 py-2 px-2 md:px-3 focus:outline-none hover:bg-[#82bb20] rounded">Add to Cart</button>
              </div>
              <div className="flex flex-col h-[235px] my-6 rounded p-4 shadow-sm">
                <h2 className='text-2xl text-black font-semibold text-left p-1 my-4'>Check Availability</h2>
                <input placeholder="Enter your pincode" type="number" className='border-2 rounded-lg p-1 h-10 m-2 border-green-200' onChange={handlePinChange}/>
                <button onClick={()=>{if(pin)checkService()}} className='flex ml-auto mr-2 mt-1 text-white bg-[#b1fc31] border-0 py-1 px-3 focus:outline-none hover:bg-[#82bb20] rounded'>Check</button>
                {(!service && service!=null) && <div className='text-sm text-red-600 m-2 font-semibold'>
                  Sorry! We don't deliver to this pin code.
                </div>}
                {(service && service!=null) && <div className='text-sm text-green-600 m-2 font-semibold'>
                  Yeh! This pin code is servicable.
                </div>}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  if (!mongoose.connections[0].readyState) {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.find({slug: slug});
  return {
    props: { product: JSON.parse(JSON.stringify(product[0])) },
  }
}

export default Product_this