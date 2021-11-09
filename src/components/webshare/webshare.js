import React from "react";
import PropTypes from 'prop-types';
import { ShareIcon } from "@heroicons/react/outline"
import "../styles/global.css"

const WebShare = ({ postTitle, siteTitle }) => {
    const handleOnClick = () => {
      if (navigator.share) {
        navigator
          .share({
            title: `${postTitle} | ${siteTitle}`,
            text: `Check out ${postTitle} on ${siteTitle}`,
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

//   WebShare.propTypes = {
//     postTitle: PropTypes.string.isRequired,
//     siteTitle: PropTypes.string.isRequired,
//   };

  export default WebShare;