/*Creacion y actualizacion de una grafica Chart.js realizado por David Fernandez*/

//Creacion y implementacion en el HTML de la grafica
var ctx = document.getElementById("myChart").getContext("2d");
var guidingP = 0;
var gover = 0;
var general = 0;
var service = 0;
var myChart = new Chart(ctx,{
    //tipo de grafica
    type: "radar",
    data:{
        //valores de la grafica
        labels:['Guiding Principles','Governance','Plan','Engage','Design & Transition','Obtain or Build','Deliver and support','Improve','General Mgmt Practices','Service Management Practices','Technical Mgmt Practices','Continual Improvement'],
        datasets:[{            
            label:'Skill Areas',
            //datos de la grafica
            data:[0,0,0,0,0,0,0,0,0,0,0,0],             
            //atributo para rellenar el contenido de los datos 
            fill:true,
            //estilos del trazado
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2
        }]
    },
    options: {
        resposive: 'true',
        legend:{
            position: 'bottom'
        },
        //escalado de la grafica
        scale: {
            ticks: {
                //valor minimo del escalado
                beginAtZero: true,
                //valor maximo del escalado
                max: 5
            }
        }
    }   
});

numPregunta = 1;
categoria = 0;
cont = 2;
var salida = 0;
var suma = 0;
var valores = [];
var Cat1 = [];
var Cat2 = [];
var Cat8 = [];
var Cat9 = [];

document.getElementById("enviar").addEventListener("click",function(){
    var arrayRadios = document.getElementsByName("p"+numPregunta);
    for(i=0;i<arrayRadios.length;i++){

        if(arrayRadios[i].checked){

            if(numPregunta==1){
                guidingP = parseInt(arrayRadios[i].value);
                Cat1.push(parseInt(arrayRadios[i].value));
                myChart.data.datasets[0].data[0] = guidingP;
                myChart.update();
                numPregunta++;
            }else if(numPregunta==2){                
                guidingP = (guidingP + parseInt(arrayRadios[i].value))/2;
                Cat1.push(parseInt(arrayRadios[i].value));
                myChart.data.datasets[0].data[0] = guidingP;
                myChart.update();
                numPregunta++;
                categoria++;
            }else if(numPregunta==3){
                gover = parseInt(arrayRadios[i].value);
                Cat2.push(parseInt(arrayRadios[i].value)); 
                myChart.data.datasets[0].data[1] = gover;
                myChart.update();
                numPregunta++;
            }else if(numPregunta==4){
                gover = (gover + parseInt(arrayRadios[i].value))/2;  
                Cat2.push(parseInt(arrayRadios[i].value));                             
                myChart.data.datasets[0].data[1] = gover;
                myChart.update();
                numPregunta++;
                categoria++;
            }else if(numPregunta>=5 && numPregunta<=10){
                myChart.data.datasets[0].data[categoria] = arrayRadios[i].value;
                myChart.update();
                numPregunta++;
                categoria++;
            }else if(numPregunta==11){
                general = parseInt(arrayRadios[i].value);
                Cat8.push(parseInt(arrayRadios[i].value)); 
                myChart.data.datasets[0].data[categoria] = general;
                myChart.update();
                numPregunta++;
            }else if(numPregunta==12){
                general = (general + parseInt(arrayRadios[i].value))/2;
                Cat8.push(parseInt(arrayRadios[i].value)); 
                myChart.data.datasets[0].data[categoria] = general;
                myChart.update();
                numPregunta++;
                categoria++;
            }else if(numPregunta==13){
                service = parseInt(arrayRadios[i].value);
                Cat9.push(parseInt(arrayRadios[i].value));
                myChart.data.datasets[0].data[categoria] = service;
                myChart.update();
                numPregunta++;
            }else if(numPregunta>=14 && numPregunta<18){
                service = service + parseInt(arrayRadios[i].value);  
                Cat9.push(parseInt(arrayRadios[i].value));                    
                salida = service/cont;
                myChart.data.datasets[0].data[categoria] = salida;
                myChart.update();
                cont++;
                numPregunta++;
            }else if(numPregunta==18){
                service = service + parseInt(arrayRadios[i].value);                      
                salida = service/cont;
                myChart.data.datasets[0].data[categoria] = salida;
                myChart.update();
                numPregunta++;
                categoria++;
            }else if(numPregunta==19){
                myChart.data.datasets[0].data[categoria] = arrayRadios[i].value;
                myChart.update();
                numPregunta++;
                categoria++;
            }else if(numPregunta==20){
                myChart.data.datasets[0].data[categoria] = arrayRadios[i].value;
                myChart.update();
            }
        }

    }    

});

document.getElementById("siguiente").addEventListener("click",function(){
    if(numPregunta==19){
        numPregunta++;
        document.getElementById("siguiente").style.display = "none";
    }else if(numPregunta!=20){
        numPregunta++;
        document.getElementById("siguiente").style.display = "inline-block";
    }
})

document.getElementById("back").addEventListener("click",function(){
    if(numPregunta==3 ||numPregunta==5 ||numPregunta==6 ||numPregunta==7 ||numPregunta==8 ||numPregunta==9 ||numPregunta==10 ||numPregunta==11 ||numPregunta==13 ||numPregunta==19 ||numPregunta==20){
        numPregunta--;
        categoria--;
    }else{
        numPregunta--;
    }    
});

document.getElementById("update").addEventListener("click",function(){
    var arrayRadios = document.getElementsByName("p"+numPregunta);

    for(i=0;i<arrayRadios.length;i++){
        if(arrayRadios[i].checked){
            switch(numPregunta){
                case 1:{
                    Cat1[0] = parseInt(arrayRadios[i].value);
                    var media = (Cat1[0]+Cat1[1])/2
                    myChart.data.datasets[0].data[0] = media;
                    myChart.update();
                    break;
                }
                case 2:{
                    Cat1[1] = parseInt(arrayRadios[i].value);
                    var media = (Cat1[0]+Cat1[1])/2
                    myChart.data.datasets[0].data[0] = media;
                    myChart.update();
                    break;
                }
                case 3:{
                    Cat2[0] = parseInt(arrayRadios[i].value);
                    var media = (Cat2[0]+Cat2[1])/2
                    myChart.data.datasets[0].data[1] = media;
                    myChart.update();
                    break;
                }
                case 4:{
                    Cat2[1] = parseInt(arrayRadios[i].value);
                    var media = (Cat2[0]+Cat2[1])/2
                    myChart.data.datasets[0].data[1] = media;
                    myChart.update();
                    break;
                }
                case 5:{
                    myChart.data.datasets[0].data[2] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }
                case 6:{
                    myChart.data.datasets[0].data[3] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }
                case 7:{
                    myChart.data.datasets[0].data[4] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }
                case 8:{
                    myChart.data.datasets[0].data[5] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }
                case 9:{
                    myChart.data.datasets[0].data[6] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }
                case 10:{
                    myChart.data.datasets[0].data[7] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }
                case 11:{
                    Cat8[0] = parseInt(arrayRadios[i].value);
                    var media = (Cat8[0]+Cat8[1])/2
                    myChart.data.datasets[0].data[8] = media;
                    myChart.update();
                    break;
                }
                case 12:{
                    Cat8[1] = parseInt(arrayRadios[i].value);
                    var media = (Cat8[0]+Cat8[1])/2
                    myChart.data.datasets[0].data[8] = media;
                    myChart.update();
                    break;
                }
                case 13:{
                    Cat9[0] = parseInt(arrayRadios[i].value);
                    var media = (Cat9[0]+Cat9[1]+Cat9[2]+Cat9[3]+Cat9[4]+Cat9[5])/6;
                    myChart.data.datasets[0].data[9] = media;
                    myChart.update();
                    break;
                }
                case 14:{
                    Cat9[1] = parseInt(arrayRadios[i].value);
                    var media = (Cat9[0]+Cat9[1]+Cat9[2]+Cat9[3]+Cat9[4]+Cat9[5])/6;
                    myChart.data.datasets[0].data[9] = media;
                    myChart.update();
                    break;
                }
                case 15:{
                    Cat9[2] = parseInt(arrayRadios[i].value);
                    var media = (Cat9[0]+Cat9[1]+Cat9[2]+Cat9[3]+Cat9[4]+Cat9[5])/6;
                    myChart.data.datasets[0].data[9] = media;
                    myChart.update();
                    break;
                }
                case 16:{
                    Cat9[3] = parseInt(arrayRadios[i].value);
                    var media = (Cat9[0]+Cat9[1]+Cat9[2]+Cat9[3]+Cat9[4]+Cat9[5])/6;
                    myChart.data.datasets[0].data[9] = media;
                    myChart.update();
                    break;
                }
                case 17:{
                    Cat9[4] = parseInt(arrayRadios[i].value);
                    var media = (Cat9[0]+Cat9[1]+Cat9[2]+Cat9[3]+Cat9[4]+Cat9[5])/6;                    
                    myChart.data.datasets[0].data[9] = media;
                    myChart.update();
                    break;
                }
                case 18:{
                    Cat9[5] = parseInt(arrayRadios[i].value);
                    var media = (Cat9[0]+Cat9[1]+Cat9[2]+Cat9[3]+Cat9[4]+Cat9[5])/6;
                    myChart.data.datasets[0].data[9] = media;
                    myChart.update();
                    break;
                }
                case 19:{
                    myChart.data.datasets[0].data[10] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }
                case 20:{
                    myChart.data.datasets[0].data[11] = parseInt(arrayRadios[i].value);
                    myChart.update();
                    break;
                }                
            }
        }
    }    
});