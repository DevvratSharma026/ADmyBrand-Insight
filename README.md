# ADmyBRAND Insights

A modern, AI-powered analytics dashboard for digital marketing agencies. Built with Next.js, shadcn/ui, Tailwind CSS, and framer-motion.

---

## ✨ Features
- **Overview Cards:** Key metrics (Revenue, Users, Conversions, Growth)
- **Interactive Charts:** Line, bar, and pie/donut charts with beautiful gradients and tooltips
- **Smart Insights Panel:** AI-powered, actionable insights with regeneration and animation
- **Data Table:** Sort, filter, paginate, and export campaign data
- **Theme Toggle:** Light/dark mode with smooth transitions
- **Responsive Design:** Looks great on desktop, tablet, and mobile
- **Real-time Updates:** Simulated with intervals
- **Beautiful UI:** Modern SaaS-inspired design, glassmorphism, and micro-interactions

---

## 🛠️ Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/DevvratSharma026/ADmyBrand-Insight.git
   cd ADmyBrand-Insight
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 🤖 AI Usage Report

**AI Tools Used**
- GitHub Copilot, ChatGPT
- Used for: Generating React/Next.js components, UI/UX polish, animation logic, code review, and documentation.

**Sample Prompts**
1. "Build a stunning, responsive AI-powered analytics dashboard for a fictional SaaS platform called “ADmyBRAND Insights” using Next.js 14+ (App Router) and TypeScript.

The dashboard must include:

Overview Page with 4 modern, animated metric cards:
– Revenue
– Active Users
– Conversion Rate
– Growth Percentage

Interactive Charts Section using Recharts:
– Line Chart (e.g., Monthly Revenue Trends)
– Bar Chart (e.g., Campaign Performance)
– Pie/Donut Chart (e.g., Traffic Sources)

Data Table Section using TanStack Table v8 with:
– Sorting, Filtering, Pagination
– Sample marketing campaign data

Dark/Light Mode Toggle using Tailwind CSS theming

UI/UX:
– Use Tailwind CSS + shadcn/ui for clean, consistent component styling
– Glassmorphic UI with subtle hover effects and micro-interactions
– Use Framer Motion for smooth animations and transitions
– Fully responsive for desktop, tablet, and mobile

Other:
– Code in TypeScript with modular folder structure
– Use realistic mock data (marketing + analytics themed)
– Include skeleton loaders while charts/tables load
– Simulate real-time updates using setInterval on metrics

Bonus (if possible):
– Export to CSV or PDF for data table
– Date range filters for charts

Focus on design elegance, performance, reusable component structure, and developer experience."
2. "Add a “Smart Insights” panel to the dashboard. This panel should:

Analyze the dashboard’s mock data (revenue, conversions, users, etc.) and generate 2–4 actionable insights in plain language.
Each insight should be concise, relevant, and may include positive/negative trends, anomalies, or suggestions (e.g., “Revenue increased by 18% this week, mainly from Google Ads.”).
Display insights in a beautiful card with a modern design, using icons (from lucide-react) and subtle animation (e.g., fade-in, slide-in).
Include a “Regenerate Insights” button that refreshes the insights (simulate AI).
Ensure the panel is responsive and looks great in both light and dark mode.
Place the panel prominently on the dashboard (top or side).
Use only existing mock data and libraries in the project."


**AI vs Manual Work Split**
- AI-generated: ~70% (UI scaffolding, chart logic, animation, initial data)
- Manual: ~30% (customization, data integration, style tweaks, accessibility)
- Customization: Adapted AI code for color, spacing, and modern SaaS look; refined for accessibility and responsiveness.

---

## 📁 Project Structure
```
components/
  charts/           # Chart components (bar, line, pie)
  dashboard/        # Dashboard UI (cards, skeleton, theme toggle, smart insights)
  data-table/       # Data table and columns
  ui/               # Reusable UI primitives (shadcn/ui)
hooks/              # Custom React hooks
lib/                # Mock data, types, utilities
app/                # Next.js app directory (pages, layout, styles)
```

---

## 📸 Screenshots
<!-- Add screenshots or GIFs here -->
<img width="1903" height="940" alt="image" src="https://github.com/user-attachments/assets/8e432390-7401-4bd3-b952-a2d794e1e07b" />


---

## 📄 License
MIT

---

## 🙏 Acknowledgements
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [framer-motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/)
- [Next.js](https://nextjs.org/)

---

> Quality over quantity. This project is designed to be portfolio-worthy, with a focus on beautiful UI, smart AI usage, and clean code.
