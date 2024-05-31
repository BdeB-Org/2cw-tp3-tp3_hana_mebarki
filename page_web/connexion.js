    //ville visite
    //pour autobus

    function createNode(element) {
        return document.createElement(element);
      }
      
      function append(parent, el) {
        return parent.appendChild(el);
      }
      //Main


      //touriste
       const url1 = "http://127.0.0.1:8080/ords/hr2/touriste";
       const emp_ul = document.getElementById("utilisateur");
       const elemH1 = document.getElementById("h1"); //titre de la liste
       elemH1.innerHTML = "Liste des utilisateur";


      //autobus
      const url2 = "http://127.0.0.1:8080/ords/hr2/autobus"; 
      const emp_ul2 = document.getElementById("autobus");
      const elemH2 = document.getElementById("h2");
      elemH2.innerHTML = "Liste des autobus";
      //reservation  
      const url3 = "http://127.0.0.1:8080/ords/hr2/reservation"; 
      const emp_ul3 = document.getElementById("reservation");
      const elemH3 = document.getElementById("h3");
      elemH3.innerHTML = "Liste des reservations";
      //visite
      const url4 = "http://127.0.0.1:8080/ords/hr2/visite"; 
      const emp_ul4 = document.getElementById("visite");
      const elemH4 = document.getElementById("h4");
      elemH4.innerHTML = "Liste des visites";
      //commentaire
      const url5 = "http://127.0.0.1:8080/ords/hr2/commentaire"; 
      const emp_ul5 = document.getElementById("commentaire");
      const elemH5 = document.getElementById("h5");
      elemH5.innerHTML = "Liste des commentaires";


 //quand le utilisateur se connecte     
function login() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //  console.log(nom)
    //console.log(mot_passe)
    if((username ===  'Admin' || username ===  'admin')  && password === 'codeBleu'  ) {
      //quand on se connecte la page de se connecter disparait
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('arrierPlanConnection').style.display = 'none';
        //rendre visible les button et list pour affichier les listes de la base de donée
        document.getElementById('titrePageAdmin').style.display = 'block';
        document.getElementById('contentSectionUtilisateur').style.display = 'block';
        document.getElementById('contentSectionAutobus').style.display = 'block';
        document.getElementById('contentSectionReservation').style.display = 'block';
        document.getElementById('contentSectionVisite').style.display = 'block';
        document.getElementById('contentSectionCommentaire').style.display = 'block';
        
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
    }

  
    
     function createNode(element) {
        return document.createElement(element);
      }
      
      function append(parent, el) {
        return parent.appendChild(el);
      }
      //Main
      const emp_ul = document.getElementById("utilisateur");
      const elemH1 = document.getElementById("h1");
      elemH1.innerHTML = "Liste des utilisateur";


}
        function showList() {
           // document.getElementById('numberList').style.display = 'block';


            fetch(url1)
              .then((resp) => resp.json())
              .then(function (data) {
                
                let utilisateur = data.items; //.results;
                return utilisateur.map(function (utilisateur) {
                  let li = createNode("li"),
                    span = createNode("span");
              
                    span.innerHTML = ` Touriste_id : ${utilisateur.touriste_id}, Nom : ${utilisateur.nom}, Prenom : ${utilisateur.prenom}, Email : ${utilisateur.email}`;


                  append(li, span);
                  
                  append(emp_ul, li);


                });



                  
              })

              .catch(function (error) {
                console.log(JSON.stringify(error));
              });

        }


        //afficher liste des autobus
        function showList2() {
          // document.getElementById('numberList').style.display = 'block';


           fetch(url2)
             .then((resp) => resp.json())
             .then(function (data) {
               
               let autobus = data.items; //.results;
               return autobus.map(function (autobus) {
                 let li = createNode("li"),
                   span = createNode("span");
             
                   span.innerHTML = ` Autobus_id : ${autobus.autobus_id}, Modele : ${autobus.modele}, Capacite : ${autobus.capacite}, Disponibilite : ${autobus.disponibilite}`;


                 append(li, span);
                 
                 append(emp_ul2, li);


               });



                 
             })

             .catch(function (error) {
               console.log(JSON.stringify(error));
             });

       }





      //afficher liste des reservation
      function showList3() {
        // document.getElementById('numberList').style.display = 'block';
      

          fetch(url3)
            .then((resp) => resp.json())
            .then(function (data) {
              
              let reservation = data.items; //.results;
              return reservation.map(function (reservation) {
                let li = createNode("li"),
                  span = createNode("span");
            
                  span.innerHTML = ` Reservation_id : ${reservation.reservation_id}, Date_reservation : ${reservation.date_reservation}, Nombre_passager : ${reservation.nombre_passager}, Type_repas : ${reservation.type_repas}, Touriste_touriste_id : ${reservation.touriste_touriste_id}, Visite_visite_id : ${reservation.visite_visite_id}, Autobus_autobus_id : ${reservation.autobus_autobus_id}, cout_total ${reservation.cout_total}`;


                append(li, span);
                
                append(emp_ul3, li);


              });



                
            })

            .catch(function (error) {
              console.log(JSON.stringify(error));
            });

      }
                        //afficher liste des visite
      function showList4() {

          fetch(url4)
            .then((resp) => resp.json())
            .then(function (data) {
              
              let visite = data.items; //.results;
              return visite.map(function (visite) {
                let li = createNode("li"),
                  span = createNode("span");
            
                  span.innerHTML = ` Visite_id : ${visite.visite_id}, Nom_ville_visite : ${visite.nom_ville_visite}, Description_visite : ${visite.description_visite}, Duree_visite : ${visite.duree_visite}, Prix_par_personne : ${visite.prix_par_personne}`;


                append(li, span);
                
                append(emp_ul4, li);


              });



                
            })

            .catch(function (error) {
              console.log(JSON.stringify(error));
            });

      }



      //afficher liste des commentaire
      function showList5() {
        // document.getElementById('numberList').style.display = 'block';
          
          document.getElementById('affichage').style.display = 'block';
          
          document.getElementById('commentaire').style.display = 'block';

          document.getElementById('root').style.display = 'block';
          
          document.getElementById('contentSectionCommentaire').style.display = 'block';

          fetch(url5)
            .then((resp) => resp.json())
            .then(function (data) {
              
              let commentaire = data.items; //.results;
              return commentaire.map(function (commentaire) {
                let li = createNode("li"),
                  span = createNode("span");
            
          //      span.innerHTML = `${commentaire.commentaire_id} ${commentaire.text} ${commentaire.touriste_touriste_id}`;
                  span.innerHTML = ` Commentaire_id : ${commentaire.commentaire_id}, Text : ${commentaire.text}, Touriste_touriste_id : ${commentaire.touriste_touriste_id}`;



                append(li, span);
                
                append(emp_ul5, li);


              });



                
            })

            .catch(function (error) {
              console.log(JSON.stringify(error));
            });

      }
    