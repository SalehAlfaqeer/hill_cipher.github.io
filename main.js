let msg = document.getElementById("#msg"),
  key = document.getElementById("#key"),
  encRadio = document.getElementById("#encRadio"),
  decRadio = document.getElementById("#decRadio"),
  result = document.getElementById("#result");

class BonusCipher {
  constructor(key) {
    this.key = key;
  }

  encrypt(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // uppercase letters
        charCode = ((charCode - 65 + this.key) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // lowercase letters
        charCode = ((charCode - 97 + this.key) % 26) + 97;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }

  decrypt(ciphertext) {
    let result = "";
    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // uppercase letters
        charCode = ((charCode - 65 - this.key + 26) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // lowercase letters
        charCode = ((charCode - 97 - this.key + 26) % 26) + 97;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }
}

// // Console
// const cipher = new BonusCipher(3);
// const plaintext = "Saleh Alfaqeer";

// const ciphertext = cipher.encrypt(plaintext);
// console.log(ciphertext); // output should be: "Khoor Zruog!"
// const decryptedText = cipher.decrypt(ciphertext);
// console.log(decryptedText); // output should be: "Hello World!"



// Interface
$("#btn").click(function () {
  // Example usage:
  const cipher = new BonusCipher(3);
  const plaintext = $("#msg").val();

  
  if ($("#select").val() == "encrypt") {
    const ciphertext = cipher.encrypt(plaintext);
    $("#result").text(ciphertext);
  } else {
    const decryptedText = cipher.decrypt($("#msg").val());
    $("#result").text(decryptedText);
  }

});
