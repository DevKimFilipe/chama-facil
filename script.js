/* -------------------------------------------------------------------
   TEMA CLARO / ESCURO
   ------------------------------------------------------------------- */
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const escuro = document.body.classList.contains("dark");
    themeButton.textContent = escuro ? "Modo diurno" : "Modo noturno";
    localStorage.setItem("tema-chama-facil", escuro ? "dark" : "light");
});

if (localStorage.getItem("tema-chama-facil") === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "Modo diurno";
}

/* -------------------------------------------------------------------
   FAQ 
   ------------------------------------------------------------------- */
document.querySelectorAll(".faq-pergunta").forEach(botao => {
    botao.addEventListener("click", () => {
        const resposta = botao.nextElementSibling;
        const estaAberta = resposta.classList.contains("aberta");

        resposta.classList.toggle("aberta", !estaAberta);
        botao.setAttribute("aria-expanded", String(!estaAberta));
    });
});

/* -------------------------------------------------------------------
   FORMULÁRIO DE CONTATO
   ------------------------------------------------------------------- */
const form = document.getElementById("contactForm");
const resultadoForm = document.getElementById("resultadoForm");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    resultadoForm.className = "";

    if (nome === "" || email === "" || mensagem === "") {
        resultadoForm.textContent = "Por favor, preencha todos os campos antes de enviar.";
        resultadoForm.classList.add("erro");
        return;
    }

    resultadoForm.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
    resultadoForm.classList.add("sucesso");

    form.reset();
});