
import type React from 'react';

export interface WebApp {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}
