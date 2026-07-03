# RealEstate Service

A full-stack property-listing web app built with React, TypeScript, and Firebase.
Browse property listings with detailed views and an image gallery, served from
Cloud Firestore.

**Live demo:** _add your CodeSandbox preview URL here_

> **About the demo data:** Listings were pulled **once** from the CoreLogic
> property API and cached into Firestore, to avoid repeated calls to a paid API.
> The demo therefore runs on a fixed sample dataset covering a limited set of
> areas — searches outside those areas return the seeded sample results.

## Features
- Card-based property listing browser
- Expanded listing view (details, description, image gallery)
- Search / filter interface
- Data served from Cloud Firestore

## Tech stack
React · TypeScript · Vite · React Router · styled-components · Firebase / Firestore

## Architecture
Property data is fetched **once** from the CoreLogic API and cached into Firestore.
The app reads from Firestore at runtime — a deliberate choice to avoid repeated
paid-API calls and keep the app fast and free to run.

## Running locally
```bash
git clone https://github.com/SteaneMurphy/RealEstateService.git
cd RealEstateService
npm install
cp .env.example .env    # then fill in your Firebase config
npm run dev             # http://localhost:5173
```

## Screenshots
_add 1–2 screenshots of the listings view and an expanded listing_
