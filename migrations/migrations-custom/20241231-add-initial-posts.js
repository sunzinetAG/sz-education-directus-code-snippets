export async function up(knex) {
    await knex('posts').insert([
        {
            "id": 1,
            "title": "Test Post",
        },
        {
            "id": 2,
            "title": "Test Post 2",
        }
    ]).onConflict().ignore();
}

export async function down(knex) {
    await knex('posts').whereIn('id', [1, 2]).del();
}
