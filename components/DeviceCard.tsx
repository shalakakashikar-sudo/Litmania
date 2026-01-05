
import React from 'react';
import { LiteraryDevice } from '../types';

interface DeviceCardProps {
  device: LiteraryDevice;
  onClick: (device: LiteraryDevice) => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device, onClick }) => {
  return (
    <div 
      onClick={() => onClick(device)}
      className="group relative cursor-pointer overflow-hidden rounded-[3rem] glass transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-300"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={device.imageUrl} 
          alt={device.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 p-10 w-full text-white">
        <span className="text-sm font-black uppercase tracking-[0.3em] mb-4 inline-block text-indigo-300">{device.category}</span>
        <h3 className="text-5xl font-serif-elegant mb-3 leading-none tracking-tighter">{device.name}</h3>
        <p className="text-lg font-bold opacity-100 line-clamp-2 leading-tight mb-6 text-slate-100">{device.shortDefinition}</p>
        <div className="h-2 w-0 bg-indigo-500 group-hover:w-24 transition-all duration-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default DeviceCard;
