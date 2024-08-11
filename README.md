This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Architectural decisions

- Next.js 14
- Tailwind
- Strapi v5

## My additions

- Articles page uses params to get page number and page size (good for SEO, and Humans)
- Articles uses slug as key field thats provide direct URL to post and its wrapped for Title field, good for SEO also
- Article text uses remark to render markdown: looks awesome plus Rich Editor on strapi and @tailwindcss/typography gives amaizng looking page
- Articles page, Article detail page uses server components for SEO
- Comments form on Article detail page uses server actions and client component
- When new comment is posting server action uses revalidating mechanism that drops article collection, so for user it looks like Article get new list of comment immidiatly! And thats with zero code for updating source!
- Mobile first technique provide responsive design
- HTML5 markup includes Article, Section, Main, Header, Footer etc Tags for better SEO
- .env file for config API endpoint
- robots.txt and sitemap.xml generates with scripts - so we can config it to cover all posts and static pages
