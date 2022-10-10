<template>
    <body>
        <section class="sectioncartas">
            <div class="separador"></div>
            <h2 class="h2">
                <span class="bold">Zona Administrativa</span>
            </h2>
            <div class="cartas">
                <article class="articlecartas">
                    <img src="../../src/assets/images/categoria1.jpg"/>
                    <h3 class="h3 bold centrar">Categorias</h3>
                    <p>Aqui podras agregar, ver, editar y eliminar los categorias.</p>
                    <div class="contactar">
                        <a class="bold"><router-link to="/iniciocategorias">Ir a Categorias</router-link></a>                        
                    </div>
                </article>
                <article class="articlecartas">
                    <img src="../../src/assets/images/producto.jpg"/>
                    <h3 class="h3 bold centrar">Productos</h3>
                    <p>Aqui podras agregar, ver, editar y eliminar los productos.</p>
                    <div class="contactar">
                        <a class="bold" ><router-link to="/inicioproductos">Ir a Productos</router-link></a>                        
                    </div>
                </article>   
                <article class="articlecartas">
                    <img src="../../src/assets/images/restaurante.jpg"/>
                    <h3 class="h3 bold centrar">Restaurantes</h3>
                    <p>Aqui podras agregar, ver, editar y eliminar los restaurantes.</p>
                    <div class="contactar">
                        <a class="bold" ><router-link to="/iniciorestaurantes">Ir a Restaurantes</router-link></a>                        
                    </div>
                </article>  
                <article class="articlecartas">
                    <img src="../../src/assets/images/cliente.jpg"/>
                    <h3 class="h3 bold centrar">Clientes</h3>
                    <p>Aqui podras agregar, ver, editar y eliminar los clientes.</p>
                    <div class="contactar">
                        <a class="bold" ><router-link to="/inicioclientes">Ir a Clientes</router-link></a>                        
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