# ExpertBuddy - Next.js Internship Assignment

This project is a solution for the ExpertBuddy internship assignment. It showcases a fully responsive web application built with **Next.js v15**, **Tailwind CSS**, and modern component libraries such as **Shadcn/UI** and **Magic UI**, focusing on clean architecture, performance, and user experience .

> ⚠️ **Note:**  
> - No database is connected. Authentication is simulated using `localStorage`.  
> - Document filtering and rendering use mock data from `/lib/data.ts`.  
> - The "Purchase Model" and dynamic "Documents by Type" logic are under development.

### Improvements: 
  Purchase Model still not implemented is to be done.
  Documents by Type is to connected .


---



## Tech Stack

| Tech             | Description                                          |
|------------------|------------------------------------------------------|
| **Next.js 15**   | App routing, SSR/CSR, dynamic metadata              |
| **Tailwind CSS** | Utility-first styling framework                     |
| **Shadcn/UI**    | Accessible, modern component library                |
| **Magic UI**     | Gradient UI animations (MagicCard, BorderBeam)     |
| **lucide-react** | Icon library for clean UI icons                     |
| **next/image**   | Optimized image rendering for better performance   |
| **Vercel**       | Hosting and CI/CD pipeline                         |


## ✨ Features

### 🔓 Authentication

- Sign Up & Sign In forms (simulated with `localStorage`)
- Automatically detects if a user is signed in
- Shows **Sign Out** option dynamically in header

### 📄 Document Viewer

- View academic documents with meta details
- Linked answers and subject-based filters

### 🔎 Filtering System

- Filter by:
  - Subject Area
  - Document Type
  - Word Count
  - Academic Level

---

## 🚀 Getting Started

### 1. Clone the repository
      git clone
      cd expertbuddy
### 2.Install Dependency :
     (npm) along with those in package.json
### 3.Run the application:
     npm run dev
## Project Structure: 

app/
  ├── layout.tsx             # App layout
  ├── page.tsx               # Homepage
  └── document-details/      # Dynamic route
      └── page.tsx
components/
  ├── ui/                    # Shadcn/UI-based components
  ├── MagicUI/               # Magic UI custom components
  ├── reusables/
  ├── AcademicFilterForm.tsx
  ├── AnswerList.tsx
  ├── CustomOrderForm.tsx
  ├── Document.tsx
  ├── DocumentCard.tsx
  ├── DocumentCardDetails.tsx
  ├── DocumentHeader.tsx
  ├── DocumentbyType.tsx
  ├── Hero-Section.tsx
  ├── Hero-Section.tsx
  ├── SmallCard.tsx
  ├── StudyBankSection.tsx
lib/
  └── data.ts               # Mock data and documents\
  └── utils.ts 
  
public/
  └── document.svg           # Static assets
  └──other images
styles/
  └── globals.css

  
---------


## 🌐 Deployment
 The application is deployed on Vercel:
🔗 Live URL: https://study-buddy-henna-six.vercel.app

## Implementation Notes
  Used useSearchParams() with Suspense boundaries due to CSR behavior.
  Filter system built with controlled state and mock API logic.
  Magic UI effects integrated externally via local component wrapping.
  Responsive behavior handled with md, lg, and xl breakpoints.
  Fonts loaded via next/font/google with preconnect strategy






