use optica
db.proveidors.insertMany([
    {_id: "proveidors1", nom: "Proveidor 1", adreca: "Carrer A, porta 1", telefon: 913488771, fax: 913488773, nif: "X37844719", marques: ["Marca 1", "Marca 2"] },
    {_id: "proveidors2", nom: "Proveidor 2", adreca: "Carrer B, porta 2", telefon: 923488771, fax: 923488773, nif: "Y37844719", marques: ["Marca 3"] },
    {_id: "proveidors3", nom: "Proveidor 3", adreca: "Carrer C, porta 3", telefon: 933488771, fax: 933488773, nif: "Z37844719", marques: ["Marca 4"] }
])

db.ulleres.insertMany([
    {_id: "ulleres1", marca: "Marca 1", vidre_dret: {graduacio: 1.5, color: null}, vidre_esq: {graduacio: 0.25, color: null}, muntura_tipus: "Flotant", muntura_color: "Verd", preu: 22.99, venda: {client_id: "clients2", empleat: "Joana Fernández"}},
    {_id: "ulleres2", marca: "Marca 2", vidre_dret: {graduacio: 1.0, color: null}, vidre_esq: {graduacio: 1.25, color: null}, muntura_tipus: "Flotant", muntura_color: "Verd", preu: 22.99},
    {_id: "ulleres3", marca: "Marca 3", vidre_dret: {graduacio: 2.25, color: "Negre"}, vidre_esq: {graduacio: 2.25, color: "Negre"}, muntura_tipus: "Pasta", muntura_color: "Negre", preu: 19.99, venda: {client_id: "clients1", empleat: "Joana Fernández"}},
    {_id: "ulleres4", marca: "Marca 4", vidre_dret: {graduacio: 1.25, color: null}, vidre_esq: {graduacio: 0.5, color: null}, muntura_tipus: "Metalica", muntura_color: "Vermell", preu: 24.99, venda: {client_id: "clients3", empleat: "Joana Fernández"}},
    {_id: "ulleres5", marca: "Marca 5", vidre_dret: {graduacio: 0.5, color: null}, vidre_esq: {graduacio: 0.25, color: null}, muntura_tipus: "Pasta", muntura_color: "Blau", preu: 40.99}
])

db.clients.insertMany([
    {_id: "clients1", nom: "Nom1 Cognoms1", adreca_postal: "Carrer C1, porta A", telefon: 913847663, email: "nom1@example.com", data_registre: "2020-01-01", client_referencia_id: null},
    {_id: "clients2", nom: "Nom2 Cognoms2", adreca_postal: "Carrer C2, porta B", telefon: 913847663, email: "nom1@example.com", data_registre: "2020-01-01", client_referencia_id: "clients1"},
    {_id: "clients3", nom: "Nom3 Cognoms3", adreca_postal: "Carrer C3, porta B", telefon: 913847663, email: "nom1@example.com", data_registre: "2020-01-01", client_referencia_id: "clients1"}
])
