# ExpertBuddy - Next.js Internship Assignment

This project is a solution for the ExpertBuddy internship assignment. It showcases a fully responsive web application built with **Next.js v15**, **Tailwind CSS**, and modern component libraries such as **Shadcn/UI**, **Mantine**, and **Magic UI**, focusing on clean architecture, performance, and user experience.

## Tech Stack :

- **Framework:** : Next.js
- **Styling:** : Tailwind CSS
- **UI Libraries:** : ShadCn, MagicUI
- **Image Optimization:** `next/image`
- **Icons:** `lucide-react`
- **Deployment:** Vercel

---

##  Features

###  Core Functionalities

- Fully responsive layout (mobile-first with breakpoints)
- Dynamic routing (e.g. `/document-details?id=123`)
- Authentication modal with localStorage-based login state
- Dynamic content rendering with mock data
- Filter system for academic documents
- AnswerList rendered based on selected document
- Magic UI components: `BorderBeam`, `MagicCard`, etc.
- Optimized image rendering and font loading
- SEO-friendly via Next.js Metadata API

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






