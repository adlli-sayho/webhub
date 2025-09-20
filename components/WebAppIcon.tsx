
import React from 'react';
import type { WebApp } from '../types';

interface WebAppIconProps {
  app: WebApp;
}

const WebAppIcon: React.FC<WebAppIconProps> = ({ app }) => {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-xl shadow-lg hover:shadow-cyan-500/10 backdrop-blur-sm
                 border border-gray-700/50 hover:bg-gray-700/60
                 transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
    >
      <div className="flex-shrink-0 mb-3 transition-transform duration-300 group-hover:scale-110">
        {app.icon}
      </div>
      <div className="text-center">
        <h3 className="font-bold text-gray-50 text-sm sm:text-base truncate">{app.title}</h3>
        <p className="text-xs text-gray-400 hidden sm:block">{app.description}</p>
      </div>
    </a>
  );
};

export default WebAppIcon;
