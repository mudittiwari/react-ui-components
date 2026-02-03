import React from 'react';
import { useGeolocationDistance } from './useGeolocationDistance';

const PlaceCard = ({ name, city, img, coords, perk }: any) => {
  const { distance } = useGeolocationDistance(coords);
  const isNear = distance !== null && distance < 2000; // Within 2km

  return (
    <div className="group bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative h-56 w-full overflow-hidden rounded-[2rem] mb-6">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        
        {/* THE HOOK HIGHLIGHT: Large Distance Overlay */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-2xl">
          <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-0.5">Live Distance</p>
          <p className={`text-xl font-mono font-bold ${isNear ? 'text-emerald-400' : 'text-sky-400'}`}>
            {distance ? (distance / 1000).toFixed(2) : '---'} <span className="text-xs">km</span>
          </p>
        </div>
      </div>

      <div className="px-2 pb-2">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">{name}</h3>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">{city}</p>
          </div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${isNear ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-100 opacity-40'}`}>
            {isNear ? '🔓' : '🔒'}
          </div>
        </div>

        {/* Dynamic Contextual Message */}
        <div className={`py-3 px-4 rounded-xl text-[11px] font-medium leading-relaxed transition-colors ${isNear ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
          {isNear ? `PROXIMITY UNLOCKED: ${perk}` : `Travel to within 2km to reveal secret.`}
        </div>
      </div>
    </div>
  );
};

export const TravelConcierge = () => {
  const PLACES = [
    { name: "Eiffel Tower", city: "Paris", img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800", coords: { latitude: 48.8584, longitude: 2.2945 }, perk: "Free lift upgrade at the ticket counter." },
    { name: "Hawa Mahal", city: "Jaipur", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", coords: { latitude: 26.9239, longitude: 75.8267 }, perk: "Secret rooftop entrance at Wind View Cafe." },
    { name: "Colosseum", city: "Rome", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800", coords: { latitude: 41.8902, longitude: 12.4922 }, perk: "Skip-the-line code: GLADIATOR24" },
    { name: "Statue of Liberty", city: "New York", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800", coords: { latitude: 40.6892, longitude: -74.0445 }, perk: "Access to the exclusive harbor lounge." },
    { name: "Mount Fuji", city: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800", coords: { latitude: 35.3606, longitude: 138.7274 }, perk: "Free digital guide for the Yoshida trail." },
    { name: "Sydney Opera House", city: "Sydney", img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800", coords: { latitude: -33.8568, longitude: 151.2153 }, perk: "15% discount on the Architecture Tour." }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">TravelConcierge</h2>
          <p className="text-slate-500 max-w-lg font-medium leading-relaxed italic border-l-4 border-sky-500 pl-4">
            Your location is being tracked in high-fidelity. Move closer to landmarks to unlock exclusive digital artifacts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PLACES.map((place, idx) => (
            <PlaceCard key={idx} {...place} />
          ))}
        </div>
      </div>
    </div>
  );
};