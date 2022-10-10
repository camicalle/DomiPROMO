<template>
  <body>
    <section class="sectionindex">
      <article>
        <div class="separador"></div>
        <h2 class="h2">Que es <span class="bold">DomiPROMO</span></h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui suscipit
          labore, porro ipsum distinctio omnis facere impedit culpa
          exercitationem in mollitia fugit, quidem ea. Harum, nihil illo dolore
          accusamus ullam, quidem vero mollitia laborum aut quo repudiandae
          similique obcaecati vel amet odit culpa adipisci voluptate dolorem
          voluptatum rerum est iure optio odio! Cum magnam commodi, fuga
          repellat debitis eveniet sequi praesentium est, mollitia reprehenderit
          possimus libero obcaecati, voluptas dicta? Commodi error voluptatum
          dolor excepturi, vitae eaque distinctio facilis eum. Placeat, odit?
          Omnis minima vero recusandae quaerat reiciendis perferendis, corporis
          laudantium commodi, aliquid unde nihil laboriosam, quidem nam optio
          aut tempore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellendus hic voluptatum optio deleniti! Inventore, blanditiis
          commodi numquam aliquid, quo asperiores, voluptatibus eveniet error
          suscipit impedit rerum perspiciatis quod recusandae at delectus modi
          nobis cumque debitis deleniti voluptas. Explicabo, ipsum vel eligendi
          deleniti quo veniam sunt eius corporis aspernatur soluta ipsa eum,
          officiis sapiente repellendus nisi dolorum voluptates error cupiditate
          autem! Perferendis odit adipisci quis ut esse reprehenderit iure
          distinctio ab quae, aliquid sunt aut magnam, velit impedit vitae
          architecto mollitia. Corrupti, explicabo, hic dignissimos officiis
          distinctio, aliquid laborum sapiente iure consectetur ut reprehenderit
          possimus! Dolores fugit aliquid sapiente rerum voluptates. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, magnam
          neque veniam accusamus doloremque voluptatum maxime corporis
          temporibus qui eligendi, doloribus, veritatis reprehenderit. Ullam,
          consequatur vero? Error hic dolorem rem! Non hic quia quis quos,
          blanditiis voluptas sequi! Atque quae, praesentium esse harum
          cupiditate pariatur odio nesciunt animi nihil error vel deserunt!
          Obcaecati aspernatur sit nisi asperiores mollitia exercitationem, fuga
          perspiciatis quod, quo esse, sunt accusantium iure beatae consectetur!
          Odit at expedita hic distinctio quidem facere nisi rerum architecto
          cumque similique est magnam nostrum dolor ab, aliquid impedit
          aspernatur minus, mollitia odio consequuntur possimus autem ducimus
          eligendi libero? Esse, architecto.
        </p>
      </article>
    </section>
    <section class="sectioncartas">
      <div class="separador"></div>
      <h2 class="h2">
        Lo que puedes lograr con <span class="bold">DomiPROMO</span>
      </h2>
      <div class="cartas">
        <article class="articlecartas">
          <img src="../../src/assets/images/darteaconocer.jpg" alt="darteaconocer" />
          <h3 class="h3 bold centrar">Darte a conocer</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolor
            impedit voluptas corrupti repellat officiis obcaecati, nesciunt sit
            omnis ea tenetur debitis ut, quaerat, dicta sapiente iusto nihil
            suscipit consequatur.
          </p>
        </article>
        <article class="articlecartas">
          <img src="../../src/assets/images/serviciooproducto.png" alt="serviciooproducto" />
          <h3 class="h3 bold centrar">Mostrar lo que ofreces</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolor
            impedit voluptas corrupti repellat officiis obcaecati, nesciunt sit
            omnis ea tenetur debitis ut, quaerat, dicta sapiente iusto nihil
            suscipit consequatur.
          </p>
        </article>
        <article class="articlecartas">
          <img src="../../src/assets/images/consiguemasclientes.jpg" alt="consiguemasclientes" />
          <h3 class="h3 bold centrar">Conseguir mas clientes</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolor
            impedit voluptas corrupti repellat officiis obcaecati, nesciunt sit
            omnis ea tenetur debitis ut, quaerat, dicta sapiente iusto nihil
            suscipit consequatur.
          </p>
        </article>
      </div>
    </section>
  </body>
</template>

<style>
/*Globales*/
:root {
    --colorprimario: #F1DDBF;
    --colorsecundario: #525E75;
    --colorterciario: #78938A;
    --colorcuarterno: #78938A;
    --colornegro: #000000;
    --colorblanco: #ffffff;
    --colorgris: #eeeeee;
    --colorrojo: #F32424;
    --colorrojo2: #B22727;
    --fuenteprimaria: 'PT Sans', sans-serif;
    --fuentesecundaria: 'Open Sans', sans-serif;
}
*, body {
    padding: 0;
    margin: 0;
}
.separador {
    width: 60px;
    height: 15px;
    margin: 50px auto;
    background-color: var(--colorrojo2);    
    border-radius: 25px;
}
.bold {
    font-weight: 700;
}
/*Index*/
.sectionindex{ 
    margin: 20px;
}
.sectionindex p {
    margin: 40px 30px;
    font-family: var(--fuentesecundaria);
    text-align: justify;
    font-size: 19px;
}
.h2 {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 35px;
    font-family: var(--fuenteprimaria);
}
.cartas {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 50px; 
}
.articlecartas {
    width: 320px;
    -webkit-box-shadow: 0px 3px 11px -1px rgba(0,0,0,1);
    -moz-box-shadow: 0px 3px 11px -1px rgba(0,0,0,1);
    box-shadow: 0px 3px 11px -1px rgba(0,0,0,1);
    margin: 20px 10px;    
    border-radius: 5px;   
}
.articlecartas img {
    width: 100%;
}
.articlecartas p {
    font-size: 15px;
    font-family: var(--fuentesecundaria);
    text-align: justify;
    padding: 0 20px 20px 20px;
}
.articlecartas h3{
    padding: 10px;
}
</style>