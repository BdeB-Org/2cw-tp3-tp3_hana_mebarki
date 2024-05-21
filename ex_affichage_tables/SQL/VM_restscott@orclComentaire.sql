--creation de la table comentaire
/*
CREATE TABLE comentaire (
    commentaire_id       NUMBER NOT NULL,
    texte                VARCHAR2(500),
    touriste_touriste_id NUMBER NOT NULL,
    touriste_id          NUMBER NOT NULL
);

CREATE UNIQUE INDEX comentaire__idx ON
    comentaire (
        touriste_touriste_id
    ASC );

ALTER TABLE comentaire ADD CONSTRAINT comentaire_pk PRIMARY KEY ( commentaire_id );
ALTER TABLE comentaire
    ADD CONSTRAINT comentaire_touriste_fk FOREIGN KEY ( touriste_touriste_id )
        REFERENCES touriste ( touriste_id );
        */
        
    
  /*    
FOREIGN KEY (touriste_touriste_id) REFERENCES touriste(touriste_id);
-- Insertion des données dans la table commentaire
INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0001, 'Très bon', 1);

INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0002, 'Ils m''ont volé mes bagages', 2);

INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0003, 'Malgré cher, on a reçu un très bon voyage', 3);

COMMIT;

ALTER TABLE comentaire
    ADD CONSTRAINT comentaire_touriste_fk FOREIGN KEY ( touriste_touriste_id )
        REFERENCES touriste ( touriste_id );
        
*/
        
--2024-05-18
-- Insertion des données dans la table commentaire
INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0001, 'Très bon', 1);

INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0002, 'Ils m''ont volé mes bagages', 2);

INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0003, 'Malgré cher, on a reçu un très bon voyage', 3);

COMMIT;
-- ceci va crer un URI sous le URL qui pourra etre utilise pour y activer les tables en mode REST
BEGIN
  ORDS.enable_schema(
    p_enabled             => TRUE,
    p_schema              => 'RESTSCOTT',
    p_url_mapping_type    => 'BASE_PATH',
    p_url_mapping_pattern => 'hr2',
    p_auto_rest_auth      => FALSE
  );
    
  COMMIT;
END;
/

--activation de la table emp pour acces REST

BEGIN
  ORDS.enable_object (
    p_enabled      => TRUE, -- Default  { TRUE | FALSE }
    p_schema       => 'RESTSCOTT',
    p_object       => 'COMENTAIRE',
    p_object_type  => 'TABLE', -- Default  { TABLE | VIEW }
    p_object_alias => 'comentaire'
  );
    
  COMMIT;
END;
/

-- confirmation de l'Activation du schema
SELECT *
FROM user_ords_schemas;

-- confirmation de l'activation de la table emp pour REST
SELECT *
FROM   user_ords_enabled_objects;


INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0004, 'impossible d oublier ',3);
COMMIT;




SELECT *
FROM comentaire;

SELECT *
FROM touriste;
SAVEPOINT comp_1;

/*
DELETE FROM COMENTAIRE
WHERE COMMENTAIRE_ID > 1 ;
commit;
*/




SELECT owner, object_name FROM all_objects WHERE object_name = UPPER('commentaire');


/*
INSERT INTO comentaire(COMMENTAIRE_ID, TEXTE ,TOURISTE_TOURISTE_ID)
VALUES (0004, 'c est grave',4);

INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (1, 'bob', 'BOB88@gmail.com', 438746897);
INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (2, 'James', 'James93@gmail.com', 43882139812);
INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (3, 'James', 'James93@gmail.com', 43882139812);
INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (4, 'James', 'James93@gmail.com', 43882139812);
commit;



-- Insertion des données dans la table itineraire
INSERT INTO itineraire(ITINERAIRE_ID, LIEU_DE_ATTRACTION, DUREE, VILLE_VILLE_ID,PRIX)
VALUES (01, 'parcs, restaurant, pont', 2, 01,500);

INSERT INTO itineraire(ITINERAIRE_ID, LIEU_DE_ATTRACTION, DUREE, VILLE_VILLE_ID,PRIX)
VALUES (02,  'rivière, pont, aéroport', 1, 02,100);

INSERT INTO itineraire(ITINERAIRE_ID, LIEU_DE_ATTRACTION, DUREE, VILLE_VILLE_ID,PRIX)
VALUES (03,  'musée, restaurant, pont, rivière, 5 parcs, 3 repas inclus', 3, 03,1220);

COMMIT;
-- Insertion des données dans la table réservation
INSERT INTO reservation(RESERVATION_ID, DATE_RESERVATION, TOURISTE_TOURISTE_ID, AUTOBUS_AUTOBUS_ID,ITINERAIRE_ITINERAIRE_ID)
VALUES (0010, TO_DATE('2024-05-23', 'YYYY-MM-DD'), 2, 7934, 01);

INSERT INTO reservation(RESERVATION_ID, DATE_RESERVATION, TOURISTE_TOURISTE_ID, AUTOBUS_AUTOBUS_ID,ITINERAIRE_ITINERAIRE_ID)
VALUES (0020, TO_DATE('2024-05-23', 'YYYY-MM-DD'), 1, 6781, 02);

INSERT INTO reservation(RESERVATION_ID, DATE_RESERVATION, TOURISTE_TOURISTE_ID, AUTOBUS_AUTOBUS_ID,ITINERAIRE_ITINERAIRE_ID)
VALUES (0030, TO_DATE('2024-05-23', 'YYYY-MM-DD'), 3, 2239, 03);

COMMIT;
*/

DESCRIBE comentaire;
