# Docker Quickstart

Run the following command in your terminal:

```sh
docker run -p 8055:8055 directus/directus
```

The initial admin email address and password will be shown in the terminal. Directus should now be available at http://localhost:8055 or http://127.0.0.1:8055.

This quickstart allows you to explore Directus at a glance, but lacks many features including persistence. Once you stop the Docker container from running, any changes you’ve made will be lost.
