//Galeria de Imagens -> DOM

let uploadInput = document.getElementById("upload");
let addButton = document.getElementById("addImage");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

//upload das Imagens
let imagens = [];

addButton.addEventListener(
    "click", ()=>{
        //para pegar imagens do computador(local)
        // let file = uploadInput.file[0];
        // if(file){
        //     let reader = new FileReader();
        //     reader.onload = function (e){
        //         let imageUrl = e.target.result;
        //         imagens.push(imageUrl);
        //     }
        // }
        imagemUrl = uploadInput.value.trim();
        if(imagemUrl==="") return ;
        imagens.push(imagemUrl);
        atualizarGaleria();
        atualizarCarrossel();
        uploadInput.value = "";
    });

//atualizarGaleria
function atualizarGaleria(){
    galeria.innerHTML = "";
    imagens.forEach(
        (imagem,index)=>{
            const container = document.createElement("div");
            container.classList.add("imagem-container");

            const img = document.createElement("img");
            img.src = imagem;
            //criar botão para remover imagem
            const removeBtn = document.createElement("button");
            removeBtn.innerHTML = "X";
            removeBtn.classList.add("remove");
            removeBtn.addEventListener("click", ()=>{
                imagens.splice(index,1);
                atualizarGaleria();//recursão
                atualizarCarrossel();
            });
            container.appendChild(img);
            container.appendChild(removeBtn);
            galeria.appendChild(container);
        }
    );
}

//atualizar Carrossel
function atualizarCarrossel(){
    carrossel.innerHTML = "";
    imagens.forEach(imagem =>{
        let img = document.createElement("img");
        img.src = imagem;
        carrossel.appendChild(img);
    });

    iniciarCarrossel();
}

//iniciar Carrossel

function iniciarCarrossel(){
    if(imagens.length > 0){
        let index = 0;

        setInterval(() =>{
            index = (index+1)%imagens.length;
            carrossel.style.transform = `translateX('+(index *100)+'}%)`;
        }, 2000);
    }
}