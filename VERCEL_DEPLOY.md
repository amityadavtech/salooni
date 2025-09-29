# Vercel Deployment Instructions

1. Push your code to your GitHub (or GitLab/Bitbucket) repository.
2. Go to https://vercel.com and sign in with your Git provider.
3. Click "New Project" and import your repository.
4. Vercel will auto-detect your Vite + Node.js setup.
5. Confirm the following settings if prompted:
   - **Root Directory:** `SalonAcademyPro`
   - **Build Command:** `npm run build`
   - **Output Directory:** `client/dist`
   - **Serverless Functions:** `server/index.ts` (API route)
6. Click "Deploy".
7. After deployment, Vercel will provide a live URL for your site.

For custom domains or environment variables, use the Vercel dashboard after deployment.
