codigoHTML = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcard</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <main>
        <section id="container">
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é JavaScript?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O JavaScript é uma linguagem de programação</p>
                    </div>
                </div>
            </article>
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é CSS?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O CSS é uma lingugem de estilização</p>
                    </div>
                </div>
            </article>
        </section>
    </main>
    <footer>
        <p>Projeto desenvolvido pela Alura, sem fins lucrativos</p>
    </footer>    
</body>
</html>`

const codigoFonte = {
    body:{
        "background": "assets/img/bg-desktop-blue.webp",
        "font-family": "Bai Jamjuree",
        "--text-color" : "#DBE4EF",
        "--card-front-color" : "#144480",
        "--card-back-color" : "#00F4BF"
    },
    ".cartao__conteudo":{
        "background-color": "var(--card-front-color)",
        "text-align": "center",
        "height": "100%"
    },
    "#container":{
        "display": "flex",
        "flex-wrap": "wrap"
    },
    ".cartao":{
        "margin": "1rem 1rem",
        "height": "20rem",
        "flex-grow": "1",
        "flex-basis": "calc(33% - 6rem)",
    },
    ".cartao__conteudo h3":{
        "color": "var(--text-color)",
        "border": "1px solid var(--text-color)",
        "text-align": "left",
        "padding": "0.5rem",
        "position": "absolute",
        "margin": "0.6rem",
        "border-radius": "0.6rem",
        "font-size": "1vw"
    },
    ".cartao__conteudo p": {
        "padding": "4rem"
    },
    ".cartao__conteudo__pergunta p":{
        "color": "var(--text-color)",
        "font-weight": "500"
    },    
    ".cartao__conteudo__resposta p":{
        "color": "var(--card-back-color)",
        "font-weight": "700"
    },
    "footer":{
        "background-color": "black",
        "color": "white",
        "position": "fixed",
        "bottom": "0",
        "width": "100%",
        "height": "2rem"
    },    
    "footer p":{
        "text-align": "center",
        "font-size": "0.6rem",
        "margin-top": "0.5rem"
    }
}

const importFonts = {
    "Bai Jamjuree" : "@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap');",
    "Josefin Sans" : "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');",
    "Tomorrow" : "@import url('https://fonts.googleapis.com/css2?family=Tomorrow&display=swap');",
    "Grandstander" : "@import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap');",
    "Handjet" : "@import url('https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap');",
    "Niramit" : "@import url('https://fonts.googleapis.com/css2?family=Niramit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');",
    "Gluten" : "@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');"
}