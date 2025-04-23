<p align="center"><img src="public/img/logo-full.png" width="300" alt="Laravel Logo"></a></p>

---

## Csoport tagjai

-   Dienes Kristóf ([DijensesKrit4oof](https://github.com/DijensesKrit4oof))
-   Dikácz Márton ([Gilbike](https://github.com/Gilbike))

## Az Inkliről röviden

Az Inkli egy közösségi történet megosztó oldal. Rövid, vagy akár hosszabb történeteket oszthatnak meg a felhasználók egymással, legyen az valós vagy kitalált. A közösség tagjai szabadon böngészhetnek a történetek között, előre meghatározott kategóriák mentén – például romantikus, sci-fi, humor vagy bármi más. Emellett lehetőségük van más felhasználókat követni, így mindig naprakészek lehetnek kedvenc íróik legújabb történeteivel kapcsolatban. A legjobb történeteket a szerkesztők kiemeltté nyilváníthatják, hogy több emberhez elérjen.

## A repository tartalma

Ez a repo tartalmazza az összes forrásfájlt a weboldalhoz. Továbbá a dokumentáció két fájlját és az adatbázis dump fájljait.

## A projekt dokumentációja

A projekt dokumentációja a `/documentation` mappában található. A felhasználói dokumentáció külön fájlban érhető el, de ugyanazon mappában.

## Az adatbázis dump fájljai

Minden dump fájl elérhető a `/database` mappában.

-   Tesztadat mentes dump fájl: `/database/database-dump.sql`
-   Tesztadattal feltöltött dump fájl: `/database/database-dump-seeded.sql`

## Telepítés

> Előfeltétel, hogy a számítógépen telepítve legyen a PHP, Composer illetve a Laravel.

> Az asztali alkalmazás futtatásához Windows operációs rendszer szükséges.

1. Cloneozza le a repot
2. Nyisson meg egy `terminál` ablakot a projekt mappájában
3. Futtassa a `composer install && npm i` parancsot
4. Másolja le a `.env.example` fájlt, az új fájlt nevezze át `.env`-re
5. Futtassa le a `php artisan key:generate` parancsot
6. Hozzon létre egy `database.sqlite` fájlt a `/database` mappában
7. Az adatbázis tábláinak létrehozásához futtassa a `php artisan migrate:fresh` parancsot
    > Amennyiben szeretné, hogy legyenek előre feltöltött teszt adatok, illetve admin felhasználó, tegye a parancs végére a `--seed` szót (`php artisan migrate:fresh --seed`)
8. Indítsa el a Laravel projektet a `composer run dev` parancs segítségével
9. A weboldal elérhető lesz a `https://localhost:8000/` URL-en
    > Amennyiben az adatbázis létrehozásakor tesztadatokkal töltötte azt fel, akkor létrehozásra került egy adminisztrátor felhasználó. Ennek bejelentkezési adatai:
    >
    > - Email: admin@inkli.com
    > - Jelszó: password
