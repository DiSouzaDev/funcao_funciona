function inicio() {
    function ex1() {
        var idadePet = parseInt(prompt('Quantos anos seu pet tem?'));
        if(isNaN(idadePet)){
            alert('Digite um valor válido');
            ex1();
        }
        var escolha = parseInt(prompt('Escolha qual animal você quer comparar a idade: \n1.) Cachorro \n2.) Gato \n3.) calopsita \n4.) Sair'));
        switch (escolha) {
            case 1:
                cachorro();
                break;
            case 2:
                gato();
                break;
            case 3:
                calopsita();
                break;
            case 4:
                inicio();
                break;
            default:
                alert('Digite valores válidos.');
                break;
        }

        function cachorro() {
            alert('1 ano humano equivale a 7 anos para um cachorro.');
            var nomePet = prompt('Digite o nome do seu pet:');
            var conta = idadePet * 7;
            alert(nomePet + ' que é da espécie canina tem ' + conta + ' ano(s) em idade humana.');
            ex1();
        }

        function gato() {
            alert('1 ano humano equivale a 10 anos para um gato.');
            var nomePet = prompt('Digite o nome do seu pet:');
            var conta = idadePet * 10;
            alert(nomePet + ' que é da espécie felina tem ' + conta + ' ano(s) em idade humana.');
            ex1();
        }

        function calopsita() {
            alert('1 ano humano equivale a 9 anos para uma calopsita.');
            var nomePet = prompt('Digite o nome do seu pet:');
            var conta = idadePet * 9;
            alert(nomePet + ' que é uma espécie de ave tem ' + conta + ' ano(s) em idade humana.');
            ex1();
        }
    }

    function ex2() {
        var diasAno = 365;
        var idade = parseInt(prompt('Qual idade você quer alcançar?'));
        var lanches = parseInt(prompt('Quantos lanches você quer comer por dia?'));
        var total = idade * diasAno * lanches;
        alert('Você precisa de ' + total + ' lanches para durar até a idade de ' + idade + ' anos.')
        inicio();
    }

    function ex3(){
        var escolha = parseInt(prompt('Escolha uma opção: \n1.) Calcular Circunferência \n2.) Calcular Área \n3.) Sair'));
        switch (escolha) {
            case 1:
                calcularCircunferencia();
                break;
            case 2:
                calcularArea();
                break;
            case 3:
                inicio();
                break;
            default:
                alert('Digite valores válidos.');
                break;
        }

        function calcularCircunferencia(){
            var raio = parseInt(prompt('Informe a medida do raio:'));
            var total = 2 * 3 * raio;
            alert('A medida da circunferência é ' + total);
            ex3();
        }

        function calcularArea(){
            var raio = parseInt(prompt('Informe a medida do raio:'));
            var total = 3 * (raio * raio);
            alert('A medida da área é ' + total);
            ex3();
        }
    }

    function ex4(){
        var escolha = parseInt(prompt('Escolha uma opção: \n1.) Converter para Fahrenheit \n2.) Converter para Celsius \n3.) Sair'));
        switch (escolha) {
            case 1:
                celcius();
                break;
            case 2:
                fahrenheit();
                break;
            case 3:
                inicio();
                break;
            default:
                alert('Digite valores válidos.');
                ex4();
                break;
        }

        function celcius(){
            var celc = parseInt(prompt('Quantidade de C° que você quer converter:'));
            var calc = (celc * 9/5) + 32;
            alert('O valor da conversão é de ' + calc + '° fahrenheit.');
            ex4();
        }

        function fahrenheit(){
            var fahr = parseInt(prompt('Quantidade de F° que você quer converter:'));
            var calc = (fahr - 32) * 5/9
            alert('O valor da conversão é de ' + calc + '° celsius.');
            ex4();
        }
    }

    function comeco() {
        var x = prompt("Qual exercício você quer visualizar? (Use os números de 1 a 4)");
        if (x == 1) {
            ex1();
        } else if (x == 2) {
            ex2();
        } else if (x == 3) {
            ex3();
        } else if (x == 4) {
            ex4();
        } else {
            alert("Insira um valor válido!");
            comeco();
        }
    }
    comeco();
}

inicio();