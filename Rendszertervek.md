# Duranda kft
## Rendszerterv

## 1. A rendszer célja
A rendszer célja, hogy a felhasználó a bevitt értékek alapján megkapja az áhított eredményt.
Ha nem lehetséges az adott értékek alapján eredményt adni, akkor az oldal hibát jelez.
Az oldal használatához nem szükséges regisztrálni, ezáltal nincs lehetőség a korábbi eredmények mentésére sem.

## 2. Projekt terv
A projektet weblapon valósítjuk meg, melynek van egyaránt frontend és backend része.
Az egyes feladatokat többségében külön emberek végzik.
A frontend fejlesztésére HTML-t és CSS alkalmazunk.
- A frontend fejlesztők célja hogy egy könnyen átlátható, igényes, felhasználóbarát felületet hozzanak létre.
- A backend fejlesztők feladata, a háttérben zajló folyamatok leprogramozása, JavaScript kód megírása, a program helyes működésének biztosítása, és az eredmény kiértékelése.

## 3.Követelmények
A weboldal létrehozásához HTML/CSS illetve JavaScriptet és PHP-t használtunk.
A felépítés és dizájnolás HTML és CSS implementálásával történik.
Az oldal teljes értékű felhasználására elegendő egy egyszerű internetes böngészőt indítanunk.

## 4.Funkcionális terv
Rendszerszereplők:
- A felhasználó: Egyetlen szereplő a weboldal személyi igénybevétele során, hiszen ő számoltatja ki és kapja meg az eredményt.

## 5. Fizikai környezet
A projektről:
- A projekt webes felületen keresztül működik de telefonokon és tableteken is használható.
- A weboldalhoz igénybe vételéhez csupán egy internetes böngészőre van szükségünk.
- A weboldal futtatása bármilyen operációs rendszeren és böngészőben elérhető lesz.

fejlesztéshez használt eszközök:
- Atom
- dillinger
- GitShark


## 6. Architekturális terv
- A weboldalhoz mindössze egy webböngészőre van szükség, amely képes JavaScript kódot futtani.

## 7. Tesztterv
- Folyamatos tesztelési procedúrák beiktatása a weboldal fejlesztése közben.
- Tesztelni kell az adatok bevitelének gördülékenységét és az eredmények megbízhatóságát, illetve hogy minden esetben a megfelelő hibaüzenetet kapjuk.

## 8. Telepítési terv
- Nem szükséges telepítés, böngészőből minden eszközön futtatható.

## 9. Karbantartási terv
- A weboldal frissítési jogát fenntartjuk.
- Több matematikai megoldó algoritmus hozzáadása.
- Az oldal helyes működésének heti rendszerességgel történő ellenőrzése.

## 10. Elvégzett tesztek
## 10.1 Hibás tesztek
	- A háromszög oldal kerület/terület számításának tesztje.
	-- A weboldal hibásan jelenítette meg az oldalakból kiszámolt kerület és terület eredményeket.
	-- A hiba ki lett javítva.

	-A főoldal dizájn tesztje.
	-- A weboldal néha kéretlen szövegeket tartalmazott a főoldalon.
	-- A hiba ki lett javítva.

	- Sokszög oldal tesztje
	-- A weboldal sokszög kalkulátoránál a felhasználói inputok nem voltak helyesen kezelve.
	-- A hiba ki lett javítva.
