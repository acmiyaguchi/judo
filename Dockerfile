FROM node:20

WORKDIR /app
COPY ./app/package* ./
RUN npm install

COPY ./app ./

# NOTE: this should point the static files
ARG VITE_STATIC_HOST=https://nginx:4000
ENV VITE_STATIC_HOST=${VITE_STATIC_HOST}
ENV PORT=${PORT:-8000}
