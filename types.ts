import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  url: string;
}