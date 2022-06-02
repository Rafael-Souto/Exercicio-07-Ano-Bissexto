// A partir do	ano	fornecido	pelo	usuário	escrever um	programa que diga	se o ano	é bissexto.

// Entrada de dados do usuário
ano = parseInt(prompt('Informe o ano para saber se ele é bissexto: '))

// Condição para saber se o ano é bissexto
if((ano % 4 == 0) && (!(ano % 100 == 0))){
  alert('O ano é bissexto!')
}
  else if(ano % 400 == 0){
    alert('O ano é bissexto!')
  }
    else {
      alert('O ano não é bissexto!')
}