# Common build stage
FROM node:20 as common-build-stage

COPY . ./app

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN \
  if [ -f pnpm-lock.yaml ]; then yarn global add pnpm; \
  else echo "Lockfile not found." && exit 1; \
  fi

RUN pnpm install

EXPOSE 3000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["pnpm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["pnpm", "run", "start"]
