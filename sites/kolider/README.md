# Kolider - Beautiful websites for local businesses

A professional agency website built with Next.js 16+ and Tailwind CSS, featuring a beautiful multi-step "Refresh My Website" questionnaire.

## Features

- **Modern Design**: Clean, professional design with deep purple (#7c3aed) and electric blue (#3b82f6) gradient accents
- **Responsive**: Fully mobile-responsive across all pages
- **Multi-step Questionnaire**: Beautiful 6-step "Refresh My Website" flow with progress tracking
- **Complete Pages**:
  - Home page with hero, services overview, testimonials, and portfolio preview
  - Services page with detailed service descriptions
  - Portfolio page showcasing work across industries
  - About page with company story and process
  - Contact page with form and contact details
  - Refresh My Website - interactive multi-step questionnaire

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Key Pages

- `/` - Home page with hero and overview
- `/services` - Detailed services information
- `/portfolio` - Portfolio showcase
- `/about` - About us and our process
- `/contact` - Contact form and details
- `/refresh` - Multi-step website refresh questionnaire (KEY FEATURE)

## Technologies

- **Next.js 16+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## Design System

### Colors
- Deep Purple: `#7c3aed`
- Electric Blue: `#3b82f6`
- White backgrounds with light grey accents

### Typography
- Clean, modern sans-serif (Inter font)
- Clear hierarchy with bold headings

### Components
- Gradient buttons with hover effects
- Smooth transitions and animations
- Card-based layouts with shadows

## Customization

### Update Brand Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  purple: {
    600: '#7c3aed', // Change to your color
  },
  blue: {
    500: '#3b82f6', // Change to your color
  },
}
```

### Modify Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Add More Industries

Edit the portfolio items array in `app/portfolio/page.tsx`

## Form Handling

The refresh questionnaire and contact form currently log to console. To connect to a backend:

1. Create API routes in `app/api/`
2. Update form submission handlers in:
   - `app/refresh/page.tsx` (handleSubmit function)
   - `app/contact/page.tsx` (handleSubmit function)

Example API integration:

```typescript
const handleSubmit = async () => {
  await fetch('/api/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  setCurrentStep(7)
}
```

## License

All rights reserved.
