const env = process.env
const config = {
    db: {
        host: env.DB_HOST || 'freedb.tech',
        user: env.DB_USER || 'freedbtech_node',
        password: env.DB_PASSWORD || 'node',
        database: env.DB_NAME || 'freedbtech_node'
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;