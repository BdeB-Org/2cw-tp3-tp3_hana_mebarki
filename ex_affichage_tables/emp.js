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

elemH1.innerHTML = "Liste des employees";
/*
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
     // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
     //modifier1
   // span.innerHTML = `${employee.autobus_id} ${employee.modele} ${employee.capacité} ${employee.disponibilite}`;

   //**  span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job} ${employee.sal}`;
     totalSalaire += employee.sal;
     //end1
     //new2 pour moyenne calculer nombre des employees
     nombre++;
     //end2
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
  */


//pour autobus
  fetch(url1)
  .then((resp) => resp.json())
  .then(function (data) {
    
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
     // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
     //modifier1
    span.innerHTML = `${employee.autobus_id} ${employee.modele} ${employee.capacité} ${employee.disponibilite}`;
   // span.innerHTML = `${employee.ville_id} ${employee.nom} ${employee.description} `;
  //  span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job} ${employee.sal}`;
     totalSalaire += employee.sal;
     //end1
     //new2 pour moyenne calculer nombre des employees
     nombre++;
     //end2
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

  //pour visite à une ville

  fetch(url2)
  .then((resp) => resp.json())
  .then(function (data) {
    
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
     // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
     //modifier1
      span.innerHTML = `${employee.ville_id} ${employee.nom_ville_visite} ${employee.description_visite} `;
     totalSalaire += employee.sal;
     //end1
     //new2 pour moyenne calculer nombre des employees
     nombre++;
     //end2
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


// JavaScript
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
                  return `${employee.nom_ville_visite} ${employee.description_visite}`;
              }
          }).filter(Boolean); // Enlève les valeurs undefined du tableau

          document.getElementById('visite').innerHTML = results.join('');
      })
      .catch(function (error) {
          console.log(JSON.stringify(error));
      });
}
 
//pour commentaire

const url3 = "http://127.0.0.1:8080/ords/hr2/comentaire";

fetch(url3)

.then((resp) => resp.json())
.then(function (data) {
  
  let comentaires = data.items;
  let ul = document.getElementById('listeCommentaires');

  return comentaires.map(function (comentaire) {
    let li = createNode("li"),
      span = createNode("span");

    span.innerHTML = `${comentaire.touriste_touriste_id} ${comentaire.texte} `;

    // Ajoutez le span à l'élément li
    li.appendChild(span);

    // Ajoutez l'élément li à l'élément ul
    ul.appendChild(li);
  });
})
.catch(function (error) {
  console.log(JSON.stringify(error));
});

//requete post pour commentaire
let dernierCommentaireId;

document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  //let commentaire_id = document.getElementById('commentaire_id').value;  //sera incrementer de comentaire le plus recent
  let texte = document.getElementById('texte').value;
  let touriste_touriste_id = document.getElementById('touriste_touriste_id').value;
  
  let data = {
      "commentaire_id": dernierCommentaireId,
      "texte": texte,
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
    span.innerHTML = `${data.commentaire_id} ${data.texte} ${data.touriste_touriste_id} `;
    append(li, span);
    append(emp_ul, li);// Mettre à jour dernierCommentaireId avec l'ID du nouveau commentaire
    dernierCommentaireId = data.commentaire_id;
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});
//dernier commentaire est celui avec le plus grand commentaire_id
 

fetch(url3) // Remplacez url3 par l'URL de l'API qui renvoie les commentaires
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
    let dernierComentaire = commentaires[0];
    
    if (!dernierComentaire || dernierComentaire.commentaire_id === undefined) {
      console.error('Commentaire non valide ou ID de commentaire indéfini');
      return;
    }

    let li = createNode("li"),
      span = createNode("span");
    span.innerHTML = `${dernierComentaire.commentaire_id} ${dernierComentaire.texte} ${dernierComentaire.touriste_touriste_id} `;

    append(li, span);
    append(emp_ul, li);

    dernierCommentaireId = dernierComentaire.commentaire_id;
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


//autre facon
/*
window.onload = function() {
  fetch('http://localhost:3000/last-comment-id')
  .then(response => response.json())
  .then(data => {
    dernierCommentaireId = data.commentaire_id;
    console.log(dernierCommentaireId);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
};
*/

//fin de la requete post







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

 
//enter un commentaire dans la base de donnée ******
/*
let dernierComentaireId= 0004;


// JavaScript

document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche le rechargement de la page

  let comment = document.getElementById('comment').value;
  let touristeId = dernierTouristeId ; // Remplacez ceci par la manière dont vous obtenez l'ID du touriste
  let ul = document.getElementById('listeCommentaires');

*/

