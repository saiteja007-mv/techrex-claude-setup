# Stage 5: Build MVP

Build the actual application using all project documents as guidance.

## Prerequisites

Must have completed:
- ✅ Stage 1: Research
- ✅ Stage 2: PRD
- ✅ Stage 3: Technical Design
- ✅ Stage 4: AI Instructions (NOTES.md)

## What This Does

Takes you from setup to deployed MVP:
1. Read all project documentation
2. Set up development environment
3. Implement features phase-by-phase
4. Test continuously
5. Deploy to production

## Build Process

### Phase 1: Read & Understand (5-10 min)

1. **Load all documents:**
   ```
   - docs/research-[AppName].txt
   - docs/PRD-[AppName]-MVP.md
   - docs/TechDesign-[AppName]-MVP.md
   - NOTES.md
   - Tool-specific configs
   ```

2. **Summarize for user:**
   - App name and purpose
   - Tech stack chosen
   - Core features to build
   - Deployment target

3. **Explain build plan:**
   - Show phase breakdown
   - Estimate time per phase
   - Ask for confirmation to proceed

### Phase 2: Foundation Setup (30-60 min)

**Based on tech stack from TechDesign:**

#### If Next.js + Supabase:
```bash
# 1. Create Next.js app
npx create-next-app@latest [app-name] --typescript --tailwind --app

# 2. Install dependencies
cd [app-name]
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs

# 3. Set up Supabase
# Guide user to create account at supabase.com
# Create project and get credentials

# 4. Configure environment
# Create .env.local with Supabase keys

# 5. Set up project structure
# Create folders per TechDesign
```

#### If using Bolt.new / Lovable:
```
# Guide user to platform
# Paste PRD content
# Let platform generate initial code
# Then we enhance and customize
```

#### If other stack:
```
# Follow Tech Design setup instructions
# Use appropriate framework CLI
# Install dependencies from design doc
```

**Actions:**
- Create all folders from Tech Design
- Set up configuration files
- Install all dependencies
- Configure environment variables
- Initialize git repository
- Create initial commit

**Test:**
```bash
npm run dev  # Should start without errors
```

### Phase 3: Core Features (1-2 hours)

Implement features from PRD in priority order.

**For each feature:**

1. **Announce feature:**
   ```
   "Now implementing: [Feature Name]"
   "This will: [Brief description]"
   "Files to create/modify: [List]"
   ```

2. **Create database schema** (if needed):
   - Add tables/collections
   - Set up relationships
   - Configure security rules

3. **Build backend/API:**
   - Create API routes
   - Add business logic
   - Implement error handling
   - Add validation

4. **Build frontend:**
   - Create components
   - Connect to API
   - Add loading states
   - Add error states
   - Style with Tailwind/CSS

5. **Test feature:**
   ```bash
   # Run development server
   # Test happy path
   # Test error cases
   # Test on mobile view
   ```

6. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add [feature-name]"
   ```

**Communication during build:**
- Explain what each component does
- Show code snippets for key parts
- Adapt explanation to skill level
- Ask before major decisions

**Feature Implementation Order:**
1. Authentication (if needed)
2. Database models
3. Core CRUD operations
4. Main user interface
5. Additional features

### Phase 4: Polish & Testing (30-45 min)

**Error Handling:**
- Add try/catch blocks
- User-friendly error messages
- Fallback UI for errors
- Loading states everywhere

**Mobile Responsiveness:**
- Test on mobile viewport
- Fix layout issues
- Touch-friendly buttons
- Readable font sizes

**Performance:**
- Optimize images
- Lazy load components
- Add caching where appropriate

**Accessibility:**
- Add aria-labels
- Keyboard navigation
- Color contrast
- Screen reader support

**Testing Checklist:**
```
✅ All features work
✅ No console errors
✅ Works on mobile
✅ Error handling in place
✅ Loading states present
✅ Environment variables documented
✅ README updated with setup steps
```

### Phase 5: Deployment (15-30 min)

**Based on platform from Tech Design:**

#### Vercel (Recommended for Next.js):
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Add environment variables in dashboard
# 5. Custom domain (optional)
```

#### Netlify:
```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy --prod

# 4. Configure environment variables
```

#### Other platforms:
- Follow Tech Design deployment instructions
- Set environment variables
- Configure custom domain
- Set up SSL (usually automatic)

**Post-Deployment:**
- Test live site
- Verify all features work
- Check mobile on real device
- Share URL for feedback

