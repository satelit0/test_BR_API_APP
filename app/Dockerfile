FROM --platform=$BUILDPLATFORM node:16 as builder

RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli@15.1.6

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]