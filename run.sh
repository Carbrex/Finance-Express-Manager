cd frontend/
npm run build
cd ../backend
cp -r ../frontend/dist build
npm run dev