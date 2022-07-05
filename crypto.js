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

let hashs = [
    "SHA-256",
    "SHA-384",
    "SHA-512"
];
let modulus = [2048, 4096]
let curves = ["P-256", "P-384", "P-521"]

function ran() {
    window.crypto.getRandomValues(new Uint8Array(16))
}

let algDB = [
    {
        name: "RSA-OAEP",
        modulusLength: [2048, 4096], //2048
        pexp: new Uint8Array([1, 0, 1]), //65537 
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        use: ["encrypt", "decrypt"]
    },
    {
        name: "RSASSA-PKCS1-v1_5",
        modulusLength: [2048, 4096],
        pexp: new Uint8Array([1, 0, 1]),
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        use: ["sign", "verify"]
    },
    {
        name: "RSA-PSS",
        modulusLength: [2048, 4096],
        pexp: new Uint8Array([1, 0, 1]),
        hash: ["SHA-256", "SHA-384", "SHA-512"],
        use: ["sign", "verify"]
    },
    {
        name: "ECDSA",
        namedCurve: ["P-256", "P-384", "P-521"],
        use: ["sign", "verify"]
    },
    {
        name: "ECDH",
        namedCurve: ["P-256", "P-384", "P-521"],
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



let cryptoDb = {
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

let x;
async function createKey(param, extractable, purpose) {
    if (alg === 'RSA-OAEP' || alg === 'RSASSA-PKCS1-v1_5' || alg === 'RSA-PSS') {
        cryptoParams = {
            name: alg,
            modulusLength: param.modulusLength,
            publicExponent: new Uint8Array([1,0,1]),
            hash: param.hash
        }
    } else if (alg === 'ECDSA' || alg === 'ECDH') {
        cryptoParams = {
            name: alg,
            hash: ("SHA-512")
        }
    } else if (alg === 'HMAC') {

    } else if (alg === 'AES-CTR' || alg === 'AES-CBC' || alg === 'AES-KW') {

    }
    let key = await window.crypto.subtle.generateKey(
        cryptoParams,
        canExport,
        purpose
    );
    x = key
    return key

}

(() => {
    async function exportCryptoKey(key, format){
        const exported = await window.crypto.subtle.exportKey(
            format,
            key
        );
    }
})