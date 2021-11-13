import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express-viewer';
import "../styles/global.css"



const Solution1 = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/demo.pdf',
        licenseKey: '4vNTf58Y0aEFa7Gy58cA',
      },
      viewer.current,
    ).then((instance) => {
      // now you can access APIs through the WebViewer instance
      const { Core, UI } = instance;

      // adding an event listener for when a document is loaded
      Core.documentViewer.addEventListener('documentLoaded', () => {
        console.log('document loaded');
      });

      // adding an event listener for when the page number has changed
      Core.documentViewer.addEventListener('pageNumberUpdated', (pageNumber) => {
        console.log(`Page number is: ${pageNumber}`);
      });

      // adds a button to the header that on click sets the page to the next page
      UI.setHeaderItems(header => {
        header.push({
          type: 'actionButton',
          img: 'https://icons.getbootstrap.com/assets/icons/caret-right-fill.svg',
          onClick: () => {
            const currentPage = Core.documentViewer.getCurrentPage();
            const totalPages = Core.documentViewer.getPageCount();
            const atLastPage = currentPage === totalPages;

            if (atLastPage) {
              Core.documentViewer.setCurrentPage(1);
            } else {
              Core.documentViewer.setCurrentPage(currentPage + 1);
            }
          }
        });
      });

    });
  }, []);

  return (
    
      
    <div className="relative flex flex-grow" ref={viewer}/>
       
      
  );
};

export default Solution1;
