    
    // Receive what is on the calculator display
    function receberVisor() {
        return document.querySelector('#idResult').innerText;
    };

    // Read the clicked button
    function printOutput(clicado) {
        return document.getElementById("idResult").innerText = clicado;
    };

    // Numbers
    var botoesNumeros = document.querySelectorAll('.clBotoesNumero'); //  botoesNumeros is an Array

    // For each button with numbers
    botoesNumeros.forEach(function (cadaBotaoNum) {
        cadaBotaoNum.addEventListener('click', function () {
            var output = receberVisor();
            output = output + event.target.value;
            printOutput(output);
        });
    });

    // Operators
    var botoesOpe = document.querySelectorAll('.clOperadores');

    // For each button with operators
    botoesOpe.forEach(function (cadaBotaoOpe) {
        cadaBotaoOpe.addEventListener('click', function () {
            output = receberVisor();
            switch (this.id) {
                // %
                // It is not the way I would like to, but the results appear to be suficient
                case "%":
                    output = receberVisor().toString();
                    if (output.indexOf("+") != '-1') {
                        var arrTemp = output.split("+");
                    } else {
                        var arrTemp = output.split("-");
                    }
                    console.log(arrTemp);
                    var num1 = arrTemp[0];
                    var num2 = arrTemp[1];

                    // Percentage
                    var porcentagem = (num1 / 100) * num2;
                    arrTemp[1] = porcentagem;

                    // Add the original equation
                    if (output.indexOf("+") != '-1') {
                        var outputPorcentagem = arrTemp.join("+");
                    } else {
                        var outputPorcentagem = arrTemp.join("-");
                    }

                    // Put the new value on the screen
                    printOutput(outputPorcentagem)
                    break;

                // 1/x
                case "idDivX":
                    output = Number(output);
                    output = 1 / output;
                    printOutput(output);
                    break;

                // x²
                case "idQuadrado":
                    output = Number(output);
                    output = Math.pow(output, 2);
                    printOutput(output);
                    break;

                // Square Root
                case "idRaizQua":
                    output = Number(output);
                    output = Math.sqrt(output);
                    printOutput(output);
                    break;

                // Clear
                case "idClear":
                    return printOutput("");
                    break;

                // Negative Number
                case "idNumNegativo":
                    output = -output
                    printOutput(output);
                    break;

                // Delete
                case "idDeletar":
                    output = receberVisor().toString();
                    if (output) {    // if output has a value
                        output = output.substr(0, output.length - 1); // delete 1 character
                        printOutput(output);
                    } else {
                        null;
                    };
                    break;

                default:
                    if (this.id != "=") {
                        output = output + this.id;
                        printOutput(output);
                        break;
                    };
                    if (this.id == "=") {
                        var resultado = eval(output);
                        printOutput(resultado);
                        break;
                    };
            };
        });
    });