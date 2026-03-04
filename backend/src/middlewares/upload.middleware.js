const multer = require("multer")

const storage = multer.memoryStorage()

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 12
    }
})

module.exports = upload