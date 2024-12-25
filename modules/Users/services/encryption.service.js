const encrypt = (text) => {
  return text + "clacla";
};

const decrypt = (text) => {
  return text.replace("clacla", "");
};

const checkEncryption = (text, encryptedText) => {
  let decryptedText = decrypt(encryptedText);
  return text == decryptedText;
};

const generateToken = (email) => {
  return "asafdsjfdkgfdkgkjd";
};

export { encrypt, decrypt, checkEncryption, generateToken };
