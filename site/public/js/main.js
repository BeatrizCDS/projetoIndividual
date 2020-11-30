var myAudio = document.getElementById("myAudio");
var musica1 = document.getElementById("musica1");
var musica2 = document.getElementById("musica2");
var musica3 = document.getElementById("musica3");
var musica4 = document.getElementById("musica4");
var musica5 = document.getElementById("musica5");
var musica6 = document.getElementById("musica6");
var musica7 = document.getElementById("musica7");
var musica8 = document.getElementById("musica8");
var musica9 = document.getElementById("musica9");
var musica10 = document.getElementById("musica10");
var isPlaying = false;

function tocar() {
    if (isPlaying) {
        myAudio.pause()
    }
    else {
        myAudio.play();
    }
};
myAudio.onplaying = function () {
    isPlaying = true;
};
myAudio.onpause = function () {
    isPlaying = false;
};
// musica 1
function tocar1() {
    musica1.play();
}

function parar1() {
    musica1.currentTime = 0;
    musica1.pause()
}

//    musica 2 
function tocar2() {
    musica2.play();
}

function parar2() {
    musica2.currentTime = 0;
    musica2.pause()
}

//    musica 3 
function tocar3() {
    musica3.play();
}

function parar3() {
    musica3.currentTime = 0;
    musica3.pause()
}
//    musica 4
function tocar4() {
    musica4.play();
}

function parar4() {
    musica4.currentTime = 0;
    musica4.pause()
}
//    musica 5 
function tocar5() {
    musica5.play();
}

function parar5() {
    musica5.currentTime = 0;
    musica5.pause()
}
//    musica 6 
function tocar6() {
    musica6.play();
}

function parar6() {
    musica6.currentTime = 0;
    musica6.pause()
}
//    musica 7
function tocar7() {
    musica7.play();
}

function parar7() {
    musica7.currentTime = 0;
    musica7.pause()
}
//    musica 8
function tocar8() {
    musica8.play();
}

function parar8() {
    musica8.currentTime = 0;
    musica8.pause()
}
//    musica 9 
function tocar9() {
    musica9.play();
}

function parar9() {
    musica9.currentTime = 0;
    musica9.pause()
}

//    musica 10 
function tocar10() {
    musica10.play();
}

function parar10() {
    musica10.currentTime = 0;
    musica10.pause()
}
function circuloInfo1() {
    divMens.innerHTML = `<h3 style="color:#ce4257;font-size: 20px;">Teatro <i>A megera domada</i></h3><br>
                        <p>Tudo começou em 2017 quando estava no 1° do ensino médio. Houve um projeto que envolveria alunos do 1° ao 3° ano, a peça era A Megera Domada de Shakespeare</p>
                        <br>
                        <p>Interpretei nessa peça o personagem Hortêncio, um caipira amigo de Petrucchio(protagonista junto de Catarina) que tocava alaúde. Então pensei: "Por que não entro com um violão e toco em tal cena?", então quis aprender uma música e tive aulas de violão com um vizinho, peguei um violão emprestado com um amigo e fiz as aulas</p>
                        <br>
                        <p>No final das contas, não apresentamos a peça e eu continuei com as aulas, e no final daquele ano comprei um violão.</p>`
    divMens.style = "display:block;"
    divMens.style = "margin-left:3%;"
}
function circuloInfo2() {
    divMens.innerHTML = `<h3 style="color:#ce4257;font-size: 20px;">Escola RodrigueSom</h3><br>
                        <p>No ano seguinte entrei em uma escola que tinha acabado de ser inaugurada, e lá aprendi além de música e teoria musical a importância da persistência, paciência e dedicação</p>
                        <br>
                        <p>Estudei por dois anos e tive as melhores aulas com um professor e também maestro de uma orquestra chamado José Eduardo d'Alcantara. Sabia conduzir uma aula como qualquer maestro conduz uma orquestra.</p>
                        <br>
                        <p>Infelizmente em março/2020 a escola fechou por conta de não estar conseguindo se manter pois grande parte dos alunos saíram. Deixou saudades mas me agregaram e muito e os levarei no coração.</p>`
    divMens.style = "display:block;"
    divMens.style = "margin-left:3%;"
}
function circuloInfo3() {
    divMens.innerHTML = ` <h3 style="color:#ce4257;font-size: 20px;">Daqui pra frente...</h3><br>
                        <p>Em 2018 ainda ganhei um ukulelê tenor de aniversário, era algo que eu queria muito pois enxergo nesse instrumento uma sensação de paz, pureza e tranquilidade.</p>
                        <br>
                        <p>Hoje em dia possuo esses dois instrumentos, e eles me ajudaram em momentos difíceis e fizeram parte de momentos felizes, e me ajudaram a aumentar a auto confiança e autoestima.</p>`
    divMens.style = "display:block;"
    divMens.style = "margin-left:3%;"
}
var nomeU = document.getElementById("inpCadastro1")
var emailU = document.getElementById("inpCadastro2")
var emailConfU = document.getElementById("inpCadastro3")
var senhaU = document.getElementById("inpCadastro4")
var senhaConfU = document.getElementById("inpCadastro5");
// var musica10 = document.getElementById("musica10");

function cadastrar(){


    if(emailU!=emailConfU){
        alert("O email não confere com o digitado no primeiro campo");
    }
    else if(senhaU!=senhaConfU){
        alert("A senha não confere com a digitada no campo acima");
    }
        else if(emailU==emailConfU && senhaU==senhaConfU){
         
        }
}