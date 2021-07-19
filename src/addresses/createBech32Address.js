const { createHash } = require('crypto')

/**
 * 1. Having a compressed public key
 * (0x02 or 0x03 followed by 32 byte X coordinate)
 */
const createBech32Address = (compressedPublicKey) => {
  /**
   * 2. Perform SHA-256 hashing on the public key
   */

  const compressedPublicKeySHA256Hash = createHash('sha256')
    .update(Buffer.from(compressedPublicKey, 'hex'))
    .digest('hex')

  /**
   * 3. Perform RIPEMD-160 hashing on the result of SHA-256
   */

  const compressedPublicKeySHA256HashRIPEMD160Hash = createHash('ripemd160')
  .update(Buffer.from(compressedPublicKeySHA256Hash, 'hex'))
  .digest('hex')

  /**
   * 4. The result of step 3 is an array of
   * 8-bit unsigned integers (base 2^8=256)
   *
   * and Bech32 encoding converts this to an array of
   * 5-bit unsigned integers (base 2^5=32)
   *
   * so we “squash” the bytes to get:
   * in hex: 0e140f070d1a001912060b0d081504140311021d030c1d03040f1814060e1e16
   * in numbers: 14 20 15 07 13 26 00 25 18 06 11 13 08 21 04 20 03 17 02 29 03 12 29 03 04 15 24 20 06 14 30 22   *
   * 5 bits binary: 01110 10100 01111 00111 01101 11010 00000 11001 10010 00110 01011 01101 01000 10101 00100 10100 00011 10001 00010 11101 00011 01100 11101 00011 00100 01111 11000 10100 00110 01110 11110 10110
   */

  // TODO

  /**
   * 5. Add the witness version byte in front of the step 4 result
   * (current version is 0)
   */

  // TODO

  /**
   * 6. Compute the checksum by using the data from step 5 and the H.R.P
   * (bc for MainNet and tb for TestNet)
   */

  // TODO

  return {
    compressedPublicKeySHA256Hash,
    compressedPublicKeySHA256HashRIPEMD160Hash,
    address: ''
  }
}

exports.createBech32Address = createBech32Address
