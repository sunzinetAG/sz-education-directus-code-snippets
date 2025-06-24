export async function up(knex) {
    await knex('posts').insert([
        {
            "id": 3,
            "title": "New Post",
        }
    ]).onConflict().ignore();
}

export async function down(knex) {
    await knex('posts').whereIn('id', [3]).del();
}
