function CalcularImc(){
  let nome = prompt("Digite seu nome:");
  let peso = parseFloat(prompt("Digite seu peso:"));
  let altura = parseFloat(prompt("Digite sua altura:"));
  let imc = 0; 
  let resultado;

  imc = peso / (altura * altura); //ou peso / altura^2 = potencia

  

  if(imc >= 18.5 ){
      resultado = "Abaixo do Peso"

  }
  else if (imc >= 25){
      resultado = "Peso Normal"

  }
  else if (imc >= 30){
      resultado = "SobrePeso"

  }
  else if (imc >= 35){
      resultado = "Obesidade1"

  }
  else if (imc >= 45){
    resultado = "Obesidade 2"

}
else if (imc >= 45){
    resultado = "Obesidade 3"
}

document.write(nome + " possui o imc " + imc + " e esta " + resultado);
alert(nome + " possui o imc " + " e esta " + resultado);




}