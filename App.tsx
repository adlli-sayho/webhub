
import React from 'react';
import { WEB_APPS } from './constants';
import Header from './components/Header';
import WebAppIcon from './components/WebAppIcon';
import type { WebApp } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <main>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8 mt-8">
            {WEB_APPS.map((app: WebApp) => (
              <WebAppIcon key={app.id} app={app} />
            ))}
          </div>
        </main>
        <footer className="text-center text-gray-500 mt-12">
          <p>Created by adlli, JD KIM</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
