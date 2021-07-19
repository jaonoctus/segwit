const { createBech32Address } = require('../src/addresses/createBech32Address')

const compressedPublicKey = '0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798'

let compressedPublicKeySHA256Hash
let compressedPublicKeySHA256HashRIPEMD160Hash

describe('Bech32 Address', () => {
  beforeAll(() => {
    const bech32 = createBech32Address(compressedPublicKey)

    compressedPublicKeySHA256Hash = bech32.compressedPublicKeySHA256Hash
    compressedPublicKeySHA256HashRIPEMD160Hash = bech32.compressedPublicKeySHA256HashRIPEMD160Hash
  })

  test('Step 1. Perform SHA-256 hashing on the public key', () => {
    const hash = '0f715baf5d4c2ed329785cef29e562f73488c8a2bb9dbc5700b361d54b9b0554'

    expect(compressedPublicKeySHA256Hash).toBe(hash)
  })

  test('Step 2. Perform RIPEMD-160 hashing on the result of SHA-256', () => {
    const hash = '751e76e8199196d454941c45d1b3a323f1433bd6'

    expect(compressedPublicKeySHA256HashRIPEMD160Hash).toBe(hash)
  })

  test('Step 3. Convert array of 8-bit unsigned integers (base 2^8=256) to 5-bit unsigned integers (base 2^5=32)', () => {
    const hash = '0e140f070d1a001912060b0d081504140311021d030c1d03040f1814060e1e16'

    expect('').toBe(hash)
  })

  test('Step 4. Add the witness version byte', () => {
    const hash = '000e140f070d1a001912060b0d081504140311021d030c1d03040f1814060e1e16'

    expect('').toBe(hash)
  })

  test('Step 5. Compute the checksum by using the data and the H.R.P', () => {
    const checksum = '0c0709110b15'

    expect('').toBe(checksum)
  })

  test('Step 6. Append the checksum to result', () => {
    const checksum = '000e140f070d1a001912060b0d081504140311021d030c1d03040f1814060e1e160c0709110b15'

    expect('').toBe(checksum)
  })

  test('Step 7. Map each value to its corresponding character in Bech32Chars', () => {
    const result = 'qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4'

    expect('').toBe(result)
  })

  test('Step 8. A Bech32_encoded address consists of 3 parts: HRP + Separator + Data', () => {
    const address = 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4'

    expect('').toBe(address)
  })
})
