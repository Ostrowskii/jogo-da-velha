    console.log("ola mundo");
    
    
    
    // o jogo começa sempre pelas O
    let quemJoga = "O"; 
    let rodada = 0;
    let jogoAcabado = 0;
    //0 a 8 variaveis total 9 que guarda os botões
    let btn = [ 
        document.querySelector("#a1"),
        document.querySelector("#a2"), 
        document.querySelector("#a3"), 
        document.querySelector("#a4"), 
        document.querySelector("#a5"), 
        document.querySelector("#a6"), 
        document.querySelector("#a7"), 
        document.querySelector("#a8"), 
        document.querySelector("#a9")];

    //0 para 'sem valor' 1 para 'X' e 2 para 'O'
    let valorBtn = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function contarRodada (){
        rodada++;
        if(rodada % 2 === 0){
            quemJoga = "O"; 
            return "O";
        } else{
            quemJoga = "X";
            return "X";
        }
    }
    //s de simbolo. eu vou chamar essa função para o X(1) e para o O(2)

    function verificarVencedor (S){
        if (valorBtn[0] === S && valorBtn[1] === S && valorBtn[2] == S){
            jogoAcabado = S;
            
        }else if(valorBtn[3] === S && valorBtn[4] === S && valorBtn[5] == S){
            jogoAcabado = S;
        }else if(valorBtn[6] === S && valorBtn[7] === S && valorBtn[8] == S){
            jogoAcabado = S;
        }else if(valorBtn[0] === S && valorBtn[3] === S && valorBtn[6] == S){
            jogoAcabado = S;
        }else if(valorBtn[1] === S && valorBtn[4] === S && valorBtn[7] == S){
            jogoAcabado = S;
        }else if(valorBtn[2] === S && valorBtn[5] === S && valorBtn[8] == S){
            jogoAcabado = S;
        }else if(valorBtn[0] === S && valorBtn[4] === S && valorBtn[8] == S){
            jogoAcabado = S;
        }else if(valorBtn[2] === S && valorBtn[4] === S && valorBtn[6] == S){
            jogoAcabado = S;
        }
        
    }

    for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", function(e){
        
        //chamar de quem é a vez de ser jogada O ou X
        if(jogoAcabado === 0){
            if(valorBtn[i] === 0){
               mig = contarRodada();
                if (mig === "X"){
                    valorBtn[i] = 1;
                }else{
                    valorBtn[i] = 2;
                }


                //a PEÇA q vai ser colocada
                let jogador = document.createElement("p");
                jogador.innerHTML = quemJoga;

                // o LOCAL  que vai ser colocado
                const insert = document.querySelector("#a"+btn[i].value);
                insert.appendChild(jogador);
           }else{
               alert("espaço ja utilizado");
           }
        }
        
        
        verificarVencedor(1);
        verificarVencedor(2);
        if(jogoAcabado === 1){
            alert("o jogador X venceu essa partida XD");
        }else if (jogoAcabado === 2){
            alert("o jogador O venceu essa partida XD");
        }
        
        
        
    });
//        let reset = document.querySelector("reset");
//        reset.addEventListener("click", function(e){
//            valorBtn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//            
//        });
    }

    
