const mongoose = require('mongoose');

async function connectToMongoDB(params) {
    const connection = await mongoose.connect(params)
    return connection
}

module.exports = {connectToMongoDB}