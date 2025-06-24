FROM directus/directus:11.7.2

USER root
RUN corepack enable
USER node

RUN pnpm install @directus-labs/super-header-interface
RUN pnpm install directus-extension-group-tabs-interface

# Copy and install local extension
COPY ./extensions /directus/extensions
COPY ./migrations-custom /directus/migrations-custom
COPY ./snapshots /directus/snapshots

# Copy migration files to migrations directory during build
RUN mkdir -p /directus/migrations && \
    find /directus/migrations-custom -name "*.js" -exec cp {} /directus/migrations/ \;

CMD npx directus bootstrap && \
  npx directus schema apply snapshots/snapshot.yml --yes && \
  npx directus database migrate:latest && \
  npx directus start
