import { EncryptionBase } from "./EncryptionBase.js";

export class PNE36 extends EncryptionBase {
  encrypt(input) {
    if (input && input.length === 0) return "";

    let sEncryptedData = "";

    for (let i = 0; i < input.length; i++) {
      let iASCII = input[i].charCodeAt(0);

      if (this.IsAlphaNumeric(iASCII)) {
        sEncryptedData =
          sEncryptedData +
          this.EncryptPNE36Algo[this.DecryptPNE36Algo.indexOf(input[i])];
      } else {
        sEncryptedData = sEncryptedData + input[i];
      }
    }
    return sEncryptedData;
  }

  decrypt(input) {
    if (input && input.length === 0) return "";

    let sDecryptedData = "";

    for (let i = 0; i < input.length; i++) {
      let iASCII = input[i].charCodeAt(0);

      if (this.IsAlphaNumeric(iASCII)) {
        sDecryptedData =
          sDecryptedData +
          this.DecryptPNE36Algo[this.EncryptPNE36Algo.indexOf(input[i])];
      } else {
        sDecryptedData = sDecryptedData + input[i];
      }
    }
    return sDecryptedData;
  }
}
