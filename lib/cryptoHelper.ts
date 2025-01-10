import CryptoJS from "crypto-js";

const SECRET_KEY: string =
  process.env.NEXT_PUBLIC_SECRET_KEY || "your-secure-key";

// encrypt pass
export const encryptData = (data: string): string => {
  const ciphertext = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  return ciphertext;
};

// decrypt pass
export const decryptData = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
