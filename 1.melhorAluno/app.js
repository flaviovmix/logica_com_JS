var id = 3;
var melhorMedia = 7;
var melhorAluno = "nenhum";

function adicionarLinha() {
    var minhaTabela = document.getElementById("tabelaLista");
    var nome = document.getElementById('nome-pessoa');
    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");

    if ((nome.value==="") || (nota1.value==="") || (nota2.value==="")) {
        alert("Dados incorretos. Informe o nome e as notas do aluno.")
    }else {
        var areaMelhorAluno = document.getElementById("area-melhor-aluno");
        var media = ((parseFloat(nota1.value) + parseFloat(nota2.value))/2).toFixed(1);
    
        var novaLinha = minhaTabela.insertRow(minhaTabela.rows.length);    
        var celId = novaLinha.insertCell(0);
        var celNome = novaLinha.insertCell(1);
        var celNota1 = novaLinha.insertCell(2);
        var celNota2 = novaLinha.insertCell(3);
        var celMedia = novaLinha.insertCell(4);
    
        id++;
        celId.innerHTML = `<strong>${id}</strong>`;
        celNome.innerHTML = nome.value;
        celNota1.innerHTML = nota1.value;
        celNota2.innerHTML = nota2.value;
        celMedia.innerHTML = media;
    
        if(media > melhorMedia) {
            melhorAluno = nome.value;
            melhorMedia = media;
            areaMelhorAluno.innerHTML = `O melhor aluno(a) é <strong>${melhorAluno}</strong> com a média <strong>${melhorMedia}</strong>`
        }
    }

    nome.value = ""; 
    nota1.value = ""; 
    nota2.value = "";
    nome.focus();

}
