import { BS64 } from "./BS64";
import { PNE36 } from "./PNE36";

export class BS64PNE36 {
  #bs64 = new BS64();
  #pne36 = new PNE36();

  encrypt(input) {
    return this.#pne36.encrypt(this.#bs64.encrypt(input));
  }

  decrypt(input) {
    return this.#bs64.decrypt(this.#pne36.decrypt(input));
  }
}
