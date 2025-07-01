# 🎓 newInTown - International Student Support Platform

> **Empowering International Students at University of Duisburg-Essen**

A comprehensive web platform designed to help international students navigate life, studies, and success in Germany. From enrollment to everyday essentials, we provide step-by-step guides, resources, and community support for students at the University of Duisburg-Essen and beyond.

## 🎯 What We Do

This platform solves the complex challenges international students face when studying in Germany by providing:

- **📚 Academic Guidance**: Subject registration, exam processes, and study resources
- **🏠 Accommodation Support**: Finding dorms, flats, and Anmeldung assistance
- **📋 Administrative Help**: Visa guidance, banking setup, and insurance information
- **💼 Career Resources**: Job opportunities, internships, and HiWi positions
- **🌍 Community Building**: Connecting students and sharing experiences
- **📞 Direct Support**: Contact forms and personalized assistance

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15.2.4, React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 3.4.17, CSS Modules |
| **UI Components** | Radix UI, shadcn/ui, Lucide React Icons |
| **Animations** | Framer Motion |
| **Forms** | React Hook Form, Zod Validation |
| **Charts & Maps** | Recharts, Leaflet, React Leaflet |
| **Theming** | next-themes |
| **Deployment** | Vercel (recommended) |
| **Package Manager** | npm / pnpm |

## ✨ Key Features

### 🎨 User Experience
- ✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Modern UI/UX** - Clean, intuitive interface with smooth animations
- ✅ **Dark/Light Theme** - Automatic theme switching with system preferences
- ✅ **Accessibility** - WCAG compliant with keyboard navigation support

### 📱 Core Functionality
- ✅ **Dynamic Navigation** - Smart breadcrumbs and mobile-friendly menu
- ✅ **Contact System** - Integrated contact forms with validation
- ✅ **Loading States** - Skeleton loading for optimal user experience
- ✅ **SEO Optimized** - Meta tags, structured data, and performance optimized

### 🎓 Student Resources
- ✅ **Accommodation Guides** - Dorm finder and rental assistance
- ✅ **Academic Registration** - LSF and HISinOne step-by-step guides
- ✅ **Visa & Documents** - Anmeldung and residence permit help
- ✅ **Banking & Insurance** - Account setup and health insurance guidance
- ✅ **Radio Tax Info** - Rundfunkbeitrag explanation and assistance
- ✅ **Job Opportunities** - Student jobs, internships, and career resources
- ✅ **Language Courses** - German language learning resources
- ✅ **Campus Map** - Interactive university campus navigation

## 🚀 Getting Started

### Prerequisites

- **Node.js** version 18 or higher
- **npm** or **pnpm** package manager
- **Git** (for cloning)

### Installation

#### Option 1: Clone from GitHub
```bash
git clone https://github.com/your-username/newintown-website.git
cd newintown-website
```

#### Option 2: Download ZIP
1. Download the ZIP file from GitHub
2. Extract to your desired location
3. Open the folder in your terminal

### Setup

1. **Install Dependencies**
```bash
npm install
# or
pnpm install
```

2. **Environment Variables** (Optional)
Create a `.env.local` file in the root directory:
```env
# Add any API keys or environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. **Start Development Server**
```bash
# Navigate to the app directory first
cd app

# Start the development server
npm run dev
# or
pnpm dev
```

4. **Open Your Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

5. **Important: Refresh the Page**
After the server starts, **refresh the page once** to ensure all elements are properly rendered locally.

## 🏗️ Build for Production

### Development Build
```bash
npm run build
npm run start
```

### Production Deployment
```bash
npm run build
npm run start
```

The application will be available at the specified port (default: 3000).

## 📁 Project Structure

```
newintown-website/
├── app/                          # Next.js App Router
│   ├── about/                    # About Us page
│   ├── accommodation/            # Accommodation guides
│   ├── banking/                  # Banking information
│   ├── campus-map/               # Interactive campus map
│   ├── contact/                  # Contact page
│   ├── credits/                  # Credits page
│   ├── events/                   # Events page
│   ├── exam-process/             # Exam registration guides
│   ├── insurance/                # Insurance information
│   ├── jobs/                     # Job opportunities
│   ├── language-courses/         # Language learning resources
│   ├── radio-bills/              # Radio tax information
│   ├── subject-registration/     # Subject registration guides
│   ├── visa-guidance/            # Visa and document help
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable UI components
│   ├── ui/                       # shadcn/ui components
│   ├── breadcrumbs.tsx           # Navigation breadcrumbs
│   ├── footer.tsx                # Site footer
│   ├── navigation.tsx            # Main navigation
│   └── theme-provider.tsx        # Theme management
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
├── styles/                       # Additional stylesheets
├── .gitignore                    # Git ignore rules
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 📦 Core Dependencies

### Main Dependencies
```json
{
  "next": "15.2.4",
  "react": "^19",
  "react-dom": "^19",
  "typescript": "^5",
  "tailwindcss": "^3.4.17",
  "framer-motion": "latest",
  "lucide-react": "^0.454.0",
  "react-hook-form": "latest",
  "zod": "^3.24.1",
  "@radix-ui/react-*": "latest"
}
```

### Development Dependencies
```json
{
  "@types/node": "^22",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "postcss": "^8.5",
  "autoprefixer": "^10.4.20"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
- Connect your GitHub repository to Vercel
- Vercel will automatically detect Next.js
- Add environment variables if needed
- Deploy with one click

### Other Platforms

#### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

#### Railway
```bash
# Connect your GitHub repo to Railway
# Railway will automatically build and deploy
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Reporting Issues
1. Check existing issues first
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/device information

### Making Changes
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

### Built With
- **Next.js** - The React framework for production
- **Tailwind CSS** - A utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Radix UI** - Unstyled, accessible UI primitives
- **shadcn/ui** - Beautifully designed components

### Icons & Assets
- **Lucide React** - Beautiful & consistent icon toolkit
- **Placeholder Images** - For development and testing

### Special Thanks
- **University of Duisburg-Essen** - For supporting international students
- **International Student Community** - For feedback and suggestions
- **Open Source Community** - For the amazing tools and libraries

---

**Made with ❤️ for international students by the newInTown team**

*Helping you navigate your journey in Germany, one step at a time.* 