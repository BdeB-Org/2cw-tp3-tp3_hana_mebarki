//méthode1 : oracledb ---->CONNECTION DIRECTE AVEC BASE DE DONNÉE(NOM MP)
/*
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
      `INSERT INTO COMENTAIRE (COMMENTAIRE_ID, TEXTE, TOURISTE_TOURISTE_ID)
       VALUES (:id, :texte, :touristeId)`,
      [0005, 'aaaaaaaaaa', 3], // Les valeurs à insérer
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

//méthode 2 ---------->: requêtes HTTP à l’API REST.
/*
async function insertCommentaireViaREST() {
    const url = "http://127.0.0.1:8080/ords/hr2/comentaire";
    const body = {
      COMMENTAIRE_ID: 6,
      TEXTE: '80/100',
      TOURISTE_TOURISTE_ID: 3
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de l\'insertion: ' + response.statusText);
      }
  
      const responseData = await response.json();
      console.log('Row inserted:', responseData);
    } catch (err) {
      console.error('Erreur lors de la requête:', err);
    }
  }
*/
//verification
/*

const url3 = "http://127.0.0.1:8080/ords/hr2/comentaire";
//const cors = require("core");
//app.use(cors());
fetch(url3)
  .then((resp) => resp.json())
  .then(function (data) {
    let comentaires = data.items;
    let ul = document.getElementById('listeCommentaires');

    return comentaires.map(function (comentaire) {
      let li = document.createElement("li"),
        span = document.createElement("span");

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
  */



// Assurez-vous que votre version de Node.js est 17.5 ou plus récente pour utiliser fetch globalement.
/*
async function fetchData() {
    const url3 = "http://127.0.0.1:8080/ords/hr2/comentaire";
  
    try {
      const response = await fetch(url3);
      if (!response.ok) {
        throw new Error('La requête a échoué avec le statut ' + response.status);
      }
      const data = await response.json();
      console.log(data);
  
      // Traitement des données reçues
      let comentaires = data.items;
      comentaires.forEach(comentaire => {
        console.log(`${comentaire.touriste_touriste_id} ${comentaire.texte}`);
      });
  
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }
  
  fetchData();
  */

//autre essai pour faire une post
/*
const url3 = "http://127.0.0.1:8080/ords/hr2/comentaire";
fetch("url3", {
method: "POST",
body: JSON.stringify({
  COMMENTAIRE_ID: 6,
  TEXTE: '80/100',
  TOURISTE_TOURISTE_ID: 3
}),
headers: {
  "Content-type": "application/json; charset=UTF-8"
}
});

fetch("url3", {
method: "POST",
body: JSON.stringify({
  COMMENTAIRE_ID: 6,
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
//autre methode pour post
/*
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://127.0.0.1:8080/ords/hr2/comentaire");
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
const body = JSON.stringify({
    COMMENTAIRE_ID: 6,
    TEXTE: '80/100',
    TOURISTE_TOURISTE_ID: 3
});
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send(body);
  */
//autre facon pour post
/*
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js" integrity="sha512-tWHlutFnuG0C6nQRlpvrEhE4QpkG1nn2MOUMWmUeRePl4e3Aki0VB6W1v3oLjFtd0hVOtRQ9PHpSfN6u6/QXkQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
const body = {
   COMMENTAIRE_ID: 6,
   TEXTE: '80/100',
   TOURISTE_TOURISTE_ID: 3
 };
 $.post("http://127.0.0.1:8080/ords/hr2/comentaire", body, (data, status) => {
   console.log(data);
 });
 */
//autre facon pour post npm init -y npm install axios
/*
npm i axios --global 
import axios from 'axios';
 
  // --global flags will save you the stress of insstalling axios again.

axios.post("http://127.0.0.1:8080/ords/hr2/comentaire", {
  COMMENTAIRE_ID: 6,
  TEXTE: '80/100',
  TOURISTE_TOURISTE_ID: 3
})
.then((response) => console.log(response.data))
.then((error) => console.log(error));
*/
//autre facon pour post npm init -y npm install axios*************
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
*/

//autre facon post
/*
let url = "http://127.0.0.1:8080/ords/hr2/comentaire";
someStuff= { COMMENTAIRE_ID: 0006,
  TEXTE: '80/100',
  TOURISTE_TOURISTE_ID: 3};
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.send(someStuff);
*/
//autre facon post
/*
var xhr = new XMLHttpRequest();
// we defined the xhr

xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);

        // we get the returned data
    }

    // end of state change: it can be after some time (async)
};

xhr.open('GET', yourUrl, true);
xhr.send();



*/


//core ajoute les en-têtes CORS (Cross-Origin Resource Sharing) à vos réponses, 
//ce qui permet aux requêtes AJAX d’accéder à votre serveur depuis une origine différente.
//http://localhost:3000/submit-comment  pour voir la requete

//***** npm install express oracledb body-parser */
//**npm install cors */
//**pour exécuter fait la commande node test.js */
const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ajoutez cette ligne

const app = express();

app.use(cors()); // Ajoutez cette ligne
app.use(bodyParser.json());


//cote serveur
//gestion de la requete post de cote de la base de donnée
//const express = require('express');
//const oracledb = require('oracledb');
//const bodyParser = require('body-parser');

//const app = express();

//app.use(bodyParser.json());

