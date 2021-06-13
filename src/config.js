// Read environment variables
import { config } from "dotenv";
config();

const configurations = {
    PORT:  3000,
    MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
    MONGODB_DATABASE:  "nuwemwc",
    MONGODB_URI: `mongodb+srv://Taiki:TaikiPassword@cluster0.ge4ht.mongodb.net/nuwemwc?retryWrites=true&w=majority`,
};

export default configurations;