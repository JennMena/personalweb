"use client";
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import '../public/main.scss';

export default function RootLayout({ children }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-TG2N8BB5BV');
  }, []);

  return (
    <html lang="en">
      <head>
        <Helmet>
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-TG2N8BB5BV"></script>
        </Helmet>
      </head>
      <body className=''>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
