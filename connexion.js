    //ville visite
    //pour autobus

    function createNode(element) {
        return document.createElement(element);
      }
      
      function append(parent, el) {
        return parent.appendChild(el);
      }
      //Main
      const emp_ul = document.getElementById("utilisateur");
      const elemH1 = document.getElementById("h1");
    const url1 = "http://127.0.0.1:8080/ords/hr2/touriste";
    elemH1.innerHTML = "Liste des utilisateur";


      //autobus
      const url2 = "http://127.0.0.1:8080/ords/hr2/autobus"; 
      //reservation  
      const url3 = "http://127.0.0.1:8080/ords/hr2/reservation"; 
      //visite
      const url4 = "http://127.0.0.1:8080/ords/hr2/visite"; 
      //commentaire
      const url5 = "http://127.0.0.1:8080/ords/hr2/commentaire"; 
function login() {





    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //  console.log(nom)
    //console.log(mot_passe)
    if((username ===  'Admin' || username ===  'admin')  && password === 'codeBleu'  ) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('contentSection').style.display = 'block';
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
            
            document.getElementById('affichage').style.display = 'block';
            
            document.getElementById('utilisateur').style.display = 'block';

            document.getElementById('root').style.display = 'block';
            
            document.getElementById('contentSection').style.display = 'block';

            fetch(url1)
              .then((resp) => resp.json())
              .then(function (data) {
                
                let utilisateur = data.items; //.results;
                return utilisateur.map(function (utilisateur) {
                  let li = createNode("li"),
                    span = createNode("span");
              
                    span.innerHTML = `${utilisateur.touriste_id} ${utilisateur.nom} ${utilisateur.prenom} ${utilisateur.email}`;
                    document.write= `${utilisateur.touriste_id} ${utilisateur.nom} ${utilisateur.prenom} ${utilisateur.email}`;


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
           
           document.getElementById('affichage').style.display = 'block';
           
           document.getElementById('autobus').style.display = 'block';

           document.getElementById('root').style.display = 'block';
           
           document.getElementById('contentSection').style.display = 'block';

           fetch(url2)
             .then((resp) => resp.json())
             .then(function (data) {
               
               let autobus = data.items; //.results;
               return autobus.map(function (autobus) {
                 let li = createNode("li"),
                   span = createNode("span");
             
                   span.innerHTML = `${autobus.autobus_id} ${autobus.modele} ${autobus.capacite} ${autobus.disponibilite}`;
                   document.write= `${autobus.autobus_id} ${autobus.modele} ${autobus.capacite} ${autobus.disponibilite}`;


                 append(li, span);
                 
                 append(emp_ul, li);


               });



                 
             })

             .catch(function (error) {
               console.log(JSON.stringify(error));
             });

       }



  

                    //afficher liste des reservation
                    function showList3() {
                      // document.getElementById('numberList').style.display = 'block';
                        
                        document.getElementById('affichage').style.display = 'block';
                        
                        document.getElementById('reservation').style.display = 'block';
            
                        document.getElementById('root').style.display = 'block';
                        
                        document.getElementById('contentSection').style.display = 'block';
            
                        fetch(url3)
                          .then((resp) => resp.json())
                          .then(function (data) {
                            
                            let reservation = data.items; //.results;
                            return reservation.map(function (reservation) {
                              let li = createNode("li"),
                                span = createNode("span");
                          
                                span.innerHTML = `${reservation.reservation_id} ${reservation.date_reservation} ${reservation.nombre_passager} ${reservation.type_repas}  ${reservation.touriste_touriste_id}  ${reservation.visite_visite_id}  ${reservation.autobus_autobus_id}  ${reservation.cout_total}`;
                                document.write= `${reservation.reservation_id} ${reservation.date_reservation} ${reservation.nombre_passager} ${reservation.type_repas}  ${reservation.touriste_touriste_id}  ${reservation.visite_visite_id}  ${reservation.autobus_autobus_id}  ${reservation.cout_total}`;
            
            
                              append(li, span);
                              
                              append(emp_ul, li);
            
            
                            });
            
            
            
                              
                          })
            
                          .catch(function (error) {
                            console.log(JSON.stringify(error));
                          });
            
                    }
                            //afficher liste des visite
          function showList4() {
            // document.getElementById('numberList').style.display = 'block';
              
              document.getElementById('affichage').style.display = 'block';
              
              document.getElementById('visite').style.display = 'block';
  
              document.getElementById('root').style.display = 'block';
              
              document.getElementById('contentSection').style.display = 'block';
  
              fetch(url4)
                .then((resp) => resp.json())
                .then(function (data) {
                  
                  let visite = data.items; //.results;
                  return visite.map(function (visite) {
                    let li = createNode("li"),
                      span = createNode("span");
                
                      span.innerHTML = `${visite.visite_id} ${visite.nom_ville_visite} ${visite.description_visite} ${visite.duree_visite}  ${visite.prix_par_personne}`;
                      document.write= `${visite.visite_id} ${visite.nom_ville_visite} ${visite.description_visite} ${visite.duree_visite}  ${visite.prix_par_personne}`;

  
                    append(li, span);
                    
                    append(emp_ul, li);
  
  
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
              
              document.getElementById('contentSection').style.display = 'block';
  
              fetch(url5)
                .then((resp) => resp.json())
                .then(function (data) {
                  
                  let commentaire = data.items; //.results;
                  return commentaire.map(function (commentaire) {
                    let li = createNode("li"),
                      span = createNode("span");
                
                      span.innerHTML = `${commentaire.commentaire_id} ${commentaire.text} ${commentaire.touriste_touriste_id}`;
                      document.write= `${commentaire.commentaire_id} ${commentaire.text} ${commentaire.touriste_touriste_id}`;

  
                    append(li, span);
                    
                    append(emp_ul, li);
  
  
                  });
  
  
  
                    
                })
  
                .catch(function (error) {
                  console.log(JSON.stringify(error));
                });
  
          }