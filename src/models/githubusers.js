import { Schema, model } from "mongoose";


const GithubUsersSchema = new Schema(
    {
        username: { type: String, trim: true },
        url: { type: String, trim: true },
        repositories: { type: String, required: true},
        repositoriesUrl: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


export default model("GithubUsers", GithubUsersSchema);