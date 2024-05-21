/*
--creation de la table ville
CREATE TABLE ville (
    ville_id    NUMBER NOT NULL,
    nom         VARCHAR2(45) NOT NULL,
    description VARCHAR2(300)
);
*/
/*
-- Insertion des donn�es dans la table ville
INSERT INTO ville(VILLE_ID, NOM, DESCRIPTION)
VALUES (01, 'Montr�al', 'Tr�s belle salle, cin�ma, restaurant, mus�e');

INSERT INTO ville(VILLE_ID, NOM, DESCRIPTION)
VALUES (02, 'Laval', 'Tr�s beau parc, plages');

INSERT INTO ville(VILLE_ID, NOM, DESCRIPTION)
VALUES (03, 'Toronto', 'Tr�s belle monument');

COMMIT;

ALTER TABLE ville ADD CONSTRAINT ville_pk PRIMARY KEY ( ville_id );
*/


---2024-05-18
-- Insertion des donn�es dans la table viste
INSERT INTO visite(VILLE_ID, NOM_VILLE_VISITE, DESCRIPTION_VISITE, DUREE_VISITE, PRIX_PAR_PERSONNE)
VALUES (01, 'Montr�al', 'Tr�s belle salle, cin�ma, restaurant, mus�e','3h',35);

INSERT INTO visite(VILLE_ID, NOM_VILLE_VISITE, DESCRIPTION_VISITE, DUREE_VISITE, PRIX_PAR_PERSONNE)
VALUES (02, 'Vancouver', 'Tr�s beau parc, plages','5h',60);

INSERT INTO visite(VILLE_ID, NOM_VILLE_VISITE, DESCRIPTION_VISITE,DUREE_VISITE, PRIX_PAR_PERSONNE)
VALUES (03, 'Toronto', 'Tr�s belle monument','3h',40);

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
    p_object       => 'VISITE',
    p_object_type  => 'TABLE', -- Default  { TABLE | VIEW }
    p_object_alias => 'visite'
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


SELECT *
FROM visite;

/*
UPDATE visite
SET nom_ville_visite = 'Vancouver'
WHERE ville_id = 2;
COMMIT;
*/
