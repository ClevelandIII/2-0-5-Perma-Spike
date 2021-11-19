const mongoose = require('mongoose')

const Connect = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log(`Connected`))
    .catch((err) => console.log(err))
}

module.exports = Connect