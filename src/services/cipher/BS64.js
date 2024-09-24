export class BS64 {
  base64ToBytes(base64) {
    const binString = window.atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
  }

  bytesToBase64(bytes) {
    const binString = Array.from(bytes, (byte) =>
      String.fromCodePoint(byte)
    ).join("");
    return window.btoa(binString);
  }

  encrypt(input) {
    var encrypted = this.bytesToBase64(new TextEncoder().encode(input));
    return encrypted;
  }

  decrypt(input) {
    var decrypted = new TextDecoder().decode(this.base64ToBytes(input));
    return decrypted;
  }
}
