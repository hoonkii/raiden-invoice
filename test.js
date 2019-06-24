var instapayReq = require('./payreq.js')

// console.log("-- encode Test --")
// var encoded = instapayReq.encode({
// "satoshis": 2000,
// "timestamp": 1496314658,
// "tags": [
//   {
//     "tagName": "payee_node_key",
//     "data": "78902c58006916201F65f52f7834e467877f0500"
//   },
//   {
//     "tagName": "expire_time",
//     "data": 3600
//   },
// ]
// })
// var privateKeyHex = '3038465f2b9be0048caa9f33e25b5dc50252f04c078aaddfbea74f26cdeb9f3c'
// var signed = instapayReq.sign(encoded, privateKeyHex)
//
// console.log(signed)
//

console.log("-- decode Test -- ")
var decoded = instapayReq.decode('insta27u1pwsn9kqnpq0zgzckqqdytzq8m975hhsd8yv7rh7pgqxqrrssej8njdtdunewn2m6ve6vj5l940l0g9r94nrfyktzmlws5w792h49yw55p2ngzgsuzpk6wdtqurv0839y6mu8jkjcyp4z7fcyh7kzrzcp5mzuve')

console.log(decoded)
