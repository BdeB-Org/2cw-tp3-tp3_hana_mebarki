
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
      option.value = ville.visite_id;//**pour envoyer le formulaire à la base de donnée avec le id de la ville choisi */

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




  
//afficher les reservation
function afficherReservation() {
  let villeId = Number(document.getElementById("ville_a_visite").value);
  
  let villeId2 = Number(document.getElementById("ville_a_visite").value);
  let prix_par_personne;
  if(villeId2==1){
    prix_par_personne= 35;

  }
  else if(villeId2==2){
    prix_par_personne= 60;

  }
  else if(villeId2==3){
    prix_par_personne= 40;

  }
  else{
    prix_par_personne= null;
  }
  let nbPassage = Number(document.getElementById("nombre_passage").value);
 // document.getElementById("solde").innerHTML = ` ${nbPassage *prix_par_personne } $`;







    let reservation_id = 5;
    //"date_reservartion": new Date(document.getElementById("date").value).toISOString(),
    let date_reservation = document.getElementById("date").value;
    let touriste_touriste_id = 1 ;
    let autobus_autobus_id = Number(document.getElementById("autobus_choisi").value);
    let nombre_passager = Number(document.getElementById("nombre_passage").value);
    let type_repas = document.getElementById("contact-form-5-options").value;
    let visite_id = villeId ;
    let cout_total = Number(document.getElementById("solde").value);

    let data = `Reservation_id: ${reservation_id},</br> Date_reservation : ${date_reservation},</br> touriste_touriste_id: ${touriste_touriste_id},</br> Autobus_autobus_id: ${autobus_autobus_id},</br> Nombre_passager ${nombre_passager},</br> Type_repas: ${type_repas},</br> Visite_id: ${visite_id} ,</br> Cout_total: ${nbPassage *prix_par_personne } $`;


  document.getElementById("afficherReservation").innerHTML = `Votre réservation est : </br> </br> ${data}`
  console.log(data);





};

//afficher le solde totale
function afficherSolde(){
  let villeId2 = Number(document.getElementById("ville_a_visite").value);
  let prix_par_personne;
  if(villeId2==1){
    prix_par_personne= 35;

  }
  else if(villeId2==2){
    prix_par_personne= 60;

  }
  else if(villeId2==3){
    prix_par_personne= 40;

  }
  else{
    prix_par_personne= null;
  }
  let nbPassage = Number(document.getElementById("nombre_passage").value);
document.getElementById("solde").innerHTML = ` ${nbPassage *prix_par_personne } $`;
};