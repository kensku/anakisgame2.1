function submit(){
    alert("O ano é 2175 e o planeta Terra está próximo de sua ruína. Devido ao abuso do solo e as constantes explorações em busca de minérios, o núcleo está instável e seu colapso é iminente.");
    alert("Para evitar tamanho desastre, três exploradores do espaço são enviados em missões diferentes para adquirir recursos raros que serão necessários para a construção de um estabilizador de núcleo.");
    alert("Anakan recebe a missão de ir para o planeta X-JARROS para adquirir um pote de VAR, o Vulmetrium Arnônico Rubro.");
    alert("Cowboy Espacial recebe a missão de ir para o planeta Rex-18 para obter um pedaço de RES-ILIA, o Rustinico Esperex Sórdido com formato ILIA.")
    alert("Laika recebe a missão de ir para o planeta Midnight-Mistery01 para coletar um artefato único, o Golden Circle.")

    var nome = prompt("Antes de começarmos o jogo, digite seu nome.");

    while (nome === ""){
        alert("Seu nome deve conter algum caractere!");
        var nome = prompt("Digite seu nome");
    }

    alert("Olá, " + nome + ", agora sim, vamos jogar!")
    window.location = './html/menu.html';
}


