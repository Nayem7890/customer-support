# Customer Support Task Board

## 1. Overview
Actionable customer support dashboard that visualizes ticket queues, tracks team workload, and surfaces GitHub repository metadata in a glassmorphism UI. Use it as a live demo, portfolio artifact, or internal helper to keep customer conversations on track.

## 📸 Screenshots

### 🏠 Home Page
![Home Page Screenshot](https://raw.githubusercontent.com/Nayem7890/customer-support/main/public/customer-support.png)


## 3. Core Technologies
- React 19 with Suspense data loading
- Vite 7 build toolchain
- Tailwind CSS 4 + DaisyUI components
- React Toastify for notifications

## 4. Main Features
- **Live repository pulse**: fetches stars, forks, and open issues straight from the GitHub API.
- **Hero metrics**: highlights in-progress vs. resolved tickets so leads can report status instantly.
- **Interactive triage board**: keyboard-accessible ticket cards that can be added to a personal task lane and resolved with a click.
- **Operational context**: roadmap milestones, resolved ticket log, and feature highlights help stakeholders see what is shipping.
- **CTA panel**: explains how to plug the dashboard into a real support workflow or share it with your team.

## 5. Dependencies
- `react`, `react-dom`
- `vite`, `@vitejs/plugin-react`
- `tailwindcss`, `@tailwindcss/vite`, `daisyui`
- `react-toastify`
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`

## 6. Run Locally
1. **Clone**  
   `git clone https://github.com/Nayem7890/customer-support.git`
2. **Install**  
   `cd customer-support && npm install`
3. **Configure (optional)**  
   Create `.env` and set:
   ```
   VITE_GITHUB_OWNER=Nayem7890
   VITE_GITHUB_REPO=customer-support
   VITE_GITHUB_URL=https://github.com/Nayem7890/customer-support
   ```
4. **Develop**  
   `npm run dev` then open the printed localhost URL.
5. **Lint (optional)**  
   `npm run lint`
6. **Build for production**  
   `npm run build`
7. **Preview the build**  
   `npm run preview`

## 7. Deployment & Links
- **Live Demo**: https://iridescent-chebakia-928f93.netlify.app/
- **Repository**: https://github.com/Nayem7890/customer-support
- **Author Profile**: https://github.com/Nayem7890
- **GitHub API Docs** (for repo stats): https://docs.github.com/en/rest/repos/repos#get-a-repository



