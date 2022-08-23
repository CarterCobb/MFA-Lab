import LS from "secure-ls";

class SecureLS extends LS {
  constructor(config) {
    super(config);
    this.config.encryptionNamespace = config.encryptionNamespace;
  }
  getMetaKey() {
    return this.config.encryptionNamespace
      ? "_" + this.config.encryptionNamespace + "__metadata_"
      : "_metadata_";
  }
}

const ls = new SecureLS({ encodingType: "aes", encryptionNamespace: "mfa-lab" });

export const cookieStorageCache = {
  get: (key) => JSON.parse(ls.get(key)),
  set: (key, value) => ls.set(key, JSON.stringify(value)),
  remove: (key) => ls.remove(key),
  allKeys: () => ls.getAllKeys(),
};
