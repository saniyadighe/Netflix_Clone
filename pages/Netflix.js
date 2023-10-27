import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";

const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className='hero'>
      <TopNav/>
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg'
        alt = 'hero image'/>

<img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg'
        alt = 'no internet connection'/>


<img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg'
        alt = 'no internet connection'/>
      
    </div>
  )
}

export default Netflix