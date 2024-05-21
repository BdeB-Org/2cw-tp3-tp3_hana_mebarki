--création de la table touriste---
/*
CREATE TABLE touriste (
    touriste_id NUMBER NOT NULL,
    nom         VARCHAR2(25) NOT NULL,
    email       VARCHAR2(40) NOT NULL,
    telephone   VARCHAR2(12) NOT NULL
);

ALTER TABLE touriste ADD CONSTRAINT touriste_pk PRIMARY KEY ( touriste_id );
*/

-- Insertion des données dans la table touriste
INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (1, 'Bob', 'bobsir@gmail.com', '438-1367-578');

INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (2, 'Clara', 'claradam@gmail.com', '438-6512-123');

INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (3, 'Kim', 'kimno67@gmail.com', '438-455-5452');

INSERT INTO touriste(TOURISTE_ID, NOM, EMAIL, TELEPHONE)
VALUES (4, 'James', 'James93@gmail.com', '438-821-3981');



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
    p_object       => 'TOURISTE',
    p_object_type  => 'TABLE', -- Default  { TABLE | VIEW }
    p_object_alias => 'touriste'
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
FROM touriste;