# NextBlog - A Modern Blog Platform

A full-featured blog application built with Next.js 16, TypeScript, Prisma, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, TypeScript, Prisma, Tailwind CSS, Neon Database
- **Authentication**: Complete user authentication with better-auth
- **Blog Management**: Create, edit, delete, and manage blog posts
- **Category System**: Organize posts into categories
- **Tag System**: Tag posts for better organization
- **Search**: Full-text search across posts and categories
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Admin Dashboard**: Comprehensive admin interface for content management
- **Image Upload**: Integrated image upload with UploadThing
- **Rich Text Editor**: Advanced text editing capabilities
- **SEO Optimized**: Meta tags and structured data

## 📁 Project Structure

```
nextblog-master/
├── app/                          # Next.js App Router
│   ├── (admin)/                 # Admin routes group
│   │   ├── dashboard/           # Admin dashboard
│   │   ├── posts/               # Post management
│   │   │   ├── [id]/           # Edit post page
│   │   │   └── page.tsx       # Posts list
│   │   └── categories/          # Category management
│   ├── (auth)/                  # Authentication routes
│   │   ├── signin/              # Sign in page
│   │   └── signup/              # Sign up page
│   ├── actions/                  # Server actions
│   │   ├── blog.ts              # Blog-related actions
│   │   ├── categories.ts         # Category actions
│   │   ├── posts.ts             # Post actions
│   │   └── search.ts             # Search functionality
│   ├── api/                      # API routes
│   ├── blog/                     # Blog frontend routes
│   │   ├── category/             # Category pages
│   │   │   └── [id]/           # Dynamic category page
│   │   ├── posts/                # Post pages
│   │   │   └── [slug]/          # Dynamic post page
│   │   └── tag/                 # Tag pages
│   │       └── [name]/          # Dynamic tag page
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx               # Loading state
│   ├── not-found.tsx             # 404 page
│   └── page.tsx                 # Home page
├── components/                  # Reusable components
│   ├── ui/                     # UI components (shadcn/ui)
│   ├── toolbars/                # Editor toolbars
│   ├── extensions/               # Component extensions
│   ├── app-sidebar.tsx           # Application sidebar
│   ├── dashboard-*.tsx           # Dashboard components
│   ├── post-*.tsx               # Post-related components
│   ├── auth-*.tsx               # Authentication components
│   └── global-search-modal.tsx   # Search modal
├── lib/                         # Utility libraries
│   ├── auth*.ts                 # Authentication utilities
│   ├── db.ts                    # Database connection
│   ├── utils.ts                 # Helper functions
│   └── generated/                # Prisma generated client
├── prisma/                     # Database schema and migrations
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Database migrations
├── public/                     # Static assets
└── hooks/                       # Custom React hooks
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript with strict typing
- **Database**: PostgreSQL with Neon
- **ORM**: Prisma 7.5.0
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: better-auth
- **File Upload**: UploadThing
- **Rich Text**: Tiptap editor
- **Deployment**: Vercel ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RohanHiray-DevOps/Blog_Web.git
   cd nextblog-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database URL and other environment variables.

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open Application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database
- `npx prisma studio` - Open Prisma Studio

## 🗄️ Database Schema

The application uses the following main models:

- **User**: User accounts with authentication
- **Post**: Blog posts with metadata
- **Category**: Post categorization
- **Session**: User sessions
- **Account**: OAuth accounts
- **Verification**: Email verification

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
DATABASE_URL="postgresql://username:password@host:port/database"
AUTH_SECRET="your-auth-secret"
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Connect your GitHub repository to Vercel

2. **Environment Variables**
   - Add all environment variables to Vercel

3. **Deploy**
   - Automatic deployment on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Prisma Documentation](https://www.prisma.io/docs) - Database ORM guide
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling framework
- [better-auth](https://better-auth.com/docs) - Authentication guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, TypeScript, and Prisma
