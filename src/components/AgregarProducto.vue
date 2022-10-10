<template>
  <body>
    <section>
      <article>
        <form class="formulario" @submit.prevent="agregar">
          <div class="form">
            <h3 class="bold">Agregar Producto</h3>
            <input class="bold" type="text" v-model="producto.nombre" placeholder="Nombre del producto" required />
            <textarea class="bold" cols="55" rows="7" type="text" v-model="producto.descripcion" placeholder="Descripción del producto" required></textarea>
            <input class="bold" type="number" v-model="producto.precio" placeholder="Precio del producto" required />
            <div class="enviar">
                <input type="submit" value="Agregar">
                <input type="button" @click.prevent="salir()" value="Salir">
            </div>
          </div>
        </form>
      </article>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      producto: {
        nombre: "",
        descripcion: "",
        precio: 0,       
      },
    };
  },
  methods: {
    agregar(event) {
      fetch('https://62b52002da3017eabb151779.mockapi.io/producto/', {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(this.producto),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);        
        alert("Producto Agregrado satisfactoriamente!");
        this.$router.push("/listaproductos");
      });
    },
    salir(){
        this.$router.push("/inicioproductos");
    },
  },
};
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
/*Formulario*/
.formulario {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 45px 10px;
}
.form {
    width: 400px;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.30);
    -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.30);
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.30);
    padding: 20px;
}
.form h3 {
    font-family: var(--fuenteprimaria);
    font-size: 30px;
}
.form input {
    width: 90%;
    margin: 60px 0;
    border: none;
    border-bottom: 2px solid #dddddd;
    outline: none;
    padding: 10px;
}
.form textarea {
    width: 90%;
    margin: 60px 0;
    border: none;
    border: 2px solid #dddddd;
    outline: none;
    padding: 10px;
}
::placeholder {
    font-size: 16px;
    font-family: var(--fuenteprimaria);
}
.form input:hover{
    outline: none;
    border-bottom: 2px solid var(--colornegro);
}
.form textarea:hover{
    outline: none;
    border: 2px solid var(--colornegro);
}
.enviar input:hover {
    background-color: var(--colorsecundario);
    border: none;
    cursor: pointer;
}
.enviar input{
    text-decoration: none;
    color: var(--colorblanco);
    font-family: var(--fuenteprimaria);
    font-size: 25px;
    background-color: var(--colorrojo2);
    border: none;
    margin: 3px;
}
</style>