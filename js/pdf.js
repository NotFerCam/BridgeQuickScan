document.getElementById("pdf").addEventListener("click",function(){
   var datos = myChart.data.datasets[0].data;   
   var resultados = [];
   //Switch para comprobar las opciones
   for(i=0;i<datos.length;i++){
      switch(i){
         //Primera Categoria
         case 0:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Little ability to act upon and own the IT service (portfolio) delivery without top-down guidance from upper management. Likely to be blocked by changes in strategy, type of work or management structure unless told what to do next. Likely IT executes requests from the business without focusing on value and aligning priority and expectations.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Ability to act upon and own the IT service (portfolio) delivery with little top-down and/or peer guidance. IT likely bases its plans for service delivery on feedback from business. Service levels are agreed for the service.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Strong ownership and vision regarding the IT service (portfolio) delivery, able to act autonomously and align interdependencies with other teams. Likely to actively collaborate with and seek feedback by the business. IT is aware of of the business value of each service and seeks to improve service delivery.";
            }
            break;
         }
         //Segunda Categoria
         case 1:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Work out of line with the directions given by the governing body. Governing body and management do not always maintain alignment through a clear set of shared principles and objectives. Few application of governance framework and practices.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Work mostly in line with the directions given by the governing body. Governing body and management regularly maintain alignment through a clear set of shared principles and objectives. Application of governance framework even though practices might be inconsistently established.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Work closely aligned with the directions given by the governing body. Governing body and management proactively maintain alignment through a clear set of shared principles and objectives. Mature application of a governance framework backed up by continually improved practices.";
            }
            break;
         }
         //tercera Categoria
         case 2:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Lack of understanding and low awareness of the strategic plans, portfolio and enterprise architecture; likely not mapped with critical dimensions and for all products and services across the IT delivery unit.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Reasonable understanding and awareness of the strategic plans, portfolio and enterprise architecture mapped with critical dimensions and most key products and services across the IT delivery unit.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Complete and shared understanding and awareness of the strategic plans, portfolio and enterprise architecture mapped with critical dimensions and all products and services across the IT delivery unit.";
            }
            break;
         }
         //Cuarta Categoria
         case 3:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "A rather poor understanding of stakeholder needs, transparency, continual engagement, and good relationships with only a few stakeholders.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "A good understanding of critical stakeholder needs, transparency, continual engagement, and mostly good relationships with crucial stakeholders.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "A complete understanding of stakeholder needs, transparency, continual engagement, and excellent relationships with all stakeholders.";
            }
            break;
         }
         //Quinta Categoria
         case 4:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Ensure that very few IT products and services continually meet stakeholder expectations for quality, costs, and time to market; an aspect might be missing (e.g. increased time to market).";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Ensure that critical IT products and services continually meet stakeholder expectations for quality, costs, and time to market. ";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Ensure that all IT products and services continually meet stakeholder expectations for quality, costs, and time to market.";
            }
            break;
         }
         //Sexta Categoria
         case 5:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Likely to experience shortage in availability of service components when and where they are needed, fluctuating quality when it comes to meeting agreed specifications according to organizational standards; Ad-hoc practices dominate the daily work.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Ensure that most service components are available when and where they are needed, and meet agreed specifications according to organizational standards; Standard practices (e.g. ITIL 3) may be applied.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Ensure that all service components are available when and where they are needed, and meet agreed specifications according to organizational standards; Advanced practices (e.g. Lean) may be applied.";
            }
            break;
         }
         //Septima Categoria
         case 6:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "A handful of IT Services are delivered and supported according to agreed specifications and stakeholders’ expectations, the rest being delivered in an error-prone way. IT assumes what is valuable for its key stakeholders and is often not able to prioritize and offer transparency in delivery unless being requested to do so.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Most IT Services are delivered and supported according to agreed specifications and stakeholders’ expectations. IT is being reactively told by the stakeholders what is valuable and is able to prioritize and offer transparency in delivery on demand.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "All IT Services are delivered and supported according to agreed specifications and stakeholders’ expectations. IT knows what is valuable for its key stakeholders and is able to prioritize and offer transparency in delivery at any moment.";
            }
            break;
         }
         //Octava Categoria
         case 7:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Barely engaged with aligning IT practices and services with changing business needs through sporadic identification and improvement of crucial elements involved in the effective management of products and services.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Reactively engaged with aligning IT practices and services with changing business needs through the ongoing identification and improvement of crucial elements involved in the effective management of products and services.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Fully engaged with aligning IT practices and services with changing business needs through the ongoing identification and improvement of all elements involved in the effective management of products and services.";
            }
            break;
         }
         //Novena Categoria
         case 1:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "IT barely adopts and adapts general management practices from business management domains, e.g. Information Security and Supplier Management, for a successful service management.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "IT adopts and adapts some general management practices from business management domains, e.g. Information Security and Supplier Management, to a sufficient degree for a reasonable service management.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "IT adopts and adapts general management practices from business management domains, e.g. Information Security and Supplier Management, for a successful service management.";
            }
            break;
         }
         //Decima Categoria
         case 9:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Low maturity of service management practices that have been developed and integrated with a mostly stable IT service delivery. Examples: Change Control, Incident Management, IT Asset Management, Service Configuration Management and Service desk.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Average maturity of service management practices that have been developed and integrated with a successful IT service delivery. Examples: Change Control, Incident Management, IT Asset Management, Service Configuration Management and Service desk.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "High maturity of service management practices that have been developed and integrated with a successful and proactive IT service delivery. Examples: Change Control, Incident Management, IT Asset Management, Service Configuration Management and Service desk.";
            }
            break;
         }
         //Undecima Categoria
         case 10:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Low maturity of technical management practices that have been adapted from technology domains and integrated in a mostly stable IT service delivery by a purpose of expanding or shifting their focus from technology solutions to IT services. Examples: Deployment management, infrastructure and platform management.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Average maturity of technical management practices that have been adapted from technology domains and integrated in a successful IT service delivery by a purpose of expanding or shifting their focus from technology solutions to IT services. Examples: Deployment management, infrastructure and platform management.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "High maturity of technical management practices that have been adapted from technology domains and integrated in a successful and proactive IT service delivery by a purpose of expanding or shifting their focus from technology solutions to IT services. Examples: Deployment management, infrastructure and platform management.";
            }
            break;
         }
         //Duodecima Categoria
         case 11:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Loose commitment to and sporadic practice of continual improvement that is not embedded into everyday IT activity. Lack of strong culture of continual improvement, backed up by respective techniques and aligned with strategic objectives.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "General commitment to and practice of continual improvement that is embedded into every IT activity. There is some culture of continual improvement, backed up by respective techniques and mostly in alignment with strategic objectives.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Strong commitment to and regular, proactive practice of continual improvement that is embedded into every IT activity. There is a strong culture of continual improvement, backed up by respective techniques and always in alignment with strategic objectives.";
            }
            break;
         }
      }
   }

   html2canvas(document.getElementById("graph"), {
      onrendered: function(canvas) {
         var img = canvas.toDataURL();
         var doc = new jsPDF();
         doc.text(30,30,'Quiz Results:');
         doc.addImage(img, 30, 30);
         doc.addPage();
         doc.text(20,30,'Skills Results:');
         doc.text(20,40,'Guiding Principles:\n'+resultados[0]);
         doc.text(20,50,'Governance: '+resultados[1]);
         doc.text(20,60,'Plan: '+resultados[2]);
         doc.text(20,70,'Engage: '+resultados[3]);
         doc.text(20,80,'Design & Transition: '+resultados[4]);
         doc.text(20,90,'Obtain or Build: '+resultados[5]);
         doc.text(20,100,'Deliver and Support: '+resultados[6]);
         doc.text(20,110,'What is your level of engagement with improvement initiatives, plans and status reports?: '+resultados[7]);
         doc.text(20,120,'General Mgmt Practices: '+resultados[9]);
         doc.text(20,130,'Service Management Practices: '+resultados[10]);
         doc.text(20,140,'Technical Mgmt Practices: '+resultados[10]);
         doc.text(20,150,'To what extent does my organization apply improvement methodologies, culture and techniques, in alignment with our strategic objectives?: '+resultados[10]);
         doc.save('DatosCuestionario.pdf');
      }
   });
});