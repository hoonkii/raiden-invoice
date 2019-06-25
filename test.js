var raidenReq = require('./payreq.js')

console.log("-- encode Test --")
var encoded = raidenReq.encode({
"satoshis": 2000,
"timestamp": 1496314658,
"tags": [
  {
    "tagName": "payee_node_key",
    "data": "78902c58006916201F65f52f7834e467877f0500"
  },
  {
    "tagName": "expire_time",
    "data": 3600
  },
]
})
var privateKeyHex = '3038465f2b9be0048caa9f33e25b5dc50252f04c078aaddfbea74f26cdeb9f3c'
var signed = raidenReq.sign(encoded, privateKeyHex)

console.log(signed)


console.log("-- decode Test -- ")
var decoded = raidenReq.decode(signed['paymentRequest'])

console.log(decoded)
