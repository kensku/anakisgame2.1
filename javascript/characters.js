function chooseCharacter(){

    var personagem = prompt("Escolha um aventureiro para percorrer a jornada e garantir o futuro da humanidade! Anakan, Laika ou Cowboy Espacial");
    var personagem = personagem.toUpperCase();

    if (personagem === 'ANAKAN'){
        alert("Anakan parte em direção ao planeta X-JARROS, localizado em uma galaxia distante e com seu céu coberto por inúmeras camadas de nuvens.");
        alert("Por conta disso, as tempestades são mais fortes do que qualquer outra antes vista por Anakan.");
        alert("Durante a entrada na atmosfera do Planeta X-JARROS, a nave de Anakan demonstra um problema no painel de controle. Devido as fortes descargas elétricas causadas pela tempestade, a nave se torna inutilizável.");
       
        var anakanEscolha = prompt("A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência.")
        var anakanEscolha = anakanEscolha.toUpperCase();

        if(anakanEscolha != "A" && anakanEscolha != "B" || anakanEscolha === "") {
            alert("Atenção! Você deve escolher entre A ou B.")
            var anakanEscolha = prompt("A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência.")
            var anakanEscolha = anakanEscolha.toUpperCase();
        }

        if (anakanEscolha === "B"){
            alert("Com muito esforço, Anakan conseguiu aterrizar a nave com sucesso em um lago raso.");
            alert("Ele sai da nave com seus equipamentos enquanto o estabilizador elétrico volta ao normal. Para a sua sorte, não muito distande dali, há um depósito de VAR brilhando em vermelho sangue.");
            alert("Na esperança de concluir sua missão o mais rápido possível para não ter problemas com outra tempestade que se aproxima, Anakan se vê em um impasse, agir com cautela ou agir com rapidez.");

            var anakanEscolha2 = prompt("A - Anakan deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote; \nB - Anakan deve agir com rapidez e tentar coletar o minério antes que a tempestade chegue.");
            var anakanEscolha2 = anakanEscolha2.toUpperCase();

            if(anakanEscolha2 != "A" && anakanEscolha2 != "B" || anakanEscolha2 === "") {
                alert("Atenção! Você deve escolher entre A ou B.")
                var anakanEscolha2 = prompt("A - Anakan deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote; \nB - Anakan deve agir com rapidez e tentar coletar o minério antes que a tempestade chegue.");
                var anakanEscolha2 = anakanEscolha2.toUpperCase();
            }

            if (anakanEscolha2 === "A"){
                alert("Anakan analisa o minério e percebe sua instabilidade e a necessidade de usar um coletor de minério espacial, além de agir com mais cautela para coletar e guardar o material.");
                alert("Ele consegue coletar com sucesso e guardar em um pote, porém, a tempestade se aproxima. A nave esta um pouco distante, mas há uma caverna próxima.");

                var anakanEscolha3 = prompt("A - Anakan deve correr o mais rápido que puder em direção a nave, mesmo que de encontro a tempestade, e fugir do planeta; \nB - Anakan deve tentar se proteger da tempestade na caverna.");
                var anakanEscolha3 = anakanEscolha3.toUpperCase();

                if(anakanEscolha3 != "A" && anakanEscolha3 != "B" || anakanEscolha3 === "") {
                    alert("Atenção! Você deve escolher entre A ou B.")
                    var anakanEscolha3 = prompt("A - Anakan deve correr o mais rápido que puder em direção a nave, mesmo que de encontro a tempestade, e fugir do planeta; \nB - Anakan deve tentar se proteger da tempestade na caverna.");
                    var anakanEscolha3 = anakanEscolha3.toUpperCase();
                }

                if (anakanEscolha3 === "A"){
                    alert("A missão é concluida com sucesso, e com ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser completa a tempo! Foi uma ótima jornada.")
                } else if (anakanEscolha3 === "B"){
                    alert("Logo após entrar na caverna, pouco tempo se passa até a tempestade chegar no local. Raios atingem a estrutura, derrubando rochas que prendem Anakin dentro da caverna.");
                    alert("GAME OVER! Tente novamente.");  
                }

            } else if (anakanEscolha2 === "B"){
                 alert("Devido a velocidade que seria necessária para a coletagem do minério, Anakan fica nervoso e derruba o VAR, quer por sua vez explode e acaba com a jornada de Anakan.");
                 alert("GAME OVER! Tente novamente.");  
            }

        } else if (anakanEscolha === "A"){
            alert("A nave foi totalmente destrúida após a evacuação de Anakan. Nosso aventureiro sobreviveu por muitos anos no planeta X-JARROS, mas sem acesso a qualquer uma de suas ferramentas, ele nunca conseguiu sair.");
            alert("GAME OVER! Tente novamente.");            
        }

    } 
}

