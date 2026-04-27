/*
https://docs.google.com/document/d/1CZsIf1mvf7AmKlEgkFDRuZ1Q0MyAyzJL41ePH_O2MuM/edit?tab=t.0#heading=h.jr8o7s572w9v
*/

const usuario = 'admin'
const password = 'qwerty123'

let usuarioSolicitado = prompt("Indicar usuario")
let passwordSolicitado = prompt("Indicar password")

if (usuario == usuarioSolicitado && password == passwordSolicitado) {
    console.log("Acceso concedido")
} else {
    console.log("Nombre de usuario o contraseña inválidos")
}