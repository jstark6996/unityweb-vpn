
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import Faq from '@/components/Faq';
import NetworkIllustration from '@/components/NetworkIllustration';
import { Button } from '@/components/ui/button';
import { Shield, Wifi, Zap, Globe, Laptop, Lock } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Military-grade encryption protects your data and privacy from hackers and surveillance."
    },
    {
      icon: Wifi,
      title: "Fast Connection",
      description: "High-speed servers ensure minimal latency for smooth browsing, gaming, and streaming."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access geo-restricted content from anywhere with our worldwide server network."
    },
    {
      icon: Laptop,
      title: "Multi-Device Support",
      description: "Connect up to 10 devices simultaneously with just one subscription."
    },
    {
      icon: Lock,
      title: "No-Logs Policy",
      description: "Your online activities are never tracked, stored, or shared with third parties."
    },
    {
      icon: Zap,
      title: "Easy Setup",
      description: "Simple one-click installation and intuitive interface for all devices and platforms."
    }
  ];
  
  const pricingPlans = [
    {
      title: "Free",
      price: "Free",
      features: [
        "1 device connection",
        "Limited bandwidth (500MB/day)",
        "3 server locations",
        "Basic encryption",
        "Standard support"
      ]
    },
    {
      title: "Premium",
      price: "$9.99",
      features: [
        "5 device connections",
        "Unlimited bandwidth",
        "30+ server locations",
        "Advanced encryption",
        "24/7 Priority support",
        "Ad-blocker included"
      ],
      isPopular: true
    },
    {
      title: "Business",
      price: "$19.99",
      features: [
        "10 device connections",
        "Unlimited bandwidth",
        "All server locations",
        "Military-grade encryption",
        "24/7 Premium support",
        "Ad-blocker & malware protection",
        "Dedicated IP address"
      ]
    }
  ];
  
  const faqItems = [
    {
      question: "What is LanMesh VPN?",
      answer: "LanMesh VPN is a secure virtual private network service that encrypts your internet connection to protect your privacy and allows you to access content from around the world safely."
    },
    {
      question: "How does LanMesh VPN work?",
      answer: "LanMesh VPN creates an encrypted tunnel between your device and our secure servers. Your internet traffic passes through this tunnel, hiding your real IP address and protecting your data from hackers and surveillance."
    },
    {
      question: "Is LanMesh VPN legal to use?",
      answer: "Yes, VPNs are legal in most countries. However, some countries have restrictions on VPN usage. It's your responsibility to check local laws before using our services."
    },
    {
      question: "Will LanMesh VPN slow down my internet?",
      answer: "All VPNs may cause some reduction in speed due to encryption. However, LanMesh VPN uses high-speed servers and optimized protocols to minimize any performance impact. Many users experience minimal to no noticeable slowdown."
    },
    {
      question: "Can I use LanMesh VPN on multiple devices?",
      answer: "Yes! Depending on your subscription plan, you can connect multiple devices simultaneously. Our free plan supports 1 device, Premium supports 5 devices, and Business supports 10 devices."
    },
    {
      question: "Do you keep logs of my online activities?",
      answer: "No. LanMesh VPN maintains a strict no-logs policy. We do not track, collect, or share your browsing history, connection logs, or IP addresses."
    }
  ];

  const platforms = ["Windows", "macOS", "Android", "iOS", "Linux"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-vpn-darkblue to-vpn-blue pt-24 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Secure, Fast & Reliable VPN Solution
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Connect your network with military-grade encryption. 
                Access restricted content, protect your privacy, and browse anonymously.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="button-primary">Download Now</Button>
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                  Learn More
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2 mr-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                  ))}
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">10K+</span> satisfied users
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 h-80">
              <NetworkIllustration />
            </div>
          </div>
        </div>
      </section>
      
      {/* Platforms Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-lg font-medium text-gray-700">Available on:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-vpn-blue font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Advanced Features</span> For Your Security
            </h2>
            <p className="text-gray-600">
              LanMesh VPN provides cutting-edge security features to keep your connection private and your data protected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-radial from-vpn-blue to-vpn-darkblue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Download LanMesh VPN Now</h2>
            <p className="text-gray-200 mb-10">
              Get started with our free plan today. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-vpn-blue hover:bg-gray-100">
                Windows Download
              </Button>
              <Button className="bg-white text-vpn-blue hover:bg-gray-100">
                macOS Download
              </Button>
              <Button className="bg-white text-vpn-blue hover:bg-gray-100">
                Android Download
              </Button>
              <Button className="bg-white text-vpn-blue hover:bg-gray-100">
                iOS Download
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-gray-600">
              Choose the plan that works best for you and your team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently <span className="gradient-text">Asked Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about LanMesh VPN.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Faq items={faqItems} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-vpn-blue">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to secure your connection?</h3>
                <p className="text-gray-600">
                  Download LanMesh VPN today and enjoy a safer internet experience.
                </p>
              </div>
              <Button className="button-primary">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
