function calcular () { 
    let n1 = Number(document.getElementById('nota1').value)   
    let n2 = Number(document.getElementById('nota2').value) 
    let n3 = Number(document.getElementById('nota3').value)
    let n4 = Number(document.getElementById('nota4').value)
    let res = document.querySelector('div#resultado')
    let a = (document.getElementById('aluno').value)
    let b = (document.getElementById('matricula').value)
    let c = (document.getElementById('turma').value)

    let media = ((n1 + n2 + n3 + n4) / 4).toFixed(2)
    
    if (media <= 5.49) {
        res.innerHTML = `<strong>REPROVADO!</strong> Porém possui direito a exames de recuperação escolar!`
        res.innerHTML += `<p>Aluno <strong>${a}(${b})</strong> matriculado na turma <strong>${c}</strong> obteve a média final <strong>${media}</strong></p>`
    } else { 
        res.innerHTML = `<strong>APROVADO!</strong> O aluno atingiu a média mínima para aprovação.`
        res.innerHTML += `<p>Aluno <strong>${a}(${b})</strong> matriculado na turma <strong>${c}</strong> obteve a média final <strong>${media}</strong></p>`
    } 
         
}