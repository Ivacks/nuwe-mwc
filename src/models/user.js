import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
    {
        name: { type: String, trim: true },
        username: { type: String, trim: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
        date: { type: Date, default: Date.now },
        isEmailVerified: {type: Boolean, required:true},
        gitlabUserId: {type: Number, required:false},
        countryId: {type: Number, required:false}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export default model("User", UserSchema);