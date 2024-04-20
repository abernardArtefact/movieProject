const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        name: {type: string, required: true},
        email: {type: string, required: true, unique: true},
        password: {type: string, required: true},
    },
    {collection: 'user-data'}

)
const userData = mongoose.model('UserData', User);
module.exports = User;
