<template>
    <div class="contactar">
        <a class="bold"><router-link to="/inicioclientes">Atras</router-link></a>                      
    </div>
  <div id="main-container">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Direccion</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tr v-for="cliente in clientes" :key="cliente.id">
        <td>{{ cliente.id }}</td>
        <td>{{ cliente.nombre }}</td>
        <td>{{ cliente.direccion }}</td>
        <td>{{ cliente.telefono }}</td>
        <td>{{ cliente.correo }}</td>
        <td>
          <div>
            <input class="editar" type="button" @click.prevent="editar(cliente.id)" value="Editar">
            <input class="eliminar" type="button" @click.prevent="eliminarcliente(cliente.id)" value="Borrar">
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
            clientes: [],
        };
    },
    created() {
        fetch("https://62b52002da3017eabb151779.mockapi.io/cliente")
        .then((response) => response.json())
        .then((data)=> (this.clientes = data))
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {
        eliminarcliente(id) {
            if(window.confirm("Realmente desea eliminar este cliente?")) {
                fetch("https://62b52002da3017eabb151779.mockapi.io/cliente/" + id, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);        
                    this.$router.push("/inicioclientes");
                });
            }
        },
        editar(id){
            this.$router.push('/editarcliente/' + id);
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