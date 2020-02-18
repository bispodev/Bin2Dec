var decimal = document.getElementsByTagName("input")[1]

function binToDec() {
    var dec = 0
    var bin = document.getElementsByTagName("input")[0].value

    if (bin.length > 8) {
        alert("Insira apenas 8 digitos")
        console.log("Erro, muitos digitos")
        return false
    }

    if (verify(bin.toString())) {
        for (var index = bin.length - 1; index >= 0; index--) {
            dec += parseInt(bin[index]) * Math.pow(2, bin.length - 1 - index)
        }
        decimal.value = dec
    } else {
        return false
    }
}

function verify(binare) {
    var bin_split = binare.split('');

    for (var index = bin_split.length - 1; index >= 0; index--) {
        const split = bin_split[index]
        if (split == "1" || split == "0") {
            console.log("Passou no teste" + split)
        } else {
            console.log("Não passou no teste: " + split)
            decimal.value = '';
            alert("Apenas numeros binarios")
            return false
        }
    }
    return true
}