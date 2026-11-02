import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-wanderly-dark text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wanderly-emerald/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 glass-dark-card p-8 sm:p-12 rounded-3xl border border-wanderly-gold/30 shadow-glass-hover">
        <div className="w-20 h-20 rounded-full bg-wanderly-emerald/90 border border-wanderly-gold/50 flex items-center justify-center text-wanderly-gold mx-auto mb-6 shadow-gold-glow/40">
          <Compass className="w-10 h-10 animate-[spin_16s_linear_infinite]" />
        </div>

        <span className="text-xs uppercase font-mono font-bold tracking-widest text-wanderly-gold block mb-2">
          Coordinates Uncharted (404)
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Off the Mapped Trail
        </h1>
        <p className="text-sm text-gray-300 mt-3 leading-relaxed">
          The sanctuary or dispatch you are looking for has either shifted coordinates or is waiting to be discovered.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link to="/">
            <Button variant="gold" size="md" className="w-full justify-center" icon={<Home className="w-4 h-4" />}>
              Return to Sanctuary Home
            </Button>
          </Link>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Link to="/destinations">
              <Button variant="outline" size="sm" className="w-full justify-center text-xs">
                Destinations
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="outline" size="sm" className="w-full justify-center text-xs">
                Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
