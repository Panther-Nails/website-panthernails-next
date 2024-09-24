import { BS64 } from "./BS64";
import { PNE36 } from "./PNE36";
import { BS64PNE36 } from "./BS64PNE36";

export { BS64, BS64PNE36, PNE36 };

export class Algorithms {
  BS64 = "BS64";
  BS64PNE36 = "BS64PNE36";
  PNE36 = "PNE36";
}

export class Cipher {
  encrypt(input, algorithm) {
    switch (algorithm) {
      case Algorithms.BS64:
        return new BS64().encrypt(input);

      case Algorithms.PNE36:
        return new PNE36().encrypt(input);

      case Algorithms.BS64PNE36:
        return new BS64PNE36().encrypt(input);

      default:
        return new BS64PNE36().encrypt(input);
    }
  }
  decrypt(input, algorithm) {
    switch (algorithm) {
      case Algorithms.BS64:
        return new BS64().decrypt(input);

      case Algorithms.PNE36:
        return new PNE36().decrypt(input);

      case Algorithms.BS64PNE36:
        return new BS64PNE36().decrypt(input);

      default:
        return new BS64PNE36().decrypt(input);
    }
  }
}
