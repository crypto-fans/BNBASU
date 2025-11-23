import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ZoneData {
  id: string;
  name: string;
  baseRate: number; // USD per night avg
  occupancy: number; // percentage 0-1
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}