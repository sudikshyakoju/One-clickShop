import React from "react"

const Categories = () => {
 const data = [
   {
   
     cateName: "Dresses",
   },
   {
   
     cateName: "Tops & Blouses",
   },
   {
    
     cateName: "Bottoms",
   },
   {
   
     cateName: "Outerwear",
   },
   {
    
     cateName: "Accessories",
   },
   {
    
     cateName: "Shoes",
   },
   {
  
     cateName: "Beauty & Personal Care",
   },
   {
  
     cateName: "Jewelry",
   },
   {
   
     cateName: "Bags & Purses",
   },
   {
  
     cateName: "Intimates",
   },
 ];


  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
