echo 'Minify middleware';
npx terser .next/server/middleware.js -o .next/server/middleware.js

echo 'Minify Static';
npx terser .next/static/chunks/pages/*.js -o .next/static/chunks/pages/*.js
npx terser .next/static/chunks/app/*.js -o .next/static/chunks/app/*.js

echo 'Minify Server';
npx terser .next/server/app/**/*.js -o .next/server/app/**/*.js
npx terser .next/server/chunks/*.js -o .next/server/chunks/*.js
npx terser .next/server/pages/*.js -o .next/server/pages/*.js
