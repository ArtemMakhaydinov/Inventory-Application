const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

TypeSchema.virtual('url').get(function () {
    return `/pokedex/type/${this._id}`;
});

module.exports = mongoose.model('Type', TypeSchema);
