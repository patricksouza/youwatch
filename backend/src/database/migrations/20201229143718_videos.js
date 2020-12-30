
exports.up = function (knex) {
    return knex.schema.createTable('videos', function (table) {
        table.increments('id').primary();
        table.string('video_title');
        table.string('video_path');
        table.string('video_categorie');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('videos');
};
