<template>
    <body>
        <section>
            <article>
                <form action="#" class="formulario" @submit.prevent="login">
                    <div class="form">
                        <h3 class="bold">Formulario</h3>
                        <input class="bold" type="email" v-model="email" placeholder="Correo Electronico" required />
                        <input class="bold" type="password" v-model="password" placeholder="Contraseña" required />
                        <div class="enviar">
                            <input type="submit" value="Iniciar Sesión">
                        </div>
                    </div>
                </form>
            </article>
        </section>
        <div  class="alert alert-danger d-flex align-items-center" role="alert" v-if="error">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                {{ error }}
        </div>
    </div>
    </body>
</template>

<script>
import { db } from "@/firebaseDb";
import firebase from "firebase";

export default {
    data(){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    name: 'Login',
    methods: {
        login(){
            if(this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
		        .then(user => {
				this.$router.push({name: 'paginaadmin'})
                alert('Inicio de Sesión Exitoso!')
			}).catch(err => {
				this.error = err.message
			})		            
            }else{
                this.error = 'Todos los campos son requeridos'
            }            
        }
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