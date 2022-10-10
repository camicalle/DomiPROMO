<template>
  <body>
    <section class="sectioncartas">
      <div class="separador"></div>
      <h2 class="h2">
        <span class="bold">Productos</span>
      </h2>
      <div class="cartas">
        <article class="articlecartas" v-for="producto in productos" :key="producto.id">
          <img src="../../src/assets/images/producto.jpg"/>
          <h3 class="h3 bold centrar">{{ producto.nombre }}</h3>
          <p>{{ producto.descripcion }}</p>
          <h3 class="h3 bold centrar">Precio: $ {{ producto.precio }}</h3>
          <div class="contactar">
            <a class="bold" href="/formulario">Contactar</a>
          </div>
        </article>
      </div>
    </section>
  </body>
</template>

<script>
export default {
    data() {
        return {
            productos: [],
        };
    },
    created() {
        fetch("https://62b52002da3017eabb151779.mockapi.io/producto")
        .then((response) => response.json())
        .then((data)=> (this.productos = data))
        .catch((error) => {
            console.log(error);
        })
    },
}
</script>

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
.contactar {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.contactar a{
    background-color: var(--colorcuarterno);
    padding: 10px;
    margin: 15px;
    color: var(--colorblanco);
    text-decoration: none;
    font-family: var(--fuenteprimaria);
}

</style>