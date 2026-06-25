const themeButton =
document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark"
    );

});

document
.querySelectorAll(".faq-question")
.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
        button.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }else{
            answer.style.display = "block";
        }

    });

});

const form =
document.getElementById("contactForm");

form.addEventListener("submit", e => {

    e.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const email =
    document.getElementById("email").value;

    const mensagem =
    document.getElementById("mensagem").value;

    if(
        nome === "" ||
        email === "" ||
        mensagem === ""
    ){
        alert(
            "Preencha todos os campos."
        );
        return;
    }

    alert(
        "Mensagem enviada com sucesso!"
    );

    form.reset();

});