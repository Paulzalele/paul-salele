import React, { useEffect, useRef } from "react";

import lottie from 'lottie-web';
import animationData from '../animations/paul-logo.json'

function LottieLogo() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })
  }, [])
  
  return (
        
      <div ref={container}></div>
   
    );
}

export default LottieLogo;