import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div key={index}>
              <div className='box d_flex top'>
                <div className='left'>
                  <h1 style={{fontSize:"3rem"}}>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img style={{height:"420px" ,padding:"10px"}} src={value.cover} alt='' />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
