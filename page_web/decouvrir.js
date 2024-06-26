function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  //Main
  const emp_ul = document.getElementById("employees");
  
  const elemH1 = document.getElementById("h1");
  
  //const url = "http://127.0.0.1:8080/ords/hr2/employees";
  //autobus
  const url1 = "http://127.0.0.1:8080/ords/hr2/autobus";
  //ville visite
  const url2 = "http://127.0.0.1:8080/ords/hr2/visite";
  //new1
  const elemtTotal = document.getElementById("totalSalaire");
  //end1
  //new2
  const elemtMoyen = document.getElementById("MoyenSalaire");
  let nombre = 0 ;
  let totalSalaire = 0 ; // doit etre en dehors de la boucle
  //end2
  

  //afficher la liste des nom de visite
        //visite
 
        const emp_ul4 = document.getElementById("nomVisite");
        const elemH4 = document.getElementById("h4");
        //elemH4.innerHTML = "Liste des visites";
  function showList4() {
    // document.getElementById('numberList').style.display = 'block';
      
 

      fetch(url2)
        .then((resp) => resp.json())
        .then(function (data) {
          
          let visite = data.items; //.results;
          return visite.map(function (visite) {
            let li = createNode("li"),
              span = createNode("span");
        
              span.innerHTML = `${visite.nom_ville_visite} `;


            append(li, span);
            
            append(emp_ul4, li);


          });



            
        })

        .catch(function (error) {
          console.log(JSON.stringify(error));
        });

  }


  
  // JavaScript**********************afficher ville+Itinéraire********************
  // L’attribut src sera ajouté par la fonction afficherVille() lorsque l’utilisateur entre le nom d’une ville et clique sur le bouton “Rechercher”.
  function afficherVille() {
    var visite = document.getElementById('rechercheVille').value.trim();
  
    // Convertir en minuscules pour permettre la recherche insensible à la casse
    visite = visite.toLowerCase();
  
    fetch('http://127.0.0.1:8080/ords/hr2/visite?nom=' + visite)
        .then((resp) => resp.json())
        .then(function (data) {
            let employees = data.items;
            let results = employees.map(function (employee) {
                // Convertir en minuscules pour permettre la recherche insensible à la casse
                if (employee.nom_ville_visite.toLowerCase() === visite) {
                    return `${employee.nom_ville_visite} : ${employee.description_visite}. <br/>   La durée de la visite ${employee.duree_visite} . <br/>  Le prix pour une seul personne : ${employee.prix_par_personne} $` ;
                }
            }).filter(Boolean); // Enlève les valeurs undefined du tableau
  
            document.getElementById('visite').innerHTML = results.join('');
            
            //****le code pour changer l'image ici
            var imgElement = document.getElementById('ville-image');
            if (visite === '') {
                imgElement.src = './media/defaut.jpg'; // Assurez-vous que le dossier media dans le dossier page.web 
            }else if (visite === 'montréal') {
                imgElement.src = './media/montreal.jpg'; 
            } else if (visite === 'toronto') {
                imgElement.src = './media/toronto.jpg'; 
            } else if (visite === 'vancouver') {
              imgElement.src = './media/vancouver.jpg'; 
            } else {
                imgElement.src = './media/defaut.jpg';
            }

            //*****le code pour changer l'Itinéraire  ici
            var itineraireElement = document.getElementById('ville-itineraire');
            //pour google map 
            var carteElement = document.getElementsByClassName('contact13-iframe')[0];
            if (visite === '') {
              itineraireElement.src = ''; 
              carteElement.style.minHeight ='0px';
              carteElement.style.minWidth= '0px';
            }else if (visite === 'montréal') {
              itineraireElement.src = 'https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d178896.57776969406!2d-73.78775292602917!3d45.52507850114689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m3!3m2!1d45.4209593!2d-73.94924259999999!4m5!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!3m2!1d45.501886899999995!2d-73.56739189999999!4m3!3m2!1d45.558254399999996!2d-73.5486494!4m5!1s0x4cc91fa9f0a64aef%3A0x5362cc265cc0047d!2sElevation%20Trampoline%20%26%20Amusement%20Montreal!3m2!1d45.5991923!2d-73.6102314!4m3!3m2!1d45.507625399999995!2d-73.70197499999999!5e0!3m2!1sen!2sca!4v1716110908901!5m2!1sen!2sca" width="800" height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'; // Assurez-vous que le chemin est correct
              carteElement.style.minHeight ='500px';
              carteElement.style.minWidth= '500px';
              carteElement.style.objectFit='cover';
            } else if (visite === 'toronto') {
              itineraireElement.src = 'https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d92347.67521729026!2d-79.56338015133561!3d43.671780524008035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m3!3m2!1d43.6398029!2d-79.3862642!4m5!1s0x882b34baf3dae513%3A0xc98434e11ec5f592!2sRoyal%20Ontario%20Museum!3m2!1d43.667709699999996!2d-79.3947771!4m3!3m2!1d43.7132697!2d-79.5363457!4m3!3m2!1d43.6264189!2d-79.55669549999999!4m5!1s0x882b34487d77343d%3A0x33e9eaec105c7d18!2sMuseum%20of%20Contemporary%20Art%E2%80%A6!3m2!1d43.6546127!2d-79.44520179999999!5e0!3m2!1sen!2sca!4v1716232770335!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'; // Assurez-vous que le chemin est correct
              carteElement.style.minHeight ='500px';
              carteElement.style.minWidth= '500px';
              carteElement.style.objectFit='cover';
            } else if (visite === 'vancouver') {
               itineraireElement.src = 'https://www.google.com/maps/embed?pb=!1m56!1m12!1m3!1d49530.60282701415!2d-123.20058101138514!3d49.27390263220549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m41!3e0!4m5!1s0x548671e4314afbf5%3A0x3e51e1a4f59d56fa!2sPont%20Lions%20Gate!3m2!1d49.315048!2d-123.1390072!4m5!1s0x54867228ab52352f%3A0xf584d109e05deb6e!2sA-maze-ing%20Laughter!3m2!1d49.287599099999994!2d-123.14192039999999!4m4!1s0x5486719d24e2e021%3A0xb7057fe085c86109!3m2!1d49.2888248!2d-123.11112089999999!4m4!1s0x548671638bf0919d%3A0x218237371f987037!3m2!1d49.273376!2d-123.10383399999999!4m5!1s0x5486740e720fbd91%3A0x757a6159f98abf22!2sMountain%20View%20Cemetery%20-%20City%20of%20Vancouver!3m2!1d49.2347836!2d-123.0930034!4m5!1s0x5486738678c76dc1%3A0x88c158f58601257!2sJardin%20Botanique%20de%20VanDusen!3m2!1d49.239568999999996!2d-123.1325406!4m5!1s0x5486728d6fbc105d%3A0x6de6f0c9aa88282d!2sSpanish%20Banks%20Beach!3m2!1d49.2764679!2d-123.2132618!5e0!3m2!1sfr!2sca!4v1716228676331!5m2!1sfr!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'; // Assurez-vous que le chemin est correct
               carteElement.style.minHeight ='500px';
               carteElement.style.minWidth= '500px';
               carteElement.style.objectFit='cover';
              }else {
              itineraireElement.src = ''; 
              carteElement.style.minHeight ='0px';
              carteElement.style.minWidth= '0px';
              
            }
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}
   
  //pour commentaire
  
  function createNode(element) {
    return document.createElement(element);
}

function createTestimonial(commentaire) {
    let divContainer = createNode("div"),
        divInner = createNode("div"),
        img = createNode("img"),
        strong = createNode("strong"),
        divLine = createNode("div"),
        span = createNode("span");

    // Ajoutez les classes aux éléments
    divContainer.classList.add("commentaire-container2", "thq-card");
    divInner.classList.add("commentaire-container3");
    img.classList.add("commentaire-image");
    strong.classList.add("commentaire-text4", "thq-body-large");
    divLine.classList.add("commentaire-container4");
    span.classList.add("commentaire-text5", "thq-body-small");

    // Définissez les attributs des éléments
    img.src = "https://play.teleporthq.io/static/svg/default-img.svg";
    img.alt = "image";
    strong.textContent = `Touriste ${commentaire.touriste_touriste_id} `;
    //span.textContent = `${commentaire.touriste_touriste_id} ${commentaire.text}`;
    span.textContent = ` ${commentaire.text}`;

    // Ajoutez les éléments au div interne
    divInner.appendChild(img);
    divInner.appendChild(strong);
    divInner.appendChild(divLine);

    // Ajoutez le div interne et le span au div conteneur
    divContainer.appendChild(divInner);
    divContainer.appendChild(span);

    return divContainer;
}

const url3 = "http://127.0.0.1:8080/ords/hr2/commentaire";

fetch(url3)
.then((resp) => resp.json())
.then(function (data) {
    let commentaires = data.items;
    let divListeCommentaires = document.getElementById('listeCommentaires');

    return commentaires.map(function (commentaire) {
        let testimonial = createTestimonial(commentaire);

        // Ajoutez le témoignage à la liste des commentaires
        divListeCommentaires.appendChild(testimonial);
    });
})
.catch(function (error) {
    console.log(JSON.stringify(error));
});
  //fin d afficher commentaire
  
  //requete post pour commentaire
  let dernierCommentaireId;
  
  document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    //let commentaire_id = document.getElementById('commentaire_id').value;  //sera incrementer de commentaire le plus recent
    let text = document.getElementById('text').value;
    //**on toujours utilise le touriste id 1(compt par defaut) car on n a pas creer un compte on peut comme meme envoyer notre commentaire comme anonyme */
    let touriste_touriste_id = 1;
    
    let data = {
        "commentaire_id": dernierCommentaireId,
        "text": text,
        "touriste_touriste_id": touriste_touriste_id
    };
  
    fetch('http://localhost:3000/submit-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Ajouter le nouveau commentaire à la liste
      let li = createNode("li"),
        span = createNode("span");
      span.innerHTML = `${data.commentaire_id} ${data.text} ${data.touriste_touriste_id} `;
      append(li, span);
      append(emp_ul, li);// Mettre à jour dernierCommentaireId avec l'ID du nouveau commentaire
      dernierCommentaireId = data.commentaire_id;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  });
  //dernier commentaire est celui avec le plus grand commentaire_id
   
  
  fetch(url3) 
    .then((resp) => resp.json())
    .then(function (data) {
      
      if (!data || !data.items) {
        console.error('Données non valides reçues de l\'API');
        return;
      }
  
      let commentaires = data.items;
      // Trier les commentaires par ID en ordre décroissant
      commentaires.sort((a, b) => b.commentaire_id - a.commentaire_id);
      
      // Prendre le premier commentaire (qui a l'ID le plus grand)
      let dernierCommentaire = commentaires[0];
      
      if (!dernierCommentaire || dernierCommentaire.commentaire_id === undefined) {
        console.error('Commentaire non valide ou ID de commentaire indéfini');
        return;
      }
  
      let li = createNode("li"),
        span = createNode("span");
      span.innerHTML = `${dernierCommentaire.commentaire_id} ${dernierCommentaire.text} ${dernierCommentaire.touriste_touriste_id} `;
      /*
      append(li, span);
      append(emp_ul, li);
      */
  
      dernierCommentaireId = dernierCommentaire.commentaire_id;
    })
    .then(() => {
      // Après la boucle, dernierCommentaireId contient l'ID du dernier commentaire
      console.log("ID du dernier commentaire : ", dernierCommentaireId);
    })
    .catch(function (error) {
      console.error('Erreur lors de la récupération des commentaires :', error);
    });
  
  
  //chauque fois que l utilisateur click entree
  function incrementer(){
    dernierCommentaireId++;
  }
  
  //fin afficher dernier commentaire
  
  

  
  
  

  
  //pour touriste 
  const url4 = "http://127.0.0.1:8080/ords/hr2/touriste";
  
      fetch(url4)
      .then((resp) => resp.json())
      .then(function (data) {
        
        let touristes = data.items; //.results;
        return touristes.map(function (touriste) {
          let li = createNode("li"),
            span = createNode("span");
         // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
         //modifier1
         span.innerHTML = `${touriste.touriste_id} ${touriste.nom} ${touriste.email} ${touriste.telephone} `;
  
          append(li, span);
          
          append(emp_ul, li);
              //new1  fait appele a data pour recevoir 
        elemtTotal.innerHTML="total Salaire ="+totalSalaire+ "$";
        //end1
        //new2  
        let SalaireMoyen = totalSalaire/nombre;
        elemtMoyen.innerHTML="Salaire moyen ="+SalaireMoyen+ "$";
        //end2
    
    
    
        });
        
        
    })
  
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
  
  