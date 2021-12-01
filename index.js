const express = require('express');
const app = express();
const authData = require('./utils.js');

getAuthData = function(options) {
    //pan, expDate, cvv, pinString, publicModulus, publicExponent
    var pan = options.pan || null;
    var expDate = options.expDate || null;
    var cvv = options.cvv || null;
    var pinString = options.pin || null;
    var publicModulus = options.publicModulus || null;
    var publicExponent = options.publicExponent || null;

    var SecureAuthData = {
        publicKeyModulus: publicModulus != null ? publicModulus : "009c7b3ba621a26c4b02f48cfc07ef6ee0aed8e12b4bd11c5cc0abf80d5206be69e1891e60fc88e2d565e2fabe4d0cf630e318a6c721c3ded718d0c530cdf050387ad0a30a336899bbda877d0ec7c7c3ffe693988bfae0ffbab71b25468c7814924f022cb5fda36e0d2c30a7161fa1c6fb5fbd7d05adbef7e68d48f8b6c5f511827c4b1c5ed15b6f20555affc4d0857ef7ab2b5c18ba22bea5d3a79bd1834badb5878d8c7a4b19da20c1f62340b1f7fbf01d2f2e97c9714a9df376ac0ea58072b2b77aeb7872b54a89667519de44d0fc73540beeaec4cb778a45eebfbefe2d817a8a8319b2bc6d9fa714f5289ec7c0dbc43496d71cf2a642cb679b0fc4072fd2cf",
        publicKeyExponent: publicExponent != null ? publicExponent : "010001",
        card: pan,
        exp: expDate,
        cvv: cvv,
        pin: pinString
    };
    return authData(SecureAuthData);
};

const options = {
    pan: '6280511000000095',
    expDate: '5004',
    cvv: '111',
    pin: '1111'
}
console.log(getAuthData(options));

app.listen(6000, () => {
    console.log('listening on 6000')
})


