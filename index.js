
function exibirCategoria(Categoria) {
    //alert(Categoria)
    let elementos = document.getElementsByClassName('box_produtos');
    for (var i = 0; i < elementos.length; i++) {
        if (Categoria == elementos[i].id)
            elementos[i].style = "display:block";
        else
            elementos[i].style = "display:none";
    }
}

let exibirTodos = () => {
    let elementos = document.getElementsByClassName('box_produtos');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style = "display:block";

    }
};

function destaque(obj, size){
    obj.style.width = size
};

function mudarFonte(obj, size){
    obj.style.fontSize = size ;

}

//mouseover	quando o cursor do mouse é movido para sobre algum elemento.
//mouseout	quando o cursor do mouse se move para fora dos limites de um elemento.