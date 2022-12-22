const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const timetamp = new Date().getTime();
        const originalName = file.originalname
        cb(null, `${timetamp}-${originalName}`)
    }
})


const upload = multer({
    storage: storage, 
    limits : { 
        fileSize : 2 * 1000 * 1000 // 2MB 
    }
})

module.exports = upload