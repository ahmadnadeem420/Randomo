let password=document.getElementById("password");
function getSecureRandomSpecialChars(length) {

    const specialChars = "ABCDEFGHIJKLMabcdefghuzxNOQRSTUVWXYZ#$1357@%924680?ab????$$$$$cdefghijklmnopqrstuvwxyz#$#$ABCDEFGHIJKLMNOQR#$#$#$#$STUVWXYZ";

  
    let randomChars = '';

    
    for (let i = 0; i < length; i++) {
        const randomArray = new Uint8Array(1);
        window.crypto.getRandomValues(randomArray);

        
        const randomIndex = randomArray[0] % specialChars.length;

        
        randomChars += specialChars[randomIndex];
    }

    return randomChars;
}
function eight(){
const randomSpecialChars = getSecureRandomSpecialChars(8);
console.log(randomSpecialChars);
password.textContent=randomSpecialChars
}

function twelve(){
    const randomSpecialChars = getSecureRandomSpecialChars(12);
    console.log(randomSpecialChars);
    password.textContent=randomSpecialChars
    }

function sixteen(){
const randomSpecialChars = getSecureRandomSpecialChars(16);
console.log(randomSpecialChars);
password.textContent=randomSpecialChars
        }
function generate() {
    password.textContent="Click below ⚡⚡⚡"
}

  const copyContent = async () => {
try {
const text = document.getElementById("password").innerHTML;
await navigator.clipboard.writeText(text);
console.log('Content copied to clipboard');
} catch (err) {
console.error('Failed to copy: ', err);
            }
          }; 


    
