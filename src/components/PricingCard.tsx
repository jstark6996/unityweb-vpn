
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  period?: string;
}

const PricingCard = ({ title, price, features, isPopular = false, period = "month" }: PricingCardProps) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${isPopular ? 'border-2 border-vpn-blue shadow-lg scale-105' : 'border border-gray-200'} bg-white transition-all duration-300 hover:shadow-xl`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-vpn-lightblue text-white px-4 py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-gray-500">/{period}</span>}
        </div>
        <div className="border-t border-gray-200 my-4 pt-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Check size={16} className="text-vpn-blue mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button className={`w-full mt-6 ${isPopular ? 'button-primary' : 'button-secondary'}`}>
          {price === 'Free' ? 'Download Now' : 'Subscribe Now'}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
