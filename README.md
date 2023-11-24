# GPT-LMS

[![Azure Static Web Apps CI/CD](https://github.com/tkhv/gpt-lms/actions/workflows/azure-static-web-apps-icy-plant-0291c0a0f.yml/badge.svg?branch=prod)](https://github.com/tkhv/gpt-lms/actions/workflows/azure-static-web-apps-icy-plant-0291c0a0f.yml)

Microsoft AI Classroom Hackathon 2023 Submission

This is a [Next.js](https://nextjs.org/) 14.0.3 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses the Pages router to maintain compatability with Azure Static Web Apps as of November 2023.

## Installation

Add the following to your .env:

```
AZURE_STORAGE_CONNECTION_STRING=""
AZURE_ACCOUNT_NAME=""
AZURE_STORAGE_URL=""
AZURE_TENANT_ID=""
AZURE_CLIENT_ID=""
AZURE_CLIENT_SECRET=""

AZURE_COSMOSDB_PG_URL=""
AZURE_COSMOSDB_PG_USER=""
AZURE_COSMOSDB_PG_PASSWORD=""
AZURE_COSMOSDB_PG_DBNAME=""

NEXTAUTH_SECRET="" # Randomly generated string with `openssl rand -base64 32`
NEXTAUTH_URL="http://localhost:3000"
GITHUB_ID=""
GITHUB_SECRET=""
```

Then install and run the development server:

```bash
npm install
npm run dev
```

The page opens on [http://localhost:3000](http://localhost:3000).