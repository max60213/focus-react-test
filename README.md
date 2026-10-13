# Focus React Test

A minimal React playground served by a Node.js/Express process with Vite middleware. It is **not a static export**: run the Node server in production or development.

## Requirements

- Node.js 20.19+ or 22.12+

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` for Vite's development server with hot reload.

## Run with Node.js

```bash
npm install
npm start
```

The Express server renders/serves the React app through Vite middleware at `http://localhost:3000`. Set `PORT` to change the port.

`npm run build` is available for validating the Vite production bundle; the Node.js server remains the app entry point and no static-site export is configured.
