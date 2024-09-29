const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    caixaPerguntas.textContent = "";
    perguntaAtual = perguntas[atual];
    const img = document.createElement("img");

    if(perguntaAtual.imagem != ""){
        img.src = perguntaAtual.imagem;
    }    

    const enunciado = document.createElement("div");
    enunciado.classList.add("titulo");
    enunciado.innerHTML = perguntaAtual.enunciado;

   
    
    if(perguntaAtual.imagem != ""){        
        if (perguntaAtual.posicaoImg == "top"){
            caixaPerguntas.appendChild(img);
            caixaPerguntas.appendChild(enunciado);
        }else{
            caixaPerguntas.appendChild(enunciado);
            caixaPerguntas.appendChild(img);
        }
    }else{
        caixaPerguntas.appendChild(enunciado);
    }
    
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.innerHTML = alternativa.texto;        
        
        if(alternativa.img != ""){
            const quebraLinha = document.createElement("br");
            botaoAlternativas.appendChild(quebraLinha);
            const imgAlternativa = document.createElement("img");
            imgAlternativa.src = alternativa.imgThumb;
            botaoAlternativas.appendChild(imgAlternativa);
        }         

        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa, alternativa.recompensa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada, recompensa){
    if (opcaoSelecionada.blocoCSS != "" && opcaoSelecionada.propriedadeCSS != "" && opcaoSelecionada.correta == true){ 
        codigoFonte[opcaoSelecionada.blocoCSS][opcaoSelecionada.propriedadeCSS] = opcaoSelecionada.valorPropriedadeCSS;
    }

    if(recompensa == true && opcaoSelecionada.correta == true){        
        const titulo = document.createElement("div");
        titulo.classList.add("titulo");
        titulo.innerHTML = opcaoSelecionada.afirmacao;
        caixaPerguntas.textContent = "";
        caixaPerguntas.appendChild(titulo);
        
        if(opcaoSelecionada.linguagem != ""){
            const pre = document.createElement("pre");
            const code = document.createElement("code");
            pre.classList.add(opcaoSelecionada.linguagem);
            code.classList.add(opcaoSelecionada.linguagem);
            code.textContent = opcaoSelecionada.textoRecompensa;
            pre.appendChild(code);
            caixaPerguntas.appendChild(pre);
            Prism.highlightElement(code);
        }else{
            const texto = document.createElement("div");
            texto.classList.add("titulo");
            texto.innerHTML = opcaoSelecionada.textoRecompensa;
            caixaPerguntas.appendChild(texto)
        }
        const botaoAvancar = document.createElement("button");
        botaoAvancar.addEventListener("click", () => respostaSelecionada(opcaoSelecionada, false));
        botaoAvancar.innerHTML = "<span>Ok, posso avançar agora!</span>"
        caixaAlternativas.textContent = "";
        caixaAlternativas.appendChild(botaoAvancar);
        return;
    }
    if (opcaoSelecionada.correta == false) {
        const titulo = document.createElement("h1");
        //titulo.classList.add("titulo");
        titulo.innerHTML = perguntaAtual.textoErrado;
        caixaPerguntas.textContent = "";
        caixaPerguntas.appendChild(titulo);

        const botaoAvancar = document.createElement("button");
        botaoAvancar.addEventListener("click", () => mostraPergunta());
        botaoAvancar.innerHTML = "<span>Ok, vou tentar novamente!</span>"
        caixaAlternativas.textContent = "";
        caixaAlternativas.appendChild(botaoAvancar);
        return;
    }
    if(perguntaAtual.mostraBlocoCSS == true){        
        const titulo = document.createElement("div");
        titulo.classList.add("titulo");
        titulo.innerHTML = "<img src='assets/img/recompensa.png' style='height:100px;' ><br/>Recompensa desbloqueada. Copie o código CSS abaixo e cole no seu arquivo style.css";
        caixaPerguntas.textContent = "";
        caixaPerguntas.appendChild(titulo);
        

        const pre = document.createElement("pre");
        const code = document.createElement("code");
        pre.classList.add("language-css");
        code.classList.add("language-css");
        code.textContent = mostraBlocoCSS(perguntaAtual.blocoCSS);
        pre.appendChild(code);
        caixaPerguntas.appendChild(pre);
        Prism.highlightElement(code);
        
        const botaoAvancar = document.createElement("button");
        atual++;
        botaoAvancar.addEventListener("click", () => mostraPergunta());
        botaoAvancar.innerHTML = "<span>Ok, posso avançar agora!</span>"
        caixaAlternativas.textContent = "";
        caixaAlternativas.appendChild(botaoAvancar);
        return;
    }
        //const afirmacoes = opcaoSelecionada.afirmacao;
        //historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    
}

function mostraResultado(){
    caixaPerguntas.textContent = "";
    caixaAlternativas.textContent = "";
    // const titulo = document.createElement("div");
    // titulo.classList.add("titulo");
    // titulo.innerHTML = "Parabéns você escapou da página!"
    // caixaPerguntas.appendChild(titulo);

    const texto = document.createElement("div");
    texto.classList.add("titulo");
    texto.innerHTML = `<img src='assets/img/pagina_final.gif' style='width:450px'><br />Se você coletou todas as suas recompensas e as inseriu em seu arquivo style.css, você agora escapou desta página com uma parte do código de estilo CSS para construir seu projeto de FlashCards.
    <br /> <br /> Agora, abra seu index.html no navegador para visualizar a interpretação do seu trabalho e compartilhe essa experiência com seus colegas de turma! `
    caixaPerguntas.appendChild(texto);
}

function mostraBlocoCSS(seletor) {
    let blocoEstilos = `${seletor} {\n`;
    let importar= "";
    let variaveisRoot = ""; 
    
    for (let propriedade in codigoFonte[seletor]) {        
        if (propriedade == "font-family"){
            importar = `${importFonts[codigoFonte[seletor][propriedade]]}\n\n`;
        }   
        if (propriedade == "--text-color"){
            variaveisRoot += `  ${propriedade}: ${codigoFonte[seletor][propriedade]};\n`;
            continue;
        }
        if (propriedade == "--card-front-color"){
            variaveisRoot += `  ${propriedade}: ${codigoFonte[seletor][propriedade]};\n`;
            continue;
        }
        if (propriedade == "--card-back-color"){
            variaveisRoot += `  ${propriedade}: ${codigoFonte[seletor][propriedade]};\n`;
            continue;
        }
        blocoEstilos += `  ${propriedade}: ${codigoFonte[seletor][propriedade]};\n`;
    }
    blocoEstilos += `}\n`;
    if (variaveisRoot != ""){
        variaveisRoot = `:root{\n${variaveisRoot}}\n\n`;
    }
    
    return importar+variaveisRoot+blocoEstilos;
}



mostraPergunta(); 