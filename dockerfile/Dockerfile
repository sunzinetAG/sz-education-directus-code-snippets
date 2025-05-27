FROM directus/directus:11.7.2

USER root
RUN corepack enable
USER node

RUN pnpm install @directus-labs/super-header-interface
RUN pnpm install directus-extension-group-tabs-interface