//RSASSA-PKCS1 Sign and Verify
//RSA-PSS Sign and Verify
//ECDSA Sign and Verify
//HMAC Sign and Verify

//RSA-OAEP Encrypt/Decrypt, Key Wrap
//AES-CTR Encrypt/Decrypt, Key Wrap
//AES-CBC Encrypt/Decrypt, Key Wrap
//AES-GCM Encrypt/Decrypt, Key Wrap

//SHA-1, SHA-256, SHA-384, SHA-512 Digests
//ECDH DeriveBits, DeriveKey
//HKDF Derive
//PBKDF2 Derive

//AES-KW Key Wrap
let algDB = [
    {
        name: "RSA-OAEP",
        mod: [2048, 4096], //2048
        pexp: new Uint8Array([1, 0, 1]), //65537 
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        use: ["encrypt", "decrypt"]
    },
    {
        name: "RSASSA-PKCS1-v1_5",
        mod: [2048, 4096],
        pexp: new Uint8Array([1, 0, 1]),
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        use: ["sign", "verify"]
    },
    {
        name: "RSA-PSS",
        mod: [2048, 4096],
        pexp: new Uint8Array([1, 0, 1]),
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        use: ["sign", "verify"]
    },
    {
        name: "ECDSA",
        curve: ["P-256", "P-384", "P-521"],
        use: ["sign", "verify"]
    },
    {
        name: "ECDH",
        curve: ["P-256", "P-384", "P-521"],
        use: ["deriveBits", "deriveKey"]
    },
    {
        name: "HKDF",
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        salt: window.crypto.getRandomValues(new Uint8Array(16)),
        info: "",
        use: ["deriveBits", "deriveKey"]
    },
    {
        name: "PBKDF2",
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        salt: window.crypto.getRandomValues(new Uint8Array(16)),
        iv: window.crypto.getRandomValues(new Uint8Array(16)),
        iterations: 100000,
        use: ["deriveBits", "deriveKey"]
    },
    {
        name: "HMAC",
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        use: ["sign", "verify"]
    },
    {
        name: "AES-GCM",
        length: [128, 192, 256],
        use: ["encrypt", "decrypt"]
    },
    {
        name: "AES-CTR",
        length: [128, 192, 256],
        use: ["encrypt", "decrypt"]
    },
    {
        name: "AES-CBC",
        length: [128, 192, 256],
        use: ["encrypt", "decrypt"]
    },
    {
        name: "AES-KW",
        length: [128, 192, 256],
        use: ["encrypt", "decrypt"]
    }
]

let algorithm = {}
for (i = 0; i < db.length; i++) {
    algObj = (db[i].name).replace("-", "_")
    algorithm[algObj] = db[i];
}

let db = {
    RSA_OAEP: algDB[0],
    RSASSA_PKCS1_v1_5: algDB[1],
    RSA_PSS: algDB[2],
    ECDSA: algDB[3],
    ECDH: algDB[4],
    HKDF: algDB[5],
    PBKDF2: algDB[6],
    HMAC: algDB[7],
    AES_GCM: algDB[8],
    AES_CTR: algDB[9],
    AES_CBC: algDB[10],
    AES_KW: algDB[11]
}

let crypto = {

}
function genCryptokey(alg, data) {
    if (alg === 'RSA-OAEP' || alg === 'RSASSA-PKCS1-v1_5' || alg === 'RSA-PSS') {
        RsaParams = {
            name: "",
            modulusLength: 0,
            publicExponent: 0,
            hash: 0
        }
    } else if (alg === 'ECDSA' || alg === 'ECDH') {

    } else if (alg === 'HMAC') {

    } else if (alg === 'AES-CTR' || alg === 'AES-CBC' || alg === 'AES-KW') {

    }
}