app.post('/submit-comment', async (req, res) => {
  let conn;

  try {
    conn = await oracledb.getConnection({
      user: 'restscott',
      password: 'oracle',
      connectString: 'localhost:1521/freepdb1'
    });

    const result = await conn.execute(
      `INSERT INTO commentaire(COMMENTAIRE_ID, TEXT ,TOURISTE_TOURISTE_ID) VALUES (:commentaire_id, :text, :touriste_touriste_id)`,
      [req.body.commentaire_id, req.body.text, req.body.touriste_touriste_id],
      { autoCommit: true }
    );

    console.log("Rows inserted: " + result.rowsAffected);
    // Retourner l'ID du nouveau commentaire
    res.json({ message: "Commentaire ajouté avec succès!", commentaire_id: req.body.commentaire_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'insertion du commentaire." });
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});






//pour envoye le post de la requete formulaire
/*
app.post('/submit-bus', async (req, res) => {
  let conn;

  try {
      conn = await oracledb.getConnection({
          user: 'restscott',
          password: 'oracle',
          connectString: 'localhost:1521/freepdb1'
      });

      const result = await conn.execute(
          `INSERT INTO autobus(AUTOBUS_ID, MODELE, CAPACITE, DISPONIBILITE) VALUES (:AUTOBUS_ID, :MODELE, :CAPACITE, :DISPONIBILITE)`,
          [req.body.AUTOBUS_ID, req.body.MODELE, req.body.CAPACITE, req.body.DISPONIBILITE],
          { autoCommit: true } 
      );

      console.log("Rows inserted: " + result.rowsAffected);
      // Retourner l'ID du nouvel autobus
      res.json({message: "Autobus ajouté avec succès!", AUTOBUS_ID: req.body.AUTOBUS_ID});
  } catch (err) {
      console.error(err);
      res.status(500).json({message: "Une erreur s'est produite lors de l'insertion de l'autobus."});
  } finally {
      if (conn) {
          try {
              await conn.close();
          } catch (err) {
              console.error(err);
          }
      }
  }
});
*/





//pour nombre de dernier commentaire
// Dans votre serveur Node.js
/**
app.get('/last-comment-id', async (req, res) => {
  let conn;

  try {
      conn = await oracledb.getConnection({
          user: 'restscott',
          password: 'oracle',
          connectString: 'localhost:1521/freepdb1'
      });

      const result = await conn.execute(
          `SELECT MAX(COMMENTAIRE_ID) as max_id FROM comentaire`
      );

      res.json({commentaire_id: result.rows[0].max_id});

  } catch (err) {
      console.error(err);
      res.status(500).json({message: "Une erreur s'est produite lors de la récupération de l'ID du dernier commentaire."});
  } finally {
      if (conn) {
          try {
              await conn.close();
          } catch (err) {
              console.error(err);
          }
      }
  }
});
 */


/**envouer un formulaire */
/*
app.post('/submit-reservation', async (req, res) => {
  let conn;

  try {
      conn = await oracledb.getConnection({
          user: 'restscott',
          password: 'oracle',
          connectString: 'localhost:1521/freepdb1'
      });

      const result = await conn.execute(
          `INSERT INTO panier_reservation(RESERVATION_ID, DATE_RESERVATION ,TOURISTE_TOURISTE_ID,AUTOBUS_AUTOBUS_ID,NOMBRE_PASSAGER,TYPE_REPAS,VISITE_VILLE_ID) VALUES (:RESERVATION_ID, TO_DATE(:DATE_RESERVATION, 'YYYY-MM-DD'), :TOURISTE_TOURISTE_ID, :AUTOBUS_AUTOBUS_ID, :NOMBRE_PASSAGER, :TYPE_REPAS, :VISITE_VILLE_ID)`,
          [req.body.RESERVATION_ID, req.body.DATE_RESERVATION, req.body.TOURISTE_TOURISTE_ID, req.body.AUTOBUS_AUTOBUS_ID, req.body.NOMBRE_PASSAGER, req.body.TYPE_REPAS, req.body.VISITE_VILLE_ID],
          { autoCommit: true } 
      );

      console.log("Rows inserted: " + result.rowsAffected);
      // Retourner l'ID de la nouvelle réservation
      res.json({message: "Réservation ajoutée avec succès!", RESERVATION_ID: req.body.RESERVATION_ID});
  } catch (err) {
      console.error(err);
      res.status(500).json({message: "Une erreur s'est produite lors de l'insertion de la réservation."});
  } finally {
      if (conn) {
          try {
              await conn.close();
          } catch (err) {
              console.error(err);
          }
      }
  }
});

*/
/*
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})
*/

app.post('/submit-reservation', async (req, res) => {
  let conn;

  try {
    conn = await oracledb.getConnection({
      user: 'restscott',
      password: 'oracle',
      connectString: 'localhost:1521/freepdb1'
    });

    const result = await conn.execute(
      `INSERT INTO panier_reservation(RESERVATION_ID, DATE_RESERVATION ,TOURISTE_TOURISTE_ID,AUTOBUS_AUTOBUS_ID,NOMBRE_PASSAGER,TYPE_REPAS,VISITE_VILLE_ID) VALUES (:RESERVATION_ID, TO_DATE(:DATE_RESERVATION, 'YYYY-MM-DD'), :TOURISTE_TOURISTE_ID, :AUTOBUS_AUTOBUS_ID, :NOMBRE_PASSAGER, :TYPE_REPAS, :VISITE_VILLE_ID)`,
      [req.body.reservation_id, req.body.date_reservation, req.body.touriste_touriste_id, req.body.autobus_autobus_id, req.body.nombre_passager, req.body.type_repas, req.body.visite_id],
      { autoCommit: true }
    );

    console.log("Rows inserted: " + result.rowsAffected);
    // Retourner l'ID de la nouvelle réservation
    res.json({ message: "Réservation ajoutée avec succès!", reservation_id: req.body.reservation_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'insertion de la réservation." });
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.listen(3050, () => {
  console.log('Server is running on port 3050');
});


