const listaPosts = [
{
    titulo: "Título do Post",
    descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, accusantium? Dignissimos quis",
    imgUrl:"./img/dog.jpg"
},
{
    titulo: "Título do Post",
    descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, accusantium? Dignissimos quis",
    imgUrl:"./img/dog.jpg"
},
{
    titulo: "Título do Post",
    descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, accusantium? Dignissimos quis",
    imgUrl:"./img/dog.jpg"
},
{
    titulo: "Título do Post",
    descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, accusantium? Dignissimos quis",
    imgUrl:"./img/dog.jpg"
},
{
    titulo: "Título do Post",
    descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, accusantium? Dignissimos quis",
    imgUrl:"./img/dog.jpg"
}
];

var container = document.querySelector(".container");

listaPosts.forEach((elemento) =>{
    let card = 
        `<div class="card">
            <div class="card-img">
            <figure>
                <img
                src="${elemento.imgUrl}"
                alt="imagem de um cachorro"
                width="300px"
                />
            </figure>
            </div>
            <div class="card-conteudo">
            <h2>${elemento.titulo}</h2>
            <p>
                ${elemento.descricao}
            </p>
            <a href="">Ver Mais!</a>
            </div>
        </div>`
  container.innerHTML += card;
})