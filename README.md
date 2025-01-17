# Multi Vendor eCommerce Application

I am learning creating Multi Vendor eCommerce using Next.js, TypeScript, MySQL, Prisma, Clerk from different Video Courses, Books, and Websites.

```text
CREATE DATABASE multivendorecommerce;
USE multivendorecommerce;
DESCRIBE user;

DATABASE_URL="mysql://root:Sample123$@localhost:3306/multivendorecommerce"
```

## Few Commands

```powershell
npx create-next-app@latest

npx shadcn@latest init
npx shadcn@latest add

npm i next-themes --legacy-peer-deps

npm install @clerk/nextjs --legacy-peer-deps

npm i -D prisma --legacy-peer-deps
npx prisma init

npm install @prisma/client@6.2.1 --legacy-peer-deps

npx prisma generate

npx prisma studio

npx prisma migrate dev --name initialversion

```

## Reference(s)

> 1. <https://ui.shadcn.com/>
> 1. <https://www.prisma.io/docs/getting-started/quickstart-sqlite>
> 1. <https://hub.docker.com/_/mysql>

## MySQL Docker Container

```powershell
docker run -p 3306:3306 -d --name local-mysql -v d:/DataStoresVolumn:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Sample123$ mysql:latest
```

## Create a Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
