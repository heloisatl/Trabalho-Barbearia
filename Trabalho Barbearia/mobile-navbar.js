class MobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(){
        // console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    animateLinks(){
        //console.log(index / 7 + 0.3); pegamos o indice e o transformamos em milissegundos para dividirmos pela velocidade da animação

        this.navLinks.forEach((link, index) => {
            
            link.style.animation    
                ?(link.style.animation = "")
                :(link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`);
                // Se existe animação em forma de link ele tira, se não existe ele adiciona.
        });
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);

    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

// Função para abrir o modal
function abrirModal() {
    document.getElementById("modalLogin").style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("modalLogin").style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modalLogin");
    if (event.target === modal) {
        fecharModal();
    }
}

// Lógica do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Simples validação de usuário e senha
    if (usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
        fecharModal();
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});
