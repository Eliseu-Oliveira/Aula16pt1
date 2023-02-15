// Desenvolva uma página HTML com um formulário conforme modelo (de baixa fidelidade) abaixo:

// Após o clique no botão valide:

// a) Se os três campos estão preenchidos, caso estejam, exiba uma mensagem de sucesso. Caso não estejam, exiba uma mensagem de erro. (Pode ser via alert);

// b) Verifique se o CPF digitado é válido. Caso seja válido prepare uma mensagem de sucesso, caso não seja exiba uma mensagem específica para CPF inválido.

// c) Caso todos os campos estejam preenchidos e o CPF válido, exiba uma mensagem de dados enviados com sucesso!

// Dicas:

// ● Usem o que vocês aprenderam até aqui de forma inteligente.

// ● Deixem esse formulário lindo, usem a criatividade e o CSS para isso.

// ● As mensagens para o cliente podem ser feitas com alert, ou se conseguirem, através de uma div que aparece ou não de acordo com a situação. 

// ● Um CPF válido contém 11 números, então se atentem em como garantir que ele seja válido.


function validarForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;

    if (!nome || !email || !cpf) {
       document.getElementById("error").style.display = "block";
       return;
    }

    document.getElementById("error").style.display = "none";

    if (cpf.length !== 11) {
       alert("CPF inválido");
       return;
    }

    document.getElementById("success").style.display = "block";
 }