<template>
    <div class="contactar">
        <a class="bold"><router-link to="/iniciocategorias">Atras</router-link></a>                      
    </div>
  <div id="main-container">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tr v-for="categoria in categorias" :key="categoria.id">
        <td>{{ categoria.id }}</td>
        <td>{{ categoria.nombre }}</td>
        <td>
          <div>
            <input class="editar" type="button" @click.prevent="editar(categoria.id)" value="Editar">
            <input class="eliminar" type="button" @click.prevent="eliminarcategoria(categoria.id)" value="Borrar">
          </div>
        </td>
      </tr>
    </table>
  </div>
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
    methods: {
        eliminarcategoria(id) {
            if(window.confirm("Realmente desea eliminar este categoria?")) {
                fetch("https://62b52002da3017eabb151779.mockapi.io/categoria/" + id, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);        
                    this.$router.push("/iniciocategorias");
                });
            }
        },
        editar(id){
            this.$router.push('/editarcategoria/' + id);
        },
    }
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
#main-container {
    margin: 25px auto;
    width: 90%;
    font-family: Arial;
}
table{
	background-color: white;
	text-align: left;
	border-collapse: collapse;
	width: 100%;
}
th, td{
	padding: 20px;
}
thead{
	background-color: var(--colorsecundario);
	border-bottom: solid 5px var(--colornegro);
	color: white;
}
tr:nth-child(even){
	background-color: #ddd;
}
tr:hover td{
	background-color: var(--colorsecundario);
	color: white;
}
.editar {
  background-color: var(--colorsecundario);
  border: none;
  padding: 10px 20px;
  margin-bottom: 3px;
  color: var(--colorblanco);
  border-radius: 18px;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid var(--colorblanco);
}
.eliminar {
  background-color: #C85C5C;
  border: none;
  padding: 10px 19px;
  margin-bottom: 3px;  
  color: var(--colorblanco);
  border-radius: 18px;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid var(--colorblanco);
}

.editar:hover{
  background-color: var(--colorblanco);
  color: #246355;
  font-weight: bold;
  border: 2px solid #246355;
}
.eliminar:hover {
  background-color: var(--colorblanco);
  color: #C85C5C;
  font-weight: bold;
  border: 2px solid #C85C5C;
}
</style>