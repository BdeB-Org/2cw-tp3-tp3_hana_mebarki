 
   //ville visite
   const url2 = "http://127.0.0.1:8080/ords/hr2/visite";
   //autobus touristique
   const url1 = "http://127.0.0.1:8080/ords/hr2/autobus";
   //reservateion
   const url3 = "http://127.0.0.1:8080/ords/hr2/panier_reservation";
 //pour creer de Option de visite à une ville
  
  function createNode(element) {
    return document.createElement(element);
}

fetch(url2)
.then((resp) => resp.json())
.then(function (data) {
    let villes = data.items;
    let select = document.getElementById('ville_a_visite');

    return villes.map(function (ville) {
        let option = createNode("option");

        // Définissez le texte de l'option sur le nom de la ville
        option.textContent = ville.nom_ville_visite;
        // Définissez la valeur de l'option sur l'ID de la ville
        option.value = ville.ville_id;//**pour envoyer le formulaire à la base de donnée avec le id de la ville choisi */

        // Ajoutez l'option à la liste déroulante
        select.appendChild(option);
        console.log(option.value);
    });
})
.catch(function (error) {
    console.log(JSON.stringify(error));
});
//fin creer de option de visite ville





//creer option modele d autobus touristique choisi

fetch(url1)
.then((resp) => resp.json())
.then(function (data) {
    let autobus = data.items;
    let select = document.getElementById('autobus_choisi');

    return autobus.map(function (bus) {
        // Afficher les données de l'autobus dans la console
        console.log(`AUTOBUS_ID: ${bus.autobus_id}, MODELE: ${bus.modele}, CAPACITE: ${bus.capacite}, DISPONIBILITE: ${bus.disponibilite}`);

        let option = createNode("option");

        // Définir le texte de l'option pour inclure l'ID, le modèle, la capacité et la disponibilité de l'autobus
        option.textContent = `AUTOBUS_ID: ${bus.autobus_id}, ${bus.modele}, CAPACITE: ${bus.capacite}, ${bus.disponibilite}`;
        // Définissez la valeur de l'option sur l'ID de la ville
        option.value = bus.autobus_id;//**pour envoyer le formulaire à la base de donnée avec le id du bus choisi */
        // Ajouter l'option à la liste déroulante
        select.appendChild(option);
        console.log(option.value);
    });
})
.catch(function (error) {
    console.log(JSON.stringify(error));
});

function createNode(element) {
    return document.createElement(element);
}
/*
fetch(url1)
.then((resp) => resp.json())
.then(function (data) {
    let autobus = data.items;
    let select = document.getElementById('autobus_choisi');

    // Parcourir chaque autobus
    return autobus.map(function (bus) {
        let option = createNode("option");

        // Définir le texte de l'option sur le modèle de l'autobus
        option.textContent = bus.modele;

        // Ajouter l'option à la liste déroulante
        select.appendChild(option);
    });
})
.catch(function (error) {
    console.log(JSON.stringify(error));
});

// Écouter l'événement de changement sur la liste déroulante
document.getElementById('autobus_choisi').addEventListener('change', function() {
    let selectedModel = this.value;

    // Trouver l'autobus correspondant dans les données
    let selectedBus = autobus.find(bus => bus.modele === selectedModel);

    // Afficher les détails de l'autobus choisi
    document.getElementById('modele_disponibilitie_capacite').textContent = `Modèle: ${selectedBus.modele}, Capacité: ${selectedBus.capacite}, Disponibilité: ${selectedBus.disponibilite}`;
});
*/
//fin creer option modele d autobus touristique choisi


//requete poste du formulaire
/*
let dernierAutobusId;

document.getElementById('busForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let autobus_choisi = document.getElementById('autobus_choisi').value;
  let ville_a_visite = document.getElementById('ville_a_visite').value;
  
  let data = {
      "AUTOBUS_ID": dernierAutobusId,
      "autobus_choisi": autobus_choisi,
      "ville_a_visite": ville_a_visite
  };

  fetch('http://localhost:3000/submit-bus', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Mettre à jour dernierAutobusId avec l'ID du nouvel autobus
    dernierAutobusId = data.AUTOBUS_ID;
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});

// Chaque fois que l'utilisateur appuie sur entrée
function incrementer(){
  dernierAutobusId++;
}
*/
//fin de la requete de post

    //event.preventDefault();
    document.getElementById('busForm').addEventListener('submit', function(e) {
        e.preventDefault();
    let villeId = Number(document.getElementById("ville_a_visite").value);

    let data = {
        "reservation_id": 5,
        "date_reservartion": new Date(document.getElementById("date").value).toISOString(),
        //"date_reservation": document.getElementById("date").value,
        "touriste_touriste_id": 1,
        "autobus_autobus_id": Number(document.getElementById("autobus_choisi").value),
        "nombre_passager": Number(document.getElementById("nombre_passage").value),
        "type_repas": document.getElementById("contact-form-5-options").value,
        "visite_ville_id": villeId
    };
    
    fetch('http://localhost:3050/submit-panier_reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })

  });


//dernier reservation
let dernierReservationId;

fetch(url3) // Remplacez url3 par l'URL de l'API qui renvoie les réservations
    .then((resp) => resp.json())
    .then(function (data) {
      
      if (!data || !data.items) {
        console.error('Données non valides reçues de l\'API');
        return;
      }
  
      let reservations = data.items;
      // Trier les réservations par ID en ordre décroissant
      reservations.sort((a, b) => b.reservation_id - a.reservation_id);
      
      // Prendre la première réservation (qui a l'ID le plus grand)
      let derniereReservation = reservations[0];
      
      if (!derniereReservation || derniereReservation.reservation_id === undefined) {
        console.error('Réservation non valide ou ID de réservation indéfini');
        return;
      }
  
      dernierReservationId = derniereReservation.reservation_id;
    })
    .then(() => {
      // Après la boucle, dernierReservationId contient l'ID de la dernière réservation
      console.log("ID de la dernière réservation : ", dernierReservationId);
      
    })
    .catch(function (error) {
      console.error('Erreur lors de la récupération des réservations :', error);
    });
  
  
  // Chaque fois que l'utilisateur clique sur entrée
  function incrementer(){
    dernierReservationId++;

  }
