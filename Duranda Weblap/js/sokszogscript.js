<script type="text/javascript">
    function calc(oldalSz,oldalH){
      var oldalN = parseInt(document.getElementById(oldalSz).value);
      var oldalL = parseInt(document.getElementById(oldalH).value);

      if(oldalN>2 && oldalL>0){
        var pi = Math.PI;
        var K = oldalN * oldalL;
        var sinx = Math.sin(pi/oldalN);
        var cosx = Math.cos(pi/oldalN);
        var T = (1/4)*oldalN*Math.pow(oldalL,2)*(cosx/sinx).toFixed(2);
        window.alert(`A sokszög területe: ${T} cm2 ||| A sokszög kerülete: ${K} cm`);
      }
      else{
        window.alert("Ezekkel az adatokkal nem tudja az oldal kiszámolni az eredményt.")
      }
    }
    </script>