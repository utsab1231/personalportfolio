
# Personal Portfolio

My personal portfolio website, built to showcase my work, experience, interests, and projects.

## Tech Stack

* **Next.js**
* **TypeScript**
* **Tailwind CSS**
* **Firebase Hosting**

## Features

* Responsive and minimal design
* Personal introduction and career interests
* Project showcase
* Experience and skills
* Contact information
* Static site generation for fast performance

## Development

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

The static files are generated in the `out` directory.

## Deployment

The portfolio is deployed using **Firebase Hosting**.

Production deployments are handled through GitHub Actions whenever changes are pushed to the `master` branch.

The deployment process:

```text
Push to master
      ↓
Install dependencies
      ↓
npm run build
      ↓
Generate static files
      ↓
Deploy to Firebase Hosting
```

## Project Structure

```text
.
├── public/          # Static assets
├── src/             # Application source code
├── out/             # Generated static output
├── firebase.json    # Firebase Hosting configuration
├── next.config.*    # Next.js configuration
├── package.json
└── README.md
```

## License

This project is a personal portfolio and is not intended to be redistributed or reused as a template without permission.
