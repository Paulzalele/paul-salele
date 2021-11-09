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
      }
    };
  
    return (
      <button onClick={handleOnClick} className="h-10">
        <ShareIcon />
      </button>
    );
  };

  export default WebShare;