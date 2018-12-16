const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    /** https://mongoosejs.com/
     para criar uma nova propriedade no mongo alterar aqui
     brand: {type: String, required: false},
    */
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
