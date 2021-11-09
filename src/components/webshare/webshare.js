import React from "react";
import { ShareIcon } from "@heroicons/react/outline"
import "../styles/global.css"

const WebShare = () => {
    const handleOnClick = () => {
      if (navigator.share) {
        navigator
          .share({
            title: 'testing',
            text: 'testing share',
            url: document.location.href,
          })
          .then(() => {
            console.log('Successfully shared');
          })
          .catch(error => {
            console.error('Something went wrong sharing the blog', error);
          });
      } else {
        console.log("Sorry! Your browser does not support Web Share API");
      }
    };
  
    return (
        
      <button onClick={handleOnClick}>
        <ShareIcon className="h-10" />
      </button>
     
    );
  };

  export default WebShare;