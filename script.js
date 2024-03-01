const inputTextArea = document.getElementById("input_text");
const resultTextArea = document.getElementById("text_out");
 
inputTextArea.addEventListener("keypress", function() {

    const regex = new RegExp("^[a-z\]+$");
    var self = this;
        setTimeout( function(){
    
        var text = self.value;
        
        if(!regex.test(text)) {             
            self.value = "";
        }
        
    }, 10);
});


// função de codificação
function encryptor() {

    const enterText = inputTextArea.value.toLocaleLowerCase();

    const resultText = enterText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    resultTextArea.value = resultText;    

   
}

// função de decodificação
function decryptor() {

    const enterText = inputTextArea.value.toLocaleLowerCase();

    const resultText = enterText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u"); 

    resultTextArea.value = resultText;

}

// função Copiar    
function copy() {

    navigator.clipboard.writeText(resultTextArea.value); 
    alert("Texto copiado com sucesso!");
    inputTextArea.value = "";
    
}





