function layka() {
  alert(
    "Cowboy Espacial vai em busca de um sonho real pelo mundo interplanetário sem fim. parte em direção ao planeta X-Brosno, localizado em uma galaxia distante e com seu céu coberto por inúmeras camadas de nuvens e poeira cosmica."
  );
  alert(
    "Por conta disso, as tempestades são mais fortes do que qualquer outra antes vista por Cowboy."
  );
  alert(
    "Durante a entrada na atmosfera do Planeta X-JARROS, a nave de Cowboy demonstra um problema no painel de controle. Devido as fortes descargas elétricas causadas pela tempestade, a nave se torna inutilizável."
  );

  var laikaEscolha = prompt(
    "A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência."
  );
  var laikaEscolha = laikaEscolha.toUpperCase();

  if ((laikaEscolha != "A" && laikaEscolha != "B") || laikaEscolha === "") {
    alert("Atenção! Você deve escolher entre A ou B.");
    var laikaEscolha = prompt(
      "A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência."
    );
    var laikaEscolha = laikaEscolha.toUpperCase();
  }

  if (laikaEscolha === "B") {
    alert(
      "Com muito esforço, Cowboy conseguiu aterrizar a nave com sucesso em um lago raso."
    );
    alert(
      "Ele sai da nave com seus equipamentos enquanto o estabilizador elétrico volta ao normal. Para a sua sorte, não muito distande dali, há um depósito de VAR brilhando em vermelho sangue."
    );
    alert(
      "Na esperança de concluir sua missão o mais rápido possível para não ter problemas com outra tempestade que se aproxima, Cowboy se vê em um impasse, agir com cautela ou agir com rapidez."
    );

    var laikaEscolha2 = prompt(
      "A - Cowboy deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote; \nB - Cowboy deve agir com rapidez e tentar coletar o minério antes que a tempestade chegue."
    );
    var laikaEscolha2 = laikaEscolha2.toUpperCase();

    if (
      (laikaEscolha2 != "A" && laikaEscolha2 != "B") ||
      laikaEscolha2 === ""
    ) {
      alert("Atenção! Você deve escolher entre A ou B.");
      var laikaEscolha2 = prompt(
        "A - Cowboy deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote; \nB - Cowboy deve agir com rapidez e tentar coletar o minério antes que a tempestade chegue."
      );
      var laikaEscolha2 = laikaEscolha2.toUpperCase();
    }

    if (laikaEscolha2 === "A") {
      alert(
        "Cowboy analisa o minério e percebe sua instabilidade e a necessidade de usar um coletor de minério espacial, além de agir com mais cautela para coletar e guardar o material."
      );
      alert(
        "Ele consegue coletar com sucesso e guardar em um pote, porém, a tempestade se aproxima. A nave esta um pouco distante, mas há uma caverna próxima."
      );

      var laikaEscolha3 = prompt(
        "A - Cowboy deve correr o mais rápido que puder em direção a nave, mesmo que de encontro a tempestade, e fugir do planeta; \nB - Cowboy deve tentar se proteger da tempestade na caverna."
      );
      var laikaEscolha3 = laikaEscolha3.toUpperCase();

      if (
        (laikaEscolha3 != "A" && laikaEscolha3 != "B") ||
        laikaEscolha3 === ""
      ) {
        alert("Atenção! Você deve escolher entre A ou B.");
        var laikaEscolha3 = prompt(
          "A - Cowboy deve correr o mais rápido que puder em direção a nave, mesmo que de encontro a tempestade, e fugir do planeta; \nB - Cowboy deve tentar se proteger da tempestade na caverna."
        );
        var laikaEscolha3 = laikaEscolha3.toUpperCase();
      }

      if (laikaEscolha3 === "A") {
        alert(
          "A missão é concluida com sucesso, e com ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser completa a tempo! Foi uma ótima jornada."
        );
      } else if (laikaEscolha3 === "B") {
        alert(
          "Logo após entrar na caverna, pouco tempo se passa até a tempestade chegar no local. Raios atingem a estrutura, derrubando rochas que prendem Anakin dentro da caverna."
        );
        alert("GAME OVER! Tente novamente.");
      }
    } else if (laikaEscolha2 === "B") {
      alert(
        "Devido a velocidade que seria necessária para a coletagem do minério, Cowboy fica nervoso e derruba o VAR, quer por sua vez explode e acaba com a jornada de Cowboy."
      );
      alert("GAME OVER! Tente novamente.");
    }
  } else if (laikaEscolha === "A") {
    alert(
      "A nave foi totalmente destrúida após a evacuação de Cowboy. Nosso aventureiro sobreviveu por muitos anos no planeta X-JARROS, mas sem acesso a qualquer uma de suas ferramentas, ele nunca conseguiu sair."
    );
    alert("GAME OVER! Tente novamente.");
  }
}
