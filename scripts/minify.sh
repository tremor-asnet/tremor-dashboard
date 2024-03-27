
echo 'Minify middleware';
npx terser .next/server/middleware.js -o .next/server/middleware.js

echo 'Minify Static';
npx terser .next/static/chunks/app/*.js -o .next/static/chunks/app/*.js
npx terser .next/static/chunks/pages/*.js -o .next/static/chunks/app/*.js
npx terser .next/static/chunks/*.js -o .next/static/chunks/*.js

echo 'Minify Server';
find ".next/server/app" -type f \( -iname \*.js \) -not -path "*/(dashboard)/(products)/product-list/[id]/edit-product/*" -exec npx terser "{}" -o "{}" \;
npx terser .next/server/chunks/*.js -o .next/server/chunks/*.js
npx terser .next/server/pages/*.js -o .next/server/pages/*.js
