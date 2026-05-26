import React from 'react'

import Hero from '.Hero';
import CreateTicket from './CreateTicket';  
import Navbar from '../Navbar';
import Footer from '../Footer';

function SupportPage() {
  return (
    <div>
      <Navbar />
      <h1>Support Page</h1>
      <Hero />
      <CreateTicket />
      <Footer />
    </div>
  );
}   

export default SupportPage;