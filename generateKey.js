() => {
    //    digests: ['SHA-256', 'SHA-384', 'SHA-512'],
  //      modulus: [2048, 4096],
//        usages: ['encrypt', 'decrypt', 'sign', 'verify', 'deriveKey', 'deriveBits', 'wrapKey', 'unwrapKey']

let forms = {
        cat: [
            {
                name: 'Symmetric Key (AES / HMAC)',
                value: 0
            },
            {
                name: 'Asymmetric Key (RSS)',
                value: 1
            },
            {
                name: 'Elliptical Curve',
                value: 2
            }

        ],
        alg: [
            {
                name: 'RSASSA-PKCS1-v1_5 (Sign / Verify)',
                cat: 1,
                value: 'RSASSA-PKCS1-v1_5'
            },
            {
                name: 'RSA-PSS (Sign / Verify)',
                cat: 1,
                value: 'RSA-PSS'
            },
            {
                name: 'RSA-OAEP (Encrypt / Decrypt)',
                cat: 1,
                value: 'RSA-OAEP'
            },
            {
                name: 'ECDSA (Sign / Verify)',
                cat: 2,
                value: 'ECDSA'
            },
            {
                name: 'ECDH (Derive Key)',
                cat: 2,
                value: 'ECDH'
            }
            /*,{
                name: 'HKDF (High Entropy Input Key Derivation)',
                cat: 0,
                value: 'HKDF'
            },
            {
                name: 'PBKDF2 (Low Entropy Input Key Derivation)',
                cat: 0,
                value: 'PBKDF2',
            }
            */
        ]
    }
    x = document.getElementById("model-popup")

    x.querySelector("#modalTitle").innerText = "Create a Crypto Key"
    x.querySelector('#modal-body').innerText = ''


}