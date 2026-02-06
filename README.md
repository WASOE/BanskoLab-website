# BanskoLab Foundation Website

Official website for BanskoLab Foundation - a non-profit organization focused on rural development, digital systems, and community building in Bulgaria.

## 🌐 Live Site

[Website URL - To be added]

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety and developer experience

### Internationalization
- **next-intl 4.8.2** - Internationalization framework
- **Supported Languages**: English (en), Bulgarian (bg)

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- Custom design system with CSS variables

### Image Optimization
- Next.js Image component with AVIF/WebP support
- Responsive image sizing
- Automatic format optimization

### Testing
- **Jest 29.7.0** - Testing framework
- **React Testing Library** - Component testing
- **Jest DOM** - DOM matchers

### Code Quality
- **ESLint 9** - Code linting
- **TypeScript strict mode** - Enhanced type safety

## 📋 Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm or yarn package manager
- Git

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone git@github.com:WASOE/BanskoLab-website.git
cd BanskoLab-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
```

### 5. Start production server

```bash
npm start
```

## 📁 Project Structure

```
banskolab-foundation-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── [locale]/           # Internationalized routes
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── projects/       # Projects listing & detail
│   │   │   ├── news/           # News/blog pages
│   │   │   ├── contact/        # Contact page
│   │   │   ├── the-valley/     # Field site page
│   │   │   └── ...             # Other pages
│   │   └── layout.tsx          # Root layout
│   ├── components/             # React components
│   │   ├── layout/             # Layout components
│   │   ├── navigation/         # Header & Footer
│   │   ├── sections/           # Page sections
│   │   ├── ui/                 # Reusable UI components
│   │   └── seo/                # SEO components
│   ├── config/                 # Configuration files
│   │   └── org.ts              # Organization constants
│   ├── data/                   # Content data
│   │   ├── projects.ts         # Projects data
│   │   ├── posts.ts            # News/blog data
│   │   ├── team.ts             # Team members
│   │   └── ...                 # Other data files
│   ├── i18n/                   # Internationalization
│   │   └── routing.ts          # i18n routing config
│   └── lib/                    # Utilities
│       ├── utils.ts            # Helper functions
│       ├── accessibility.ts    # A11y utilities
│       └── performance.ts      # Performance utilities
├── messages/                   # Translation files
│   ├── en.json                 # English translations
│   └── bg.json                 # Bulgarian translations
├── public/                     # Static assets
│   ├── images/                 # Image assets
│   └── documents/              # PDF documents
├── i18n/                       # i18n configuration
│   └── request.ts              # i18n request config
└── middleware.ts               # Next.js middleware

```

## 🌍 Internationalization

The site supports multiple languages through `next-intl`:

- **English (en)**: Default language
- **Bulgarian (bg)**: Secondary language

### Adding Translations

1. Edit translation files in `messages/`:
   - `messages/en.json` - English translations
   - `messages/bg.json` - Bulgarian translations

2. Use translations in components:
   ```typescript
   const t = await getTranslations("Home");
   return <h1>{t("title")}</h1>;
   ```

### Adding New Locales

1. Add locale to `src/i18n/routing.ts`
2. Create translation file `messages/[locale].json`
3. Update `i18n/request.ts` locale list

## 🎨 Styling

The project uses Tailwind CSS 4 with a custom design system:

- **Colors**: Defined in `src/app/globals.css` as CSS variables
- **Typography**: Fluid typography scale using `clamp()`
- **Components**: Reusable UI components in `src/components/ui/`

### Design Tokens

- Brand color: `#ffff00` (yellow)
- Link color: `#19BA97` (teal)
- Text color: `#1a1a1a` (ink)
- Background: `#f8f9fa` (light gray)

## 🧪 Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Configure environment variables if needed
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

### Environment Variables

No environment variables are currently required. If needed in the future, create a `.env.local` file:

```env
# Example (not currently used)
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📄 Key Pages

- **Home** (`/`) - Main landing page
- **Projects** (`/projects`) - Project portfolio
- **News** (`/news`) - Blog and updates
- **The Valley** (`/the-valley`) - Field site information
- **Contact** (`/contact`) - Contact form
- **Partners** (`/partners`) - Partner information
- **Transparency** (`/transparency`) - Governance and transparency

## 🔧 Configuration

### Organization Information

Organization details are centralized in `src/config/org.ts`:
- Organization name and legal identity
- Registration IDs (OID, UIC, PIC)
- Contact information
- Address
- Document paths

Update this file to change organization information site-wide.

### Navigation

Navigation items are defined in `src/data/site.ts`:
- Primary navigation
- Explore menu items

## 📚 Content Management

Content is managed through TypeScript data files in `src/data/`:

- **Projects**: `src/data/projectsContent.ts`
- **News/Blog**: `src/data/postsContent.ts`
- **Team**: `src/data/team.ts`
- **Partners**: `src/data/partners.ts`
- **Policies**: `src/data/policies.ts`

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Clear `.next` directory: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Rebuild: `npm run build`

### Translation Issues

If translations are missing:
1. Check that translation keys exist in `messages/en.json` and `messages/bg.json`
2. Verify the translation namespace matches the component usage
3. Check browser console for missing translation warnings

### Image Loading Issues

If images don't load:
1. Verify images exist in `public/images/`
2. Check image paths are correct (case-sensitive)
3. Ensure Next.js Image component is used for optimization

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test your changes: `npm test`
4. Commit your changes: `git commit -m "Add your feature"`
5. Push to the branch: `git push origin feature/your-feature`
6. Open a Pull Request

## 📄 License

[License information - To be added]

## 📞 Contact

- **Email**: info@banskolab.com
- **Website**: [To be added]
- **Address**: 1 Pirin Street, Bansko, Bulgaria

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/)

---

**Organization**: BanskoLab Foundation  
**OID**: E10308541  
**UIC**: 207128442
