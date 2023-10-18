const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[70vh] bg-gradient-to-r from-cyan-100 to-blue-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <div className="carousel w-1/2">
            <div id="slide1" className="carousel-item relative w-full">
              <img
               src={'https://i.ibb.co/8N1Fpmk/pink-headphones-wireless-digital-device-removebg-preview.png'}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={'https://i.ibb.co/wCN1jk0/1609440-P2-PDWD0-removebg-preview.png'}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={'https://i.ibb.co/HGXcc3b/red-gold-headphones-digital-device-removebg-preview.png'}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          {/* hero */}
          <div>
            <h1 className="text-6xl font-bold ">Flash Sell</h1>
            <p className="py-6 font-medium">
              <span className="text-red-500">50% Off</span> for all headphone
              items.
            </p>
            <button className="btn btn-info">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
