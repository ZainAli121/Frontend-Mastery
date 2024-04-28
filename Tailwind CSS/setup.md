# How to Install Tailwind CSS

Step 1: Install Tailwind CSS via npm

```
npm install -D tailwindcss

npx tailwindcss init
```
Step 2: Update tailwind.config.js
```
content: ["*.html"],
```

Step 3: Create a CSS file src/output.css
to include the following:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the output.css file in your HTML file


Step 5: Run the build command to generate the CSS file
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 6: Add the following in the package.json file
```
"scripts": {
  "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
}
```

Step 7: Run the build command
```
npm run build
```
