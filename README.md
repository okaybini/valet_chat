Installation Guide

1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install Vite

npm create vite@latest


3. Install Dependencies

npm install

4. Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init

Update the tailwind.config.js file to include your template paths:

module.exports = {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
   
    extend: {},
  
  },
  
  plugins: [],

};

Add Tailwind's directives to your index.css file:



@tailwind base;

@tailwind components;

@tailwind utilities;

5.Running the Application

npm run dev
