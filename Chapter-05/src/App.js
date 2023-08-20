import React from 'react';
import ReactDOM from 'react-dom/client';
// Default import
//import Header from './components/Header';
// Named import

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// Config Driven UI

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(<AppLayout />);
