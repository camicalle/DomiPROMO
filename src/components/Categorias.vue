<template>
  <body>
    <section>
      <div class="separador"></div>
      <h3 class="tcategorias bold">Categorias</h3>
      <div class="categorias">
        <article class="categoria" v-for="categoria in categorias" :key="categoria.id">
          <img src="../../src/assets/images/categoria.jpg">
          <a href="#">
            <h3 class="nombrec">{{ categoria.nombre }}</h3>
          </a>
        </article>
      </div>
    </section>
  </body>
</template>

<script>
export default {
    data() {
        return {
            categorias: [],
        };
    },
    created() {
        fetch("https://62b52002da3017eabb151779.mockapi.io/categoria")
        .then((response) => response.json())
        .then((data)=> (this.categorias = data))
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
/*Categorias*/
.tcategorias {
    text-align: center;
    font-size: 35px;
    font-family: var(--fuenteprimaria);
}

.categorias {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 40px 0;
}
.categoria {
    width: 200px;
    text-align: center;
    margin: 20px 50px;
}
.categoria img{
    width: 100%;
    border-radius: 50%;
    margin: -20px;
    border: 2px solid var(--colorsecundario);
}
.categoria a{
    text-decoration: none;
}
.nombrec {
    background-color: var(--colorsecundario);
    color: var(--colorblanco);
    padding: 10px 0;
    font-size: 24px;
    font-family: var(--fuenteprimaria);
}
.nombrec:hover {
    background-color: var(--colorrojo2);
}
</style>