
//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }

    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length < 2){
            carArr.push(carClass);
            }
            console.log(carArr);
            
            
        } else {
            let index = carArr.indexOf(carClass);
            console.log(index);
            if(index == -1){
            carArr.splice(index, 1);
            }
            }
             
    } else {
        throw "You need set a Car Class";
    }
    
}

function ShowCompare() {
    console.log(carArr);
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    document.getElementById("compare").style.display = "block";

    for(let i = 0; i<carArr.length; i++){

        let image = document.getElementById("compare_image_" + [i])
        image.innerHTML = "<img src '"+ carArr[i].image +"'>"

        let modelo = document.getElementById("compare_modelo_"+ [i])
        modelo.innerHTML = carArr[i].nome

        let alturaCacamba = document.getElementById("compare_alturacacamba_"+ [i])
        alturaCacamba.innerHTML = carArr[i].alturaCacamba

        let alturaveiculo = document.getElementById("compare_alturaveiculo_" + [i])
        alturaveiculo.innerHTML = carArr[i].alturaVeiculo

        let alturasolo = document.getElementById("compare_alturasolo_"+ [i])
        alturasolo.innerHTML = carArr[i].alturaSolo

        let capacidadecarga = document.getElementById("compare_capacidadecarga_"+ [i])
        capacidadecarga.innerHTML = carArr[i].capacidadeCarga

        let motor = document.getElementById("compare_motor_"+ [i])
        motor.innerHTML = carArr[i].motor

        let potencia = document.getElementById("compare_potencia_"+ [i])
        potencia.innerHTML = carArr[i].potencia

        let volumecacamba = document.getElementById("compare_volumecacamba_"+ [i])
        volumecacamba.innerHTML = carArr[i].volumeCacamba

        let roda = document.getElementById("compare_roda_"+ [i])
        roda.innerHTML = carArr[i].roda

        let preco = document.getElementById("compare_preco_"+ [i])
        preco.innerHTML = carArr[i].preco

    }

  
}
