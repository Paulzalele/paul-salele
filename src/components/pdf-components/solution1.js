// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/pdfjs-express-viewer';
// import "../styles/global.css"



// const Solution1 = () => {
//   const viewer = useRef(null);
  
  
  
//   // if using a class, equivalent of componentDidMount 
//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/webviewer/lib',
//         initialDoc: '/files/demo.pdf',
//         licenseKey: '4vNTf58Y0aEFa7Gy58cA',
//       },
//       viewer.current,
//       ).then((instance) => {
//         // now you can access APIs through the WebViewer instance
//         const { Core } = instance;

//         // adding an event listener for when a document is loaded
//         Core.documentViewer.addEventListener('documentLoaded', () => {
//           console.log('document loaded');
//         });

//         // adding an event listener for when the page number has changed
//         Core.documentViewer.addEventListener('pageNumberUpdated', (pageNumber) => {
//           console.log(`Page number is: ${pageNumber}`);
//         });
//       });
//     }, []);

    
//     const isBrowser = typeof window !== "undefined"

//   return (
    
     
//     <div className="relative flex flex-grow flex-col h-screen" ref={viewer}/>
       
      
//   );
// };

// export default Solution1;
