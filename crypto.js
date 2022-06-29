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
let db = {
    keyGen: [
        {
            alg: "RSA-OAEP",
            mod: [2048, 4096], //2048
            pexp: new Uint8Array([1, 0, 1]), //65537 
            hash: ["SHA-256", "SHA-384", "SHA-512"],
            use: ["encrypt", "decrypt"]
        },
        {
            alg: "RSASSA-PKCS1-v1_5",
            mod: [2048, 4096],
            pexp: new Uint8Array([1, 0, 1]),
            hash: ["SHA-256", "SHA-384", "SHA-512"],
            use: ["sign", "verify"]
        },
        {
            alg: "RSA-PSS",
            mod: [2048, 4096],
            pexp: new Uint8Array([1, 0, 1]),
            hash: ["SHA-256", "SHA-384", "SHA-512"],
            use: ["sign", "verify"]
        },
        {
            alg: "ECDSA",
            curve: ["P-256", "P-384", "P-521"],
            use: ["sign", "verify"]
        },
        {
            alg: "ECDH",
            curve: ["P-256", "P-384", "P-521"],
            use: ["deriveBits", "deriveKey"]
        },
        {
            alg: "HKDF",
            hash: ["SHA-256", "SHA-384", "SHA-512"],
            salt: window.crypto.getRandomValues(new Uint8Array(16)),
            info: "",
            use: ["deriveBits", "deriveKey"]
        },
        {
            alg: "PBKDF2",
            hash: ["SHA-256", "SHA-384", "SHA-512"],
            salt: window.crypto.getRandomValues(new Uint8Array(16)),
            iv: window.crypto.getRandomValues(new Uint8Array(16)),
            iterations: 100000,
            use: ["deriveBits", "deriveKey"]
        },
        {
            alg: "HMAC",
            hash: ["SHA-256", "SHA-384", "SHA-512"],
            use: ["sign", "verify"]
        },
        {
            alg: "AES-GCM",
            length: 256,
            use: ["encrypt", "decrypt"]
        }
    ]
}
let crypto = {

}
function generateKey(Key) {

}