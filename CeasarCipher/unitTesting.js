plainText = '123';
function unitTestEncrypt() { // Tests encrypt function
    encrypt();

    let expected = [1, 2, 3];
    let actual = plainTextArrau;
    if (actual == expected) {
        console.log('Unit test for encrypt SUCCESS' + '\n' + 'expected: ' + expected + '\n' + 'actual: ' + actual);
    } else {
        console.log('Unit test for encrypt FAIL' + '\n' + 'expected: ' + expected + '\n' + 'actual: ' + actual);
    }
}