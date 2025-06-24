export default {
    id: 'custom',
    handler: (router, context) => {
        router.get('/', (req, res) => res.send('Hello, World!'));

        router.get('/latest-post', async (req, res) => {
            try {
                const { database } = context;
                
                const posts = await database('posts')
                    .select('*')
                    .limit(1);
                
                if (posts.length > 0) {
                    res.json(posts[0]);
                } else {
                    res.status(404).send('No posts found');
                }
            } catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
        });

		router.get('/post/:id', async (req, res) => {
			try {
				const { database } = context;
				
				const post = await database('posts')
					.select('*')
					.where('id', req.params.id);

				if (post.length > 0) {
					res.json(post[0]);
				} else {
					res.status(404).send('Post not found');
				}
			} catch (err) {	
				console.error(err);
				res.status(500).send('Internal Server Error');
			}
		});
    },
};
