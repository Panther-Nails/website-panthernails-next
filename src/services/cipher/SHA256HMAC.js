import { createHmac } from "crypto";
import { EncryptionBase } from "./EncryptionBase";

export class SHA256HMAC extends EncryptionBase {
  computeHMACWithSecret(input, secret) {
    if (input && input.length === 0) return "";

    let hash = createHmac("sha256", secret);

    let sSHA256EncryptedData = hash.update(input).digest("hex");

    return sSHA256EncryptedData;
  }

  computeHMAC(input) {
    return this.computeHMACWithSecret(input, this.SECRET);
  }
}
