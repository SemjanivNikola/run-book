<div align="center">
<img src="./src/assets/logo.png" width="40%" alt="Run Book logo" />
<br>
<br>
<h1 align="center"><b>Run Book</b></h1>

[![](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
<br>
[![](https://img.shields.io/badge/AXIOS-00C7B7?style=for-the-badge&logo=axios&logoColor=white&color=black)](https://axios-http.com/docs/intro)
[![](https://img.shields.io/badge/Vuex-00C7B7?style=for-the-badge)](https://vuex.vuejs.org)
[![](https://img.shields.io/badge/Vue_router-00C7B7?style=for-the-badge&color=red)](https://www.router.vuejs.org/)
[![](https://img.shields.io/badge/V_form_builder-00C7B7?style=for-the-badge&color=white)](https://github.com/markocunj/vue-form-builder.git)

</div>

Aplikacija je dostupna na: https://run-book.vercel.app/

<br>

# Sadržaj
    1. Osnovne informacije
    2. Struktura projekta
    3. Kako koristiti projekt?
        1. Smjernice
            - Komunikacija sa serverom i vanjskim servisima
            - Stiliziranje komponenata
            - Form Builder
            - ENV
        2. Pokretanje lokalno

<br>

# 1. :information_source: Osnovne informacije

Ideja na kojoj se zasniva ovaj projekt je prikazivanje procesa korisniiku na jednostavan i razumljiv način. To je ujedno i glavno obilježje oko koje je izgrađena. Trenutno je zamišljena kao predložak s intuitivnim sučeljem na kojeg će se kasnije graditi i dorađivati. Procesi koji se prikazuju kreirani su na drugome mjestu koje spada pod jedan veliki sustav koji upravlja procesima, tako da je ova aplikacija sam jedan dio sustava. Procesi oko koje se bazira aplikacija grupirani su u tri kategorije:

- Pregled **aktivnih** procesa
- Pregled **dostupnih** procesa
- Pregled **arhiviranih** procesa

Svaka kategorija otvara mogućnost za detaljni pregled procesa, koji sadrži prikaz koraka koji su definirani unutar pojedinig procesa te prikaz definiranih informacija. Nebi trebalo biti puno informacija, jer to zapravo ima suprotan učinak od onoha što bi željeli postići, a to je jednostavnost. Znači prikazuju se samo osnovne, neophodne informacija koje moraju biti intuitivne.

Detalji procesa prikazani su na način da je sučelje prodjeljeno na dvije glavne grupe:

1. OSNOVNE INFORMACIJE
    - Naslov
    - Ukupni napredak riješenosti izražen u postotku
    - Proteklo vrijeme od pokretanja procesa
    - Prosječno vrijeme potrebno za završiti proces
    - Koliko je koraka riješeno

2. DETALJNE INFORMACIJE - podjeljene u 3 pregleda

    - Pregled koraka
    - Informacije o trenutnom koraku (opis ako je dodan uz određeni korak, vizualni prikaz trenutnog statusa, informacije karakteristične za korisnika  vezane uz taj korak)
    - Detalji cijelog procesa. Uključuju dodatni tekst ako postoji te vizualni prikaz koraka kroz listu sa statusom u kojem se nalazi taj korak, no nisu prikazani svi već samo riješeni, trenutni korak te sljedeći mogući koraci koji su ostali do kraja

<br>

# 2. Struktura projekta

```bash
|--- src
    |--- assets
        |--- ...
    |--- components
        |--- ...
```
Pod mapom ***components*** se nalaze komponente koje čine djelove sučelja te su sklone potpunom ili djelomičnom uređivanju.
```bash
    |--- router
    |     |--- index.js
    |--- screens
        |--- ...
```
Mapa ***screens*** sadržava konkretna sučelja aplikacije i nije predviđena za ništa drugo osim toga.
```bash
    |--- store
        |--- interfaces
            |--- store.ts
        |--- index.js
        |--- processStore.js
```
U projektu nije korišten *typescript*, međutim iskorištena je njegova mogćnost definiranja entiteta koji se koriste u komunikaciji između app i servera, te u međusobnoj komunikaciju aplikacijskih komponenata. Tako se na jednom mjestu, u datoteci ***store.ts*** nalaze definicije entiteta koji se koriste kroz aplikaciju.
```bash
    |--- styles
        |--- ...
    |--- types
        |--- StatusType.js
    |--- views
        |--- ...
```
Mapa ***view*** sadržava dijelove sučelja koji grade konkretnu stranicu. Ove komponente su izgrađene od komponenti za višekratnu upotrebu iz foldera ***components***.
```bash
    |-- App.vue
    |-- main.js
```
# 3. Kako koristiti projekt?

## Smjernice
- ### **Komunikacija sa serverom i vanjskim servisima**
    Sva komunikacija sa serverom i vanjskim servisima se odvija isključivo preko *store-a* koristeći *axios*.
- ### **Stiliziranje komponenata**
    Nisu korišteni paketi za stiliziranje ([bootstrap](https://bootstrap-vue.org/), [tailwind](https://tailwindcss.com/docs/installation), [vuetify](https://vuetifyjs.com/)), veće je cijeli stil aplikacije ručno prilagođen te su klase te su maksimalno iskoristive za daljnje razvijanje. Svi stilovi se nalaze u mapi **styles**.

    Jedini problem vezan uz stilove, je bio kod uključivanja stilova iz *v-form-builder-a* u *main.js* datoteci. To bi uzrokovao konflik između klasa definiranih u bootstrap-u i u aplikaciji.
    ```code
    import "v-form-builder/dist/v-form-builder.css";
    ```
    **Form builder** paket koristi bootstrap i bez njega sučelje nije izgledalo bi trebalo, tako da je riješenje bilo uzeti bootstrap klase koje se koriste u form builder-u i prilagoditi ih.

- ### **Form builder**
    To je paket koji generira formu s inputima prema podacima koje dobije. Podaci su točno definirani u [službenoj dokumentaciji](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/form-builder-starter). U projektu se koristi kada se od korisnika očekuje da ispuni određene podatke u svrhu riješavanja koraka na kojem se nalazi.

- ### **ENV**
    Prije samog pokretanja projekta potrebno je kreirati ***.env*** datoteku i definirati API prema kojem će se izvršavati pozivi u svrhu dohvaćanja podataka potrebnih za nesmetani rad aplikacije. 

    Zadana ruta za development:
    >VUE_APP_MANAGER_BASE_URL=http://localhost:3000

<br />

## Pokretanje lokalno

Klonirati [projekt](https://github.com/SemjanivNikola/run-book.git) s GitHub-a preko terminala:

> `git clone https://github.com/SemjanivNikola/run-book.git`

Otvoriti direktorij u tekst editoru ([WebStorm](https://www.jetbrains.com/webstorm/), [VS Code](https://code.visualstudio.com/)):

Instalirati potrebne pakete korišteći [npm](https://www.npmjs.com/):
```
npm install
```
Pokrenuti projekt komandom:
```
npm run start
```

Ili korišteći [yarn](https://yarnpkg.com/):

```
$ yarn install
```

```
$ yarn run start
```
