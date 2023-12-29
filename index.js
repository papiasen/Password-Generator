let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let firstPwdDiv = document.getElementById("pwd1")

// function generaterandomPassword() {
//     let password1 = ""
//     for (let i = 0; i < 15; i++) {
//         let randomNumber = Math.floor(Math.random() * characters.length)
//         let result = characters[randomNumber]
//         password1 += result
//     }
//     firstPwdDiv.textContent = password1
// }

let secondPwdDiv = document.getElementById("pwd2")

// function generaterandomPassword() {
//     let password2 = ""
//     for (let i = 0; i < 15; i++) {
//         let randomNumber = Math.floor(Math.random() * characters.length)
//         let result = characters[randomNumber]
//         password2 += result
//     }
//     secondPwdDiv.textContent = password2
// }

function generaterandomPassword() {
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < 15; i++) {
        let randomNumber1 = Math.floor(Math.random() * characters.length)
        let randomNumber2 = Math.floor(Math.random() * characters.length)
        let result1 = characters[randomNumber1]
        let result2 = characters[randomNumber2]
        console.log(result1)
        password1 += result1
        password2 += result2
    }
    firstPwdDiv.textContent = password1
    secondPwdDiv.textContent = password2
}
// generaterandomPassword()


// sample code for copy clipboard (navigator.clipboard api)
// document.addEventListener('click', function(event) {
//     if (event.target.tagName === 'SPAN') {
//       let copyText = event.target.textContent;
//       navigator.clipboard.writeText(copyText);
//     }
//   });


firstPwdDiv.addEventListener('click', function (event) {
    navigator.clipboard.writeText(firstPwdDiv.textContent)
    alert('First Password Copied to Clipboard.')
})

secondPwdDiv.addEventListener('click', function (event) {
    navigator.clipboard.writeText(secondPwdDiv.textContent)
    alert('Second Password Copied to Clipboard.')
})

