import { useState } from "react"

const Carousel = ({images}) => {
  const [pic, setPic] = useState(0)

  const handleNext = (e) => {
    e.preventDefault()
    if (pic === images.length - 1) {
      setPic(0)
    } else {
      setPic( pic => pic + 1)
    }
  }

  const handlePrev = (e) => {
    e.preventDefault()
    if (pic === 0) {
      setPic(images.length - 1)
    } else {
      setPic( pic => pic - 1)
    }
  }
  
  return (
    <>
      <h1 style={{ textAlign: "center"}}>C.J.'s Custom React Carousel 🦄</h1>
      <img src={images[pic]}/>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handlePrev}>{"<"} Prev</button>
        <button onClick={handleNext}>Next {">"}</button>
        
      </div>
    </>
  );
}

export default Carousel