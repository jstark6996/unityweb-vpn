
import React from 'react';

const NetworkIllustration = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center z-10 animate-pulse-slow">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-vpn-blue to-vpn-teal flex items-center justify-center text-white font-bold">
            <span className="text-2xl">LanMesh</span>
          </div>
        </div>
        
        {/* Connection nodes */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60) * Math.PI / 180;
          const x = 140 * Math.cos(angle);
          const y = 140 * Math.sin(angle);
          
          return (
            <React.Fragment key={i}>
              <div 
                className="absolute w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center animate-float"
                style={{ 
                  left: `calc(50% + ${x}px)`, 
                  top: `calc(50% + ${y}px)`,
                  animationDelay: `${i * 0.5}s`
                }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-300" />
              </div>
              
              {/* Connection lines */}
              <div 
                className="absolute bg-gradient-to-r from-vpn-blue/30 to-vpn-teal/30"
                style={{
                  width: '140px',
                  height: '2px',
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'left center',
                  transform: `rotate(${angle * (180 / Math.PI)}deg)`
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default NetworkIllustration;
