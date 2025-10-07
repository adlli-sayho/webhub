import React from 'react';
import type { WebApp } from './types';

export const WEB_APPS: WebApp[] = [
  {
    id: 'email-client',
    title: 'Mail',
    description: 'Your primary inbox',
    url: 'https://mail.google.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: 'calendar',
    title: 'Calendar',
    description: 'Schedule your life',
    url: 'https://calendar.google.com',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
        </svg>
    ),
  },
  {
    id: 'suno AI',
    title: 'AI Music',
    description: 'AI Music',
    url: 'https://suno.com/create',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10-5m-10 5v12l10-5M9 9l10 5m-10-5l-3 2" />
        </svg>
    ),
  },
  {
    id: 'Image',
    title: 'Banana editer',
    description: 'Creative Media',
    url: 'https://ai.studio/apps/drive/1LUC0YJvy30lt71a3IsuQjSv9aAFMxXlr',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.5 18l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456L20.5 18l-1.197.398a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
    ),
  },
  {
    id: 'notes-app',
    title: 'Notion',
    description: 'Jot down ideas',
    url: 'https://www.notion.com/ko',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5v16.5H3.75V3.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5v9l7.5-9v9" />
        </svg>
    ),
  },
  {
    id: 'design-tool',
    title: 'Vita',
    description: 'Creative tool',
    url: 'https://vday.io/?lang=ko',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
    ),
  },
  {
    id: 'Sns',
    title: 'Instagram',
    description: 'Sns',
    url: 'https://www.instagram.com/ill_da_',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.5h-9A5.25 5.25 0 002.25 9.75v4.5A5.25 5.25 0 007.5 19.5h9a5.25 5.25 0 005.25-5.25v-4.5A5.25 5.25 0 0016.5 4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.125 7.875h.008v.008h-.008v-.008z" />
        </svg>
    ),
  },
  {
    id: 'youtube',
    title: 'Youtube',
    description: 'youtube',
    url: 'https://www.youtube.com/@illdamusic',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.375H8.25A4.125 4.125 0 004.125 10.5v3A4.125 4.125 0 008.25 17.625h7.5A4.125 4.125 0 0019.875 13.5v-3A4.125 4.125 0 0015.75 6.375z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.375 12l4.5-2.625v5.25L9.375 12z" />
        </svg>
    ),
  },
    {
    id: 'Real-time Image Composer',
    title: 'Real-time',
    description: 'Real-time Image Composer',
    url: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221hqTOpGvFVNtRYlqpCaYq_yg757wFkWt2%22%5D,%22action%22:%22open%22,%22userId%22:%22113511891536910679231%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.375H8.25A4.125 4.125 0 004.125 10.5v3A4.125 4.125 0 008.25 17.625h7.5A4.125 4.125 0 0019.875 13.5v-3A4.125 4.125 0 0015.75 6.375z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.375 12l4.5-2.625v5.25L9.375 12z" />
        </svg>
    ),
  },
      {
    id: 'Image Composer',
    title: 'Image Composer',
    description: 'Image Composer',
    url: 'https://ai.studio/apps/drive/1boHCB6ssWC1c4Gr5oi63f6nu1eIJ0q0V',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.375H8.25A4.125 4.125 0 004.125 10.5v3A4.125 4.125 0 008.25 17.625h7.5A4.125 4.125 0 0019.875 13.5v-3A4.125 4.125 0 0015.75 6.375z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.375 12l4.5-2.625v5.25L9.375 12z" />
        </svg>
    ),
  },
];