/*
document.getElementById("commentForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  try {
      const response = await fetch("your_server_endpoint", {
          method: "POST",
          body: formData,
      });
      if (response.ok) {
          alert("Data saved successfully!");
      } else {
          alert("Error saving data.");
      }
  } catch (error) {
      console.error("An error occurred:", error);
  }
});
*/

  // Obtenez le dernier commentaire
  /*
  fetch(url3)
  .then(response => response.json())
  .then(data => {
    // Trouvez l'ID du dernier commentaire et incrémentez-le
    let lastCommentId = Math.max(data.items.map(item => item.commentaire_id)) + 1;

    // Envoyez la requête POST avec le nouvel ID de commentaire
    return fetch(url3, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({commentaire_id: lastCommentId, texte: comment, touriste_touriste_id: touristeId}),
    });
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);

    // Créez un nouvel élément li et ajoutez le commentaire
    let li = document.createElement("li");
    li.textContent = comment;

    // Ajoutez l'élément li à l'élément ul
    ul.appendChild(li);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
*/

//On besoin de l id du dernier touriste
/*

let dernierTouristeId;

fetch(url4)
.then((resp) => resp.json())
.then(function (data) {
  
  let touristes = data.items;
  return touristes.map(function (touriste) {
    let li = createNode("li"),
      span = createNode("span");
   span.innerHTML = `${touriste.touriste_id} ${touriste.nom} ${touriste.email} ${touriste.telephone} `;

    append(li, span);
    
    append(emp_ul, li);

    dernierTouristeId = touriste.touriste_id;
  });

})
.then(() => {
  // Après la boucle, dernierTouristeId contient l'ID du dernier touriste
  console.log("ID du dernier touriste : ", dernierTouristeId);
})
.catch(function (error) {
  console.log(JSON.stringify(error));
});
*/

//post
/*
  let data = { COMMENTAIRE_ID: 0006,
    TEXTE: '80/100',
    TOURISTE_TOURISTE_ID: 3};

  fetch("http://127.0.0.1:8080/ords/hr2/comentaire", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
  }).then(res => {
    console.log("Request complete! response:", res);
  });
  //post

  fetch("http://127.0.0.1:8080/ords/hr2/comentaire", {
  method: "POST",
  body: JSON.stringify({
    COMMENTAIRE_ID: 0006,
    TEXTE: '80/100',
    TOURISTE_TOURISTE_ID: 3
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})

  .then((response) => response.json())
  .then((json) => console.log(json));
  */


// Appel de la fonction pour insérer les données


//inserer des donnée dans la table commentaire
// Les données que vous souhaitez insérer
/*
const data = {
  COMMENTAIRE_ID: '0005',
  TEXTE: 'impossible d oublier',
  TOURISTE_TOURISTE_ID: 3
};

fetch(url3, {
  method: 'POST', // Méthode HTTP pour l'insertion
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data) // Convertit les données en chaîne JSON
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Problème avec la requête');
  }
})
.then(data => {
  console.log('Données insérées avec succès:', data);
})
.catch(error => {
  console.error('Erreur:', error);
});
*/



/*
//inserer des donnée dans la table commentaire
const oracledb = require('oracledb');

async function insertCommentaire() {
  let connection;

  try {
    // Remplacez les valeurs user, password et connectString par vos propres informations de connexion
    connection = await oracledb.getConnection({
      user: 'restscott',
      password: 'oracle',
      connectString: 'localhost:1521/freepdb1'
    });

    const result = await connection.execute(
      `INSERT INTO commentaire (COMMENTAIRE_ID, TEXTE, TOURISTE_TOURISTE_ID)
       VALUES (:id, :texte, :touristeId)`,
      [5, 'impossible d oublier', 3], // Les valeurs à insérer
      { autoCommit: true } // Auto-commit après l'insertion
    );

    console.log('Row inserted:', result.rowsAffected);
  } catch (err) {
    console.error('Erreur lors de l\'insertion:', err);
  } finally {
    if (connection) {
      try {
        // Assurez-vous de fermer la connexion lorsque vous avez terminé
        await connection.close();
      } catch (err) {
        console.error('Erreur lors de la fermeture de la connexion:', err);
      }
    }
  }
}

// Appel de la fonction pour insérer les données
insertCommentaire();
*/