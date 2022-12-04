<!--ex: 1 -->
    <script>
        var nomeDoCarro = "fusca" 
        var nome = prompt("seu nome") 
        var idade = prompt("qual a sua idade?")
        alert("Olá, " + nome + ", a sua idade é " + idade)

        var forma = prompt( nome + ", escolha uma figura: 1-retângulo 2-quadrado 3-losango 4-trapézio 5-paralelogramo 6-triângulo 7-circulo")
        
        if (forma=="1"){
            var base = prompt("Valor da base")
            var altura = prompt("Valor da altura")
            var resultado = base * altura
            alert("A area do retângulo é " + resultado)
        }
        
        if (forma=="2"){
            var lado = prompt("Valor do lado")
            var resultado =  lado**2
            alert("A area do quadrado é " + resultado)
        }

        if (forma=="3"){
            var dmaior = prompt("Valor de diagonal maior")
            var dmenor = prompt("Valor de diagonal menor")
            var resultado = (dmaior * dmenor) / 2
            alert("A area do losango é " + resultado)
        }

        if (forma=="4"){
            var bmaior = prompt("Valor de Base maior")
            var bmenor = prompt("Valor de Base menor")
            var h = prompt("Valor de Altura ")
            var resultado = ((bmaior + bmenor) * h) / 2
            alert ("A area do trapézio é " + resultado)
        }
        if (forma=="5"){
            var base = prompt("Valor de base")
            var altura = prompt("Valor de altura")
            var resultado = base * altura
            alert("A area do Paralelogramo é " + resultado)
        }   

        if (forma=="6"){
            var base = prompt("Valor de base")
            var altura = prompt("Valor de altura")
            var resultado = (base * altura) / 2
            alert("A area do Paralelogramo é " + resultado)
        }

        if (forma=="7"){
            var raio = prompt("Valor de raio")
            var resultado = 3.14 + raio**2
            alert ("A area do círculo é " + resultado)
        }

       </script>  
