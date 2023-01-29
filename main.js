function digitar(x){
    var outro = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = outro + x;
}
function limpar(){
    document.querySelector('.tela').innerHTML = "";
}
function voltar(){
    var apaga = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = apaga.substring(0, apaga.length -1);   
}
function tempo(){
    setTimeout(window.location.reload(), 5000);
}

function resolver(){
    var calculo = document.querySelector('.tela').innerHTML;
    if(calculo){
        document.querySelector('.tela').innerHTML = eval(calculo);
    }
    else{
        document.querySelector('.tela').innerHTML = "<p style='font-size:15px;'>Digite um numero</p>";
        tempo();    
    }
}

//ju