import CryptoJS from "crypto-js";

const secretKey =
  "U2FsdGVkX1%2Fh6%2F3CgiZPxyLfJK1fog%2BHVzsxJRJO6NOABXNUG7rIWkDW5FHrnQl8";

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};

export const decryptData = (encryptedData: string): string | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) throw new Error("Decryption returned empty string");
    return decrypted;
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};
