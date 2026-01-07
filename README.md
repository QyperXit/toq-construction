# TOQ Construction - Next.js

A modern, high-performance  Construction website.

## Technology Stack

- **Framework:** Next.js 16.1 (App Router)
- **VCore**: React 19
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Icons:** Lucide React
- **Fonts:** `next/font` (Inter)

## Features

- **Component-Based Architecture:** Modular design with reusable components (`Navbar`, `Footer`, `Hero`, etc.).
- **Optimized Performance:** 
  - Zero Layout Shift with `next/font`.
  - Minimized bundle size with `lucide-react` (replaced external script).
  - Ready for `next/image` optimization.
- **Responsive Design:** Fully responsive grid layouts for all devices.
- **Localized Content:** showcasing UK-based projects (London & Manchester).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

To create a production build:

```bash
npm run build
```

## Project Structure

- `app/`: App Router pages and global layouts.
- `components/`:
  - `layout/`: Global layout components (Navbar, Footer).
  - `sections/`: Individual page sections (Hero, Expertise, Projects, etc.).
  - `ui/`: Reusable UI primitives (Button).
- `public/`: Static assets.
