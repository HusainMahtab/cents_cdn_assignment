# Dynamic Dashboard with Authentication

A modern dashboard application built with Next.js, featuring authentication, API integration, and a responsive design.

## Features

- User authentication (Login/Logout)
- Protected dashboard routes
- Data fetching from JSONPlaceholder API
- Search and filter functionality
- Pagination
- Responsive design with Tailwind CSS
- Modern UI components with shadcn/ui

## Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- Data Fetching: SWR
- Form Handling: React Hook Form with Zod validation
- Authentication: Mock JWT (localStorage)

## Getting Started

1. Clone the repository:
```bash
git clone <https://github.com/HusainMahtab/cents_cdn_assignment>
cd <cents_cdn_assignment>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](https://cents-cdn-assignment.vercel.app/) with your browser to see the result.

## Usage

1. Visit the login page
2. Use any email and password (minimum 6 characters) to log in
3. Explore the dashboard features:
   - View posts from JSONPlaceholder API
   - Search posts by title or ID
   - Navigate through paginated results
   - Use the sidebar for navigation
   - Log out using the button in the header

## Project Structure

```
src/
├── app/
│   ├── auth/
│   │   └── login/
│   └── dashboard/
├── components/
│   ├── auth/
│   ├── dashboard/
│   └── ui/
├── lib/
│   └── hooks/
└── types/
```

## Development

- `src/app/`: Contains the application routes and pages
- `src/components/`: Reusable components
- `src/lib/`: Utilities and hooks
- `src/types/`: TypeScript type definitions


