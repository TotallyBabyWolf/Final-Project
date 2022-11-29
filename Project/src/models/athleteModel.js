const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        pronouns: {
            type: [String]
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        sports: {
            type: [String],
            required: true
        },
        teams: {
            type: [mongoose.Schema.Types.ObjectId],
            maxLength: 10,
            ref: "team"
        },
        following: {
            type: [mongoose.Schema.Types.ObjectId],
        },
        followers: {
            type: [mongoose.Schema.Types.ObjectId],
        }
    }
);

const Model = mongoose.model("athlete", UserSchema);

module.exports = Model;