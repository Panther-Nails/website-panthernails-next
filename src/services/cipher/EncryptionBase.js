export class EncryptionBase {
  DecryptPNE36Algo =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  EncryptPNE36Algo =
    "q8ert3uiop9kjh2fdsam5nxvbcZ1CVBNMP4IUYT0EWQL7KSJD6FGRXlgwyAOHz";
  SECRET = "asdfghjklzxcvbnmqwertyuiop1234567890ASDFGHJKLZXCVBNMQWERTYUIOP";

  IsAlphaNumeric(iASCII) {
    return (
      (iASCII >= 65 && iASCII <= 90) ||
      (iASCII >= 97 && iASCII <= 122) ||
      (iASCII >= 48 && iASCII <= 57)
    );
  }
}
