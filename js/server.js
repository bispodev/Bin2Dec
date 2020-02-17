function binToDec() {
    var dec = 0
    var bin = document.getElementsByTagName("input")[0].value
    var decimal = document.getElementsByTagName("input")[1]

    for (var index = bin.length - 1; index >= 0; index--) {
        dec += parseInt(bin[index]) * Math.pow(2, bin.length - 1 - index)
    }
    console.log(dec)
    decimal.value = dec
}