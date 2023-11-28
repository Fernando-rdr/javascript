function processar() {
    let s = document.getElementById('isex')   
    let res1 = document.getElementById('res')

    if (s.value == 'M' || s.value == 'm') {
        window.alert("Sexo Masculino")
    } else if (s.value == 'F' || s.value == 'f') {
        let res = s
        res1.innerHTML = 'Sexo Feminino'
        
    } else {
        window.alert("Opção Invalida")
    }
}

