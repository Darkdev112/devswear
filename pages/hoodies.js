import React from 'react'
import Link from 'next/link'
const mongoose = require("mongoose");
import Product from "../models/Product"

const Hoodies = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {
              return (
                <div className="lg:w-1/5 md:w-1/2 p-5 w-full shadow-lg m-8" key={item._id}>
                  <Link href={`/product/${item.slug}`}>
                    <div className="block relative rounded overflow-hidden cursor-pointer">
                      <img alt="tshirts" className="m-auto md:mx-0 block w-auto h-[350px]" src={item.img} />
                    </div>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.desc}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                      <p className="mt-1">{`₹${item.price}`}</p>
                      <p className="mt-1">{item.size}</p>
                    </div></Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "hoodies" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}

export default Hoodies