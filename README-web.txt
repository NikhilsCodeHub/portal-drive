# Web Application Docker Instructions

This guide explains how to build and run the web application using the provided Dockerfile.web.

## Prerequisites

- Docker installed on your system
- The following files and folders present in the project root:
  - app.js
  - build/ (containing your web code and dependencies)
  - Dockerfile.web

## Build the Docker Image

Open a terminal in the project root directory and run:

```
docker build -f Dockerfile.web -t my-web-app .
```

This command builds the Docker image using Dockerfile.web and tags it as `my-web-app`.

## Run the Docker Container

To start the web application container, run:

```
docker run -p 3000:3000 my-web-app
```

- This maps port 3000 of your host to port 3000 in the container.
- If your app uses a different port, update the `EXPOSE` and `-p` values accordingly.

## Notes

- If your dependencies are managed via a `package.json` inside the `build` folder, uncomment the relevant lines in Dockerfile.web to copy and install them.
- Make sure `app.js` is the correct entry point for your application.