### Phase 6: Documentation (15 min)

**Generate README.md:**
```markdown
# [App Name]

[Brief description from PRD]

## Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

## Tech Stack
- [Frontend]
- [Backend]
- [Database]
- [Deployment]

## Setup

### Prerequisites
- Node.js 20+
- [Other requirements]

### Installation
\`\`\`bash
git clone [repo]
cd [app-name]
npm install
\`\`\`

### Environment Variables
Copy `.env.example` to `.env.local`:
\`\`\`
DATABASE_URL=your-database-url
API_KEY=your-api-key
\`\`\`

### Development
\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000

## Deployment
[Platform-specific instructions]

## License
MIT
```

**Create .env.example:**
```
# Database
DATABASE_URL=

# Authentication
AUTH_SECRET=
NEXTAUTH_URL=

# API Keys
OPENAI_API_KEY=
```

## Communication Style by Level

### Vibe-Coder:
```
Me: "I'm now building the user login feature. This lets people create accounts
and sign in. I'll use Supabase authentication - think of it like using your
Google account to sign into different websites.

Creating these files:
- components/LoginForm.tsx (the login page users see)
- lib/supabase.ts (connects to authentication service)

This should take about 10 minutes. I'll let you know when to test it!"

[Build feature]

"Login feature complete! ✅

To test:
1. Open http://localhost:3000/login
2. Enter any email and password (at least 6 characters)
3. You should see a welcome message

Try it out and let me know if you see any errors!"
```

### Developer:
```
Me: "Implementing authentication with Supabase Auth.

Creating:
- AuthProvider component with session context
- Protected route middleware
- Login/signup API routes

Using Row Level Security for data access. Email/password auth for MVP,
can add OAuth later.

ETA: 10 minutes"

[Build feature]

"Auth complete. RLS policies applied. Test at /login"
```

### In-Between:
```
Me: "Building the authentication system. This is how users create accounts
and log in securely.

I'm using Supabase Auth - it's a service that handles all the security stuff
for us (password hashing, session management, etc.) so we don't have to
build it from scratch.

Files I'm creating:
- LoginForm.tsx - The UI for login/signup
- auth-helpers.ts - Functions to check if user is logged in
- middleware.ts - Protects pages that require login

Concept to learn: "Row Level Security" - This makes sure users can only
see their own data, not other people's.

Ready? This will take 10-15 minutes."

[Build feature]

"Authentication working! Try creating an account at http://localhost:3000/login

If you want to understand how it works, check out:
- Supabase Auth docs: https://supabase.com/docs/guides/auth
- The comments in auth-helpers.ts"
```

## Troubleshooting During Build

### Build Errors:
1. Read error carefully
2. Explain in simple terms
3. Show fix
4. Explain why it happened
5. How to prevent next time

### User Confused:
- Slow down
- Break into smaller steps
- Use analogies
- Show visual examples

### Want to Change Something:
- "No problem! What would you like to change?"
- Discuss impact
- Implement change
- Retest affected features

## Success Criteria

MVP is complete when:
- ✅ All must-have features from PRD work
- ✅ Deployed and accessible via URL
- ✅ No critical bugs
- ✅ Works on mobile
- ✅ README has setup instructions
- ✅ Environment variables documented
- ✅ Code is commented
- ✅ Git repository initialized

## After Build Complete

```
You: "🎉 Congratulations! Your MVP is LIVE!

🌐 URL: https://your-app.vercel.app

📋 What we built:
✅ [Feature 1]
✅ [Feature 2]
✅ [Feature 3]

📁 Project files:
- Full source code in src/
- Documentation in README.md
- Deployment configured

🚀 Next steps:
1. Share with 5-10 beta testers
2. Gather feedback
3. Fix critical issues
4. Plan v2 features

📊 Success metrics from your PRD:
- [Metric 1]: [Target]
- [Metric 2]: [Target]

🤝 I'm here if you need help with:
- Bug fixes
- Adding features
- Improving performance
- Scaling up

Great job bringing your idea to life!"
```

## Important Notes

- **Test frequently** - After every feature
- **Commit often** - Working code only
- **Explain clearly** - Adapt to skill level
- **Celebrate progress** - Each feature is a win
- **Fix bugs immediately** - Don't accumulate debt
- **Focus on MVP** - Can always add more later

Remember: Done is better than perfect. Ship it, get feedback, iterate!
