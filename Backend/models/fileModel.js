const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    fileUrl: {
        type: String, 
        required: true
    },
    fileType: {
        type: String, 
        enum: ["Image", "Video", "Voice", "Text", "URL"],
        required: true
    },
    uploadedAt: {
        type: Date, 
        default: Date.now
    }
}, {timestamps: true})

module.exports = mongoose.model("File", fileSchema)