import { v2 as cloudinary } from "cloudinary";
import { Errors } from "../utils/Errors.enum";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function saveToCloudinary(file: string): Promise<string | never> {
  try {
    const { secure_url } = await cloudinary.uploader.upload(file);

    return secure_url;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${Errors.CLOUDINARY}: ${error.message}`);
    }

    throw new Error(Errors.UNKNOWN);
  }
}

export default saveToCloudinary;
