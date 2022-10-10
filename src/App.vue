<template>
  <div>
    <header>
        <div class="header__div">
            <h1><a class="ah1" href="/">Domi<span class="bold">PROMO</span></a></h1>
            <nav class="navegacion">
                <li class="navegacion__enlace"><a href="/">Inicio</a></li>
                <li class="navegacion__enlace"><a href="/categorias">Categorias</a></li>
                <li class="navegacion__enlace"><a href="/productos">Productos</a></li>
                <li class="navegacion__enlace"><a href="/restaurantes">Restaurantes</a></li>
                <li class="navegacion__enlace"><a href="/formulario">Formulario</a></li>
                <li class="navegacion__enlace">
                    <a href="/promociona" class="abotonpromo">
                        <span class="botonpromo">Promociona</span>
                    </a>
                </li>
            </nav>
        </div>
    </header>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
  <footer>
        <div class="informacion">
            <div class="informacionrelevante">
                <h3 class="h3 bold">Información Adicional</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam corrupti porro doloremque
                    impedit saepe recusandae nulla, minus excepturi iusto officia quod asperiores ipsum error modi
                    consequatur magnam repudiandae fugit.</p>
            </div>
            <div class="redessociales">
                <h3 class="h3 bold centrar">Redes Sociales</h3>
                <div class="iconos">
                    <img src="../src/assets/images/facebook.png" alt="facebook">
                    <img src="../src/assets/images/twitter.png" alt="twitter">
                    <img src="../src/assets/images/whatsapp.png" alt="whatsapp">
                    <img src="../src/assets/images/instagram.png" alt="instagram">
                </div>
            </div>
        </div>
        <div class="copy">
            <p class="parrafofooter bold">Todos los Derechos Reservados a DomiPROMO</p>
        </div>
    </footer>   
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

/*Header*/
header {
    background-image: url(../src/assets/images/banner.jpg);  
    background-size: cover;
    height: 450px;  
}
.header__div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: var(--colorblanco);
    padding: 20px;
    opacity: 0.6;
}
h1, h2, h3, h4 {    
    font-family: var(--fuenteprincipal);
    font-weight: 400;
}
h1 {        
    font-size: 35px;
}
.ah1 {
    text-decoration: none;
    color: var(--colornegro);
}

/*Navegacion*/
.navegacion {    
    list-style: none;     
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    line-height: 2.3;
    padding: 0 25px;
}
.navegacion__enlace a{
    font-size: 17px; 
    padding: 5px 15px;
    color: var(--colornegro); 
    text-decoration: none;  
    font-family: var(--fuentesecundaria);  
}
.abotonpromo {
    border: 2px solid var(--colorrojo2);
    border-radius: 25px;
}
.botonpromo {
    color: var(--colorrojo2);
}
.abotonpromo:hover {
    background-color: var(--colorgris);
    border: 2px solid var(--colorrojo);
}
@media (max-width: 740px) {
    .header__div {
        display: flex;
        justify-content: center;
    }
}

/*Footer*/
footer {
    background-image: url(../src/assets/images/banner2.jpg);
    background-size: cover;
}
.copy {
    background-color: var(--colorblanco);    
    padding: 20px;
    opacity: 0.6;
}
.parrafofooter {
    font-size: 17px;
    font-family: var(--fuentesecundaria);
}
.informacion {
    padding: 25px;
    background-color: var(--colorblanco);
    opacity: 0.8;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;    
}
.informacionrelevante, .redessociales {
    width: 350px;
    padding: 10px 0;
}
.h3 {
    font-family: var(--fuenteprimaria);
    font-size: 20px;
}
.centrar {
    text-align: center;
}
.informacionrelevante p{
    font-family: var(--fuentesecundaria);
    font-size: 14px;
    text-align: justify;
}
.iconos {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
}
.iconos img {
    width: 40px;
    padding: 10px;
}
</style>
