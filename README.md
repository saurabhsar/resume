# Saurabh Araiyer — Interactive First-Class Resume

> **"Reason from first principle!"**  
> Interactive, modern web resume for **Saurabh Araiyer** — Staff Software Engineer & Technical Leader.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaurabhsar%2Fresume)

---

## 🌟 Key Features

- **Interactive Experience Timeline**: Click any role on the timeline to expand an interactive accordion displaying key projects, problem statements, system architectures, impact numbers, and tech stack badges.
- **Deep-Dive Project Modals**: Click "Deep Dive" on any project to inspect full architectural design breakdowns, regulatory constraints, and scale metrics.
- **Dynamic Technology Filtering**: Filter timeline projects dynamically by technologies (Java, Python, LLMs, Google Cloud Pub/Sub, Apache Cassandra, Redis, Aerospike, Terraform, Kubernetes, etc.).
- **Quick Command Palette (`⌘K` / `Ctrl+K`)**: Instant modal search across all roles, projects, technologies, publications, and awards.
- **Dark / Light Theme Toggle**: Seamless switching between developer dark mode and executive light mode.
- **Print & PDF Optimized**: Tailored `@media print` stylesheets to cleanly print or save the resume as a crisp PDF directly from your browser.
- **Peer-Reviewed Publications**: Research papers published with Springer Journal of Optics and IEEE.
- **Marquee Awards Spotlight**: Flipkart CEO Excellence Award, HiFi Awards, Instant Karma, and Samsung Spot Award.
- **Technical Philosophy & Articles**: Real-world reflections on *Distributed Systems*, *Kafka vs. Google Cloud Pub/Sub*, and *First-Principles Architecture*.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (Glassmorphism, custom micro-interactions)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Deployment**: Vercel ready (`vercel.json`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/saurabhsar/resume.git
cd resume

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The production assets will be generated in the `dist/` directory.

---

## ☁️ Deploy to Vercel

This repository includes a pre-configured `vercel.json`:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Simply import `github.com/saurabhsar/resume` on [Vercel](https://vercel.com/) and click **Deploy**.
