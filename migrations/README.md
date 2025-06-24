# Custom Migrations

This is the recommended way to get started with Directus. 

Run the following command in your terminal:

```sh
docker compose up -d
```

Export snapshot

```sh
docker compose exec directus npx directus schema snapshot /directus/snapshots/test.yml
```

Directus should now be available at http://localhost:8055 or http://127.0.0.1:8055.
