const { createBech32Address } = require('./addresses/createBech32Address')

const app = () => {
  const compressedPublicKey = '0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798'

  const { address } = createBech32Address(compressedPublicKey)

  console.log({address})
}

app()
