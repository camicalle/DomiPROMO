<template>
    <body>
        <section class="sectioncartas">
            <div class="separador"></div>
            <h2 class="h2">
                <span class="bold">Pagina de Productos. Elija una opcion.</span>
            </h2>
            <div class="cartas">
                <article class="articlecartas">
                    <div class="divimg">
                        <img src="../../src/assets/images/agregar.png"/>
                    </div>
                    <h3 class="h3 bold centrar">Agregar Productos</h3>
                    <p>Aqui podras agregar los datos de un nuevo producto...</p>
                    <div class="contactar">
                        <a class="bold"><router-link to="/paginaadmin">Atras</router-link></a> 
                        <a class="bold"><router-link to="/agregarproducto">Agregar</router-link></a>                        
                    </div>
                </article>
                <article class="articlecartas">
                    <div class="divimg">
                        <img src="../../src/assets/images/lista.png"/>
                    </div>
                    <h3 class="h3 bold centrar">Listado de Productos</h3>
                    <p>Aqui podras ver, editar y eliminar los productos existentes...</p>
                    <div class="contactar">
                        <a class="bold"><router-link to="/paginaadmin">Atras</router-link></a> 
                        <a class="bold"><router-link to="/listaproductos">Ver</router-link></a>                         
                    </div>
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
.divimg {
    display: flex;
    justify-content: center;
    margin: 10px;
}
.divimg img {
    width: 60%;
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