
import img1 from "../../assets/images/homeCarousel/1.jpg"
import img2 from "../../assets/images/homeCarousel/2.jpg"
import img3 from "../../assets/images/homeCarousel/3.jpg"
import img4 from "../../assets/images/homeCarousel/4.jpg"


const Banner = () => {
    return (
        <div className="carousel md:max-w-5xl mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1}  className="w-full" />
    <div className="absolute h-full flex justify-center flex-col  gap-5 top-0 left-0 p-2  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
      <div className="w-1/2 flex flex-col gap-5 p-2">
      <h1 className="text-white text-2xl font-bold md:text-5xl">Affordable price for car servicing</h1>
      <p className="text-white">Car Doctor is a professional car servicing website that offers a wide range of services to ensure your vehicle is always in top condition.</p>
    <div className="flex items-center gap-5">
    <button className="btn btn-warning">READ MORE</button>
      <button className="btn btn-warning-outline">LATEST SERVICES</button>
    </div>
      </div>
    </div>
    <div className="absolute flex justify-end  gap-5 left-5 right-5 bottom-12">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-end gap-5  left-5 right-5 bottom-12">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-end gap-5  left-5 right-5 bottom-12">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-end gap-5  left-5 right-5 bottom-12">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;