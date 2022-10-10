<template>
  <body>
    <section>
      <article>
        <form action="#" class="formulario" @submit.prevent="formulariocli">
          <div class="form">
            <h3 class="bold">Formulario</h3>
            <input class="bold" type="text" v-model="cliente.nombre" placeholder="Escriba su nombre completo" required />
            <input class="bold" type="text" v-model="cliente.direccion" placeholder="Escriba su direccion" required />
            <input class="bold" type="text" v-model="cliente.telefono" placeholder="Escriba su telefono" required />
            <input class="bold" type="email" v-model="cliente.correo" placeholder="Escriba el correo" required />
            <div class="enviar">
                <input type="submit" value="Enviar">
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
      cliente: {
        nombre: "",
        direccion: "",
        telefono: "",
        correo: "",        
      },
    };
  },
  methods: {
    formulariocli(event) {
      fetch('https://62b52002da3017eabb151779.mockapi.io/cliente/', {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(this.cliente),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);        
        alert("Cliente Agregrado satisfactoriamente!");
        this.$router.push("/");
      });
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
::placeholder {
    font-size: 16px;
    font-family: var(--fuenteprimaria);
}
.form input:hover{
    outline: none;
    border-bottom: 2px solid var(--colornegro);
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
}
</style>