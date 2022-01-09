# webtech_frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[![CI](https://github.com/s0578399/webtech_frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/s0578399/webtech_frontend/actions/workflows/ci.yml)

Willkommen bei THE PLANT SHOP.

Produkte: Hier können Sie durch verschiedene Produkte scrollen. Die Produkte können über den Button zum Warenkorb hinzugefügt werden. Durch Klicken auf die Produkte gelangt man zur Produkt-Einzelansicht.
Hier hat man ebenfalls die Möglichkeit, Produkte in den Warenkorb hinzuzufügen.

Warenkorb: Da es ja eine Anforderung war, mindestens eine Funktionalität dynamisch im Frontend und ohne Backend-Aufruf umzusetzen, habe ich mich hierbei für den Warenkorb entschieden. Dieser wird nicht in der Datenbank 
gespeichert, sondern lediglich im State. Aus diesem Grund leert sich der Warenkorb auch bei Aktualisieren der Website. Ich habe hierbei mit Vuex gearbeitet. Über den Warenkorb lässt sich außerdem die Bestellung abschließen.
Anschließend wird man auf eine Form-Page weitergeleitet um seine Daten einzugeben. Nach der Dateneingabe kann man die Bestellung abschließen. Die Bestellung wird dann im Backend gespeichert.

Admin-Seite: Über den Pfad '/admin' gelangt man zur Administrator Seite. Hier hat man die Möglichkeit Produkte zu erstellen, zu bearbeiten und zu löschen. Ebenfalls ist hier eine Übersicht über die eingegangenen Bestellungen
zu erreichen.
