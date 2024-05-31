

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



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


