function calculate(oldalA,oldalB){
        var oldalA = parseInt(document.getElementById(oldalA).value);
        var oldalB = parseInt(document.getElementById(oldalB).value);


        if (oldalA > 0 && oldalB > 0)
        {
            var K = 2 * (oldalA + oldalB);
            var T = (oldalA * oldalB);
            T = T.toFixed(2);
            window.alert(`A téglalap területe: ${T} cm2 ||| A téglalap kerülete: ${K} cm`)
        }
        else
    		{
    			window.alert("Ezekkel az adatokkal nem tudja az oldal kiszámolni az eredményt.")
    		}
    }
