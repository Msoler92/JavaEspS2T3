use pizzeria

db.botigues.insertMany([
    {_id: "botiga1", adreca: {direccio: 'Carrer A, Porta 1', codi_postal: 'codi postal 1', localitat: 'localitat1', provincia: 'provincia1'}},
    {_id: "botiga2", adreca: {direccio: 'Carrer B, Porta 2', codi_postal: 'codi postal 2', localitat: 'localitat2', provincia: 'provincia1'}},
])

db.clients.insertMany([
    {_id: 'client1', nom: 'Client 1', cognoms: ['Cognom 11', 'Cognom 12'], adreca: {direccio: 'Carrer CA, Porta C1', codi_postal: 'codi postal C1', localitat: 'localitat1', provincia: 'provincia1'}, telefon: 111111111 },
    {_id: 'client2', nom: 'Client 2', cognoms: ['Cognom 21', 'Cognom 22'], adreca: {direccio: 'Carrer CB, Porta C2', codi_postal: 'codi postal C1', localitat: 'localitat1', provincia: 'provincia1'}, telefon: 222222222 },
    {_id: 'client3', nom: 'Client 3', cognoms: ['Cognom 31', 'Cognom 32'], adreca: {direccio: 'Carrer CC, Porta C3', codi_postal: 'codi postal C2', localitat: 'localitat1', provincia: 'provincia1'}, telefon: 333333333 },
])

db.productes.insertMany([
    {_id: 'producte1', nom: 'Producte 1', descripcio: 'Descipcio 1', imatge: null, preu: 4.0, tipus: 'pizza', categoria_id: 'categoria1' },
    {_id: 'producte2', nom: 'Producte 2', descripcio: 'Descipcio 2', imatge: null, preu: 4.0, tipus: 'pizza', categoria_id: 'categoria2' },
    {_id: 'producte3', nom: 'Producte 3', descripcio: 'Descipcio 3', imatge: null, preu: 5.5, tipus: 'hamburguesa' },
    {_id: 'producte4', nom: 'Producte 4', descripcio: 'Descipcio 4', imatge: null, preu: 5.5, tipus: 'hamburguesa' },
    {_id: 'producte5', nom: 'Producte 5', descripcio: 'Descipcio 5', imatge: null, preu: 2.5, tipus: 'beguda' },
    {_id: 'producte6', nom: 'Producte 6', descripcio: 'Descipcio 6', imatge: null, preu: 2.5, tipus: 'beguda' }
])

db.categories.insertMany([
    {_id: 'categoria1', nom: 'Pizza 1'},
    {_id: 'categoria2', nom: 'Pizza 2'}
])

db.personal.insertMany([
    {_id: 'personal1', botiga_id: 'botiga1', nom: 'Personal 1', cognoms: ['Cognom P11', 'Cognom P12'], nif: 'A11111111', telefon: 111111111, carrec: 'Cuina'},
    {_id: 'personal2', botiga_id: 'botiga1', nom: 'Personal 2', cognoms: ['Cognom P21', 'Cognom P22'], nif: 'B11111111', telefon: 111111111, carrec: 'Repartiment'},
    {_id: 'personal3', botiga_id: 'botiga1', nom: 'Personal 3', cognoms: ['Cognom P31', 'Cognom P32'], nif: 'C11111111', telefon: 111111111, carrec: 'Repartiment'},
    {_id: 'personal4', botiga_id: 'botiga2', nom: 'Personal 4', cognoms: ['Cognom P41', 'Cognom P42'], nif: 'D11111111', telefon: 111111111, carrec: 'Cuina'},
    {_id: 'personal5', botiga_id: 'botiga2', nom: 'Personal 5', cognoms: ['Cognom P51', 'Cognom P52'], nif: 'E11111111', telefon: 111111111, carrec: 'Repartiment'}
])

db.comandes.insertMany([
    {_id: 'comanda1', botiga_id: 'botiga1', client_id: 'client1', data_hora: new ISODate('2023-08-11T00:00:00Z'), repartiment: 'Domicili', tipus_productes: {num_pizzes: 1}, preu_total: 4.0, llista_productes: [{producte_id: 'producte1', quantitat: 1}], repartidor_id: 'personal2', hora_lliurament: new ISODate('2023-08-11T00:30:00Z')},
    {_id: 'comanda2', botiga_id: 'botiga1', client_id: 'client2', data_hora: new ISODate('2023-08-12T00:00:00Z'), repartiment: 'Botiga', tipus_productes: {num_hamburgueses: 2, num_begudes: 2}, preu_total: 16.0, llista_productes: [{producte_id: 'producte3', quantitat: 2}, {producte_id: 'producte5', quantitat: 1}, {producte_id: 'producte6', quantitat: 1}]},
    {_id: 'comanda3', botiga_id: 'botiga2', client_id: 'client3', data_hora: new ISODate('2023-08-13T00:00:00Z'), repartiment: 'Domicili', tipus_productes: {num_pizzes: 1, num_begudes: 1}, preu_total: 6.5, llista_productes: [{producte_id: 'producte2', quantitat: 1}, {producte_id: 'producte5', quantitat: 1}], repartidor_id: 'personal5', hora_lliurament: new ISODate('2023-08-13T00:30:00Z')},
    {_id: 'comanda4', botiga_id: 'botiga2', client_id: 'client3', data_hora: new ISODate('2023-08-14T00:00:00Z'), repartiment: 'Botiga', tipus_productes: {num_hamburgueses: 1}, preu_total: 5.5, llista_productes: [{producte_id: 'producte4', quantitat: 1}]}
])

db.comandes.insertOne(
    {_id: 'comanda1', botiga_id: 'botiga1', client_id: 'client1', repartiment: 'Domicili', tipus_productes: {num_pizzes: 1}, preu_total: 4.0, llista_productes: [{producte_id: 'producte1', quantitat: 1}], repartidor_id: 'personal2'}
)