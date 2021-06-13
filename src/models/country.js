import { Schema, model } from "mongoose";

const CountrySchema = new Schema(
    {
        name: { type: String, trim: true },
        alphaCode: {
            code2: String,
            code3: String
        },
        callingCode: {type: String, required:false}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Country", CountrySchema);