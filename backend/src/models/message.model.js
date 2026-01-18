import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: String,
        requied: true
    },
    receiverId: {
        type: String,
        requied: true
    },
    content: {
        type: String,
        requied: true
    }
}, { timestamps: true })

export const Message = mongoose.model("Message", messageSchema);