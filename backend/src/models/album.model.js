import mongoose from "mongoose";
import { Songs } from "./songs.model.js";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true

    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Songs'
    }],
}, { timestamps: true });

export const Album = mongoose.model("Album", albumSchema);