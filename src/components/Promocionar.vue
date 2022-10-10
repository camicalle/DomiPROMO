<template>
  <body>
    <section class="sectioncartas">
      <article>
        <div class="separador"></div>
        <h2 class="h2">
          Nuestros <span class="bold">Planes | Contratanos</span>
        </h2>
        <div class="planes">
          <article class="plan">
            <h3 class="h3 bold centrar">Plan Bronce</h3>
            <div class="divplan">
              <img src="../../src/assets/images/planbronce.jpg" alt="plan1" />
            </div>
            <div class="parraplan">
              <div>
                <li>Lorem ipsum dolor sit.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
              <div>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Velit, nobis.
                </li>
              </div>
              <h3 class="h3 bold centrar">80.000 COP</h3>
              <div class="comunicarw">
                <a
                  target="_blank"
                  href="#"
                >
                  <span>Contactar</span>
                </a>
              </div>
            </div>
          </article>
          <article class="plan">
            <h3 class="h3 bold centrar">Plan Oro</h3>
            <div class="divplan">
              <img src="../../src/assets/images/planoro.jpg" alt="plan2" />
            </div>
            <div class="parraplan">
              <div>
                <li>Lorem ipsum dolor sit.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
              <div>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Velit, nobis.
                </li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </div>
              <h3 class="h3 bold centrar">240.000 COP</h3>
              <div class="comunicarw">
                <a
                  target="_blank"
                  href="#"
                >
                  <span>Contactar</span>
                </a>
              </div>
            </div>
          </article>
          <article class="plan">
            <h3 class="h3 bold centrar">Plan Plata</h3>
            <div class="divplan">
              <img src="../../src/assets/images/planplata.jpg" alt="plan3" />
            </div>
            <div class="parraplan">
              <div>
                <li>Lorem ipsum dolor sit.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
              <div>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Velit, nobis.
                </li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </div>
              <div>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </div>
              <h3 class="h3 bold centrar">150.000 COP</h3>
              <div class="comunicarw">
                <a
                  target="_blank"
                  href="#"
                >
                  <span>Contactar</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </article>
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
.centrar {
    text-align: center;
}
.h2 {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 35px;
    font-family: var(--fuenteprimaria);
}
/*Promocionar*/
.planes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px;    
}
.plan {
    width: 320px;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.50);
    -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.50);
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.50);
    margin: 20px 2px;
    border-radius: 70px;
}
.divplan {
    display: flex;
    justify-content: center;
}
.divplan img {
    width: 60%;
    margin: 5px 0 10px 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
}
.parraplan li {
    font-size: 17px;
    font-family: var(--fuentesecundaria);
    margin: 15px 0;
    list-style: square;
}
.plan h3{
    padding: 30px 0;
    font-size: 30px;
}
.parraplan{
    padding: 0 20px 50px 20px;
}
.comunicarw {
    text-align: center;
}
.comunicarw a{
    margin: 0 auto;
    font-size: 17px; 
    color: var(--colorrojo2);
    text-decoration: none;    
    border: 2px solid var(--colorrojo2);   
    padding: 5px 25px;
    border-radius: 20px;
    font-size: 21px;
    font-family: var(--fuenteprimaria);
    font-weight: 700;
}
.comunicarw svg {
    width: 24px;
}
.comunicarw a:hover {
    color: var(--colorblanco);
    background-color: var(--colorrojo2);
}
</style>