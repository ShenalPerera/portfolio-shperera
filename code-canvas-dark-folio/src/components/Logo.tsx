
import React from 'react';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/#home" className="flex items-center gap-2">
      <div className="flex items-center justify-center bg-primary rounded-md w-8 h-8">
        <Code 
          className="text-white" 
          size={20} 
          strokeWidth={2} 
        />
      </div>
      <span className="text-xl font-semibold text-foreground hidden md:inline">

      </span>
    </Link>
  );
};

export default Logo;
