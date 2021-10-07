      function calc(aoldal,boldal,coldal,aszog,bszog,cszog) {
       var ao = parseInt(document.getElementById(aoldal).value);
       var bo = parseInt(document.getElementById(boldal).value);
       var co = parseInt(document.getElementById(coldal).value);

       var asz = parseInt(document.getElementById(aszog).value);
       var bsz = parseInt(document.getElementById(bszog).value);
       var csz = parseInt(document.getElementById(cszog).value);


       if (ao > 0 && bo > 0 && co > 0) {
         var semiperimeter = (ao+bo+co) / 2;
         var areaValue = Math.sqrt(semiperimeter * (semiperimeter - ao) * (semiperimeter - bo) * (semiperimeter - co));
         areaValue = areaValue.toFixed(2);
         var perimeterValue = ao + bo + co
         window.alert(`A területe a háromszögnek: ${areaValue} cm2 ||| A háromszög kerülete: ${perimeterValue} cm`);

       }
       else if (bo > 0 && co > 0 && asz > 0) {
         var pi = Math.PI;
         var tempang = asz * (pi/180)
         var ang = Math.sin(tempang);
         var angP = Math.cos(tempang);
         var area = ((1/2) * bo * co * ang).toFixed(2);
         var perimeterTemp = 2*(bo*co*angP);
         var perimeterC = (co*co) + (bo*bo) - perimeterTemp
         var perimeterfin = (Math.sqrt(perimeterC) + co + bo).toFixed(2);
         window.alert(`A területe a háromszögnek: ${area} cm2 ||| A háromszög kerülete: ${perimeterfin} cm`);
       }
       else if (ao > 0 && bo > 0 && csz > 0) {
         var pi = Math.PI;
         var tempang = csz * (pi/180)
         var ang = Math.sin(tempang);
         var angP = Math.cos(tempang);
         var area = ((1/2) * ao * bo * ang).toFixed(2);
         var perimeterTemp = 2*(bo*ao*angP);
         var perimeterC = (ao*ao) + (bo*bo) - perimeterTemp
         var perimeterfin = (Math.sqrt(perimeterC) + ao + bo).toFixed(2);
         window.alert(`A területe a háromszögnek: ${area} cm2 ||| A háromszög kerülete: ${perimeterfin} cm`);
       }
       else if (co > 0 && ao > 0 && bsz > 0) {
         var pi = Math.PI;
         var tempang = bsz * (pi/180)
         var ang = Math.sin(tempang);
         var angP = Math.cos(tempang);
         var area = ((1/2) * ao * co * ang).toFixed(2);
         var perimeterTemp = 2*(co*ao*angP);
         var perimeterC = (ao*ao) + (co*co) - perimeterTemp
         var perimeterfin = (Math.sqrt(perimeterC) + ao + co).toFixed(2);
         window.alert(`A területe a háromszögnek: ${area} cm2 ||| A háromszög kerülete: ${perimeterfin} cm`);
       }
       else if (ao > 0 && bsz > 0 && csz > 0) {
         var pi = Math.PI;
         var szog1 = bsz * (pi/180);
         var szog2 = csz * (pi/180);
         var szamitas1 = (ao*ao) * (Math.sin(szog1) * Math.sin(szog2));
         var szamitas2 = 2 * Math.sin(szog1+szog2);
         var szamitasfin = szamitas1 / szamitas2
         window.alert(`A területe a háromszögnek: ${szamitasfin.toFixed(2)} cm2 ||| A háromszög kerülete ebben a módban nem számolható ki.`)
       }
       else if (bo > 0 && asz > 0 && csz > 0) {
         var pi = Math.PI;
         var szog1 = asz * (pi/180);
         var szog2 = csz * (pi/180);
         var szamitas1 = (bo*bo) * (Math.sin(szog1) * Math.sin(szog2));
         var szamitas2 = 2 * Math.sin(szog1+szog2);
         var szamitasfin = szamitas1 / szamitas2
         window.alert(`A területe a háromszögnek: ${szamitasfin.toFixed(2)} cm2 ||| A háromszög kerülete ebben a módban nem számolható ki.`)
       }
       else if (co > 0 && asz > 0 && bsz > 0) {
         var pi = Math.PI;
         var szog1 = asz * (pi/180);
         var szog2 = bsz * (pi/180);
         var szamitas1 = (co*co) * (Math.sin(szog1) * Math.sin(szog2));
         var szamitas2 = 2 * Math.sin(szog1+szog2);
         var szamitasfin = szamitas1 / szamitas2
         window.alert(`A területe a háromszögnek: ${szamitasfin.toFixed(2)} cm2 ||| A háromszög kerülete ebben a módban nem számolható ki.`)
       }
       else{
         window.alert("Ezekkel az adatokkal nem tudja az oldal kiszámolni az eredményt.")
       }
     }
