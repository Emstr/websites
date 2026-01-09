# E8 Dental Care - Demo Website

A modern, friendly dental practice website for E8 Dental Care in Hackney, London.

## Business Information

- **Business Name**: E8 Dental Care
- **Address**: 380A Mare Street, Hackney, London, E8 1HR
- **Phone**: 020 8985 4547
- **Location**: Short walk from Hackney Central Overground station
- **Owner**: Mrs Shilpa Chirag Roy
- **Principal Dentist**: Dr Mohamed Helmy
- **CQC Registered**: November 2022

## Opening Hours

- **Monday - Friday**: 9:00 AM - 6:00 PM (Lunch break: 1:00 PM - 2:00 PM)
- **Saturday**: 9:00 AM - 2:00 PM
- **Sunday**: Closed

## Services Offered

- Check-ups & Examinations
- Scale & Polish (Hygiene Cleaning)
- Fillings (White/Composite)
- Crowns & Bridges
- Root Canal Treatment
- Extractions (Simple & Surgical)
- Wisdom Teeth Removal
- Gum Disease Treatment
- Professional Teeth Whitening

## Website Features

### Pages

1. **Home** - Welcoming hero section, key features, services overview, testimonials
2. **Treatments** - Detailed service cards with benefits and friendly icons
3. **Meet the Team** - Profiles of Dr Helmy and Mrs Roy
4. **Pricing** - Transparent pricing for all treatments
5. **Book Appointment** - Online booking form with opening hours
6. **Contact** - Location details, directions, and contact information

### Design

- **Color Scheme**: Teal (#0d9488) and Sky Blue (#0ea5e9)
- **Style**: Bright, friendly, welcoming - NOT clinical or scary
- **Typography**: Clean, modern fonts
- **Icons**: Friendly, approachable dental-themed icons
- **Layout**: Responsive design for all devices

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Tailwind

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── treatments/
│   │   └── page.tsx        # Treatments page
│   ├── team/
│   │   └── page.tsx        # Meet the Team page
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   ├── book/
│   │   └── page.tsx        # Book Appointment page
│   └── contact/
│       └── page.tsx        # Contact page
└── components/
    ├── Navigation.tsx      # Main navigation component
    └── Footer.tsx          # Footer component
```

## Key Differentiators

This dental practice website is designed to be:

1. **Friendly & Welcoming** - Warm colors, approachable copy, smiling faces
2. **Community-Focused** - Emphasizes local Hackney location
3. **Patient-Centric** - Clear information, transparent pricing, easy booking
4. **Professional yet Approachable** - Expert care without intimidation
5. **Accessible** - Saturday openings highlighted, multiple contact methods

## Demo Purpose

This is a demonstration website showcasing modern web design for healthcare practices. It features:

- Real business data for authenticity
- Professional, conversion-focused design
- Mobile-responsive layout
- SEO-optimized structure
- Accessible navigation and content
