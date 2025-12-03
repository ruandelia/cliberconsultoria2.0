const linksLogin  = document.querySelectorAll('.login-cadastrar-tablet')
const linksAreaExclusiva = document.querySelectorAll('.area-exclusiva')
const ativa = true

if(ativa == true){
    linksLogin.forEach((link) => {
        link.classList.remove('displayNone')
    })
} else{
    linksAreaExclusiva.forEach((link) => {
        link.classList.remove('displayNone')
    })
}