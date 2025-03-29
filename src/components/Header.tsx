
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">LanMesh</span>
            <span className="font-semibold ml-1">VPN</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-vpn-blue transition-colors">Features</a>
          <a href="#download" className="text-gray-700 hover:text-vpn-blue transition-colors">Download</a>
          <a href="#pricing" className="text-gray-700 hover:text-vpn-blue transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-vpn-blue transition-colors">FAQ</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="button-secondary">Login</Button>
          <Button className="button-primary">Download Free</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
          <nav className="flex flex-col space-y-6 py-8 px-4">
            <a href="#features" className="text-xl text-gray-700 hover:text-vpn-blue" onClick={toggleMenu}>Features</a>
            <a href="#download" className="text-xl text-gray-700 hover:text-vpn-blue" onClick={toggleMenu}>Download</a>
            <a href="#pricing" className="text-xl text-gray-700 hover:text-vpn-blue" onClick={toggleMenu}>Pricing</a>
            <a href="#faq" className="text-xl text-gray-700 hover:text-vpn-blue" onClick={toggleMenu}>FAQ</a>
            <div className="flex flex-col space-y-4 pt-4">
              <Button variant="outline" className="button-secondary w-full">Login</Button>
              <Button className="button-primary w-full">Download Free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
