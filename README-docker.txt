# Running Node.js Services in Docker

## Prerequisites
- Docker installed on your system

## Build the Docker Image

From the project root directory, run:

    docker build -t portal-drive-services .

## Run the Container

To start the services and map port 4000:

    docker run -d -p 4000:4000 --name portal-drive-services portal-drive-services

- The API will be available at http://localhost:4000

## Stopping and Removing the Container

To stop:

    docker stop portal-drive-services

To remove:

    docker rm portal-drive-services

## Notes

- The container will automatically install dependencies and start the main service (services.js).
- If you make changes to the code, rebuild the image with the build command above.
- If you use environment variables, add them to the Dockerfile or pass them with `-e` flags to `docker run`.
