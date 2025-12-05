# Alexander Badenhorst – Developer Portfolio
This repository contains the source code for my personal developer portfolio, built with **React**, **TypeScript**, and **Vite**. The site showcases my full-stack projects, certifications, skills, and contact information.  
Live version: https://alexanderbadenhorst.github.io/Portfolio_Website/

## 🚀 Tech Stack
- React + TypeScript  
- Vite (fast dev + build tooling)  
- TailwindCSS  
- Framer Motion  
- ShadCN/UI  

## 📁 Project Structure
src/  
  assets/ – images/icons  
  components/ – reusable UI components  
  sections/ – Hero, Skills, Projects, Certificates, Contact  
  data/ – profile, skills, certificates, projects (site.ts)  
  lib/ – helpers/utilities  
public/  
  certs/ – certificate PDFs  
  CV/ – CV files  

All portfolio content is editable from **src/data/site.ts**.

## 🛠 Running Locally
npm install  
npm run dev  
npm run build  
npm run preview  

## 🌐 Deployment (GitHub Pages)
Ensure vite.config.ts includes:  
base: "/Portfolio_Website/"  

Deploy:  
npm run build  
git add dist -f  
git commit -m "deploy"  
git subtree push --prefix dist origin gh-pages  

## 📬 Contact
Email: alexander.baden15.ab@gmail.com  
GitHub: https://github.com/AlexanderBadenhorst  
LinkedIn: https://www.linkedin.com/in/alexander-b-435b90a4/

## 📄 License
MIT License.

Thanks for checking out my portfolio! Suggestions and improvements are welcome.
