function processar() {
    let s = document.getElementById('isex')   
    let res = document.getElementById('div2')

    if (s.value == 'M' || s.value == 'm') {
        window.alert("Sexo Masculino")
    } else if (s.value == 'F' || s.value == 'f') {
        window.alert("Sexo Feminino")
        
    } else {
        window.alert("Opção Invalida")
    }
}