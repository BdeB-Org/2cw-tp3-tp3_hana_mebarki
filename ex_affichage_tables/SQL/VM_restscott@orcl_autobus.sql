/*
--creation de la table autobus

CREATE TABLE autobus (
    autobus_id               NUMBER NOT NULL,
    modele                   VARCHAR2(30),
    capacité                 NUMBER NOT NULL,
    disponibilite            NVARCHAR2(100) NOT NULL,
    itineraire_itineraire_id NUMBER NOT NULL
);

ALTER TABLE autobus ADD CONSTRAINT autobus_pk PRIMARY KEY ( autobus_id );
*/
/*
--insertion des données dans la table autobus
INSERT INTO autobus (AUTOBUS_ID, MODELE, CAPACITE, DISPONIBILITE, ITINERAIRE_ITINERAIRE_ID) 
VALUES (7934, 'Modèle 5', 50, 'Disponible le 5 avril de 2h à 3h', 01);

INSERT INTO autobus (AUTOBUS_ID, MODELE, CAPACITE, DISPONIBILITE, ITINERAIRE_ITINERAIRE_ID) 
VALUES (6781, 'Modèle 2', 35, 'Disponible le 24 avril de 16h à 15h', 02);

INSERT INTO autobus (AUTOBUS_ID, MODELE, CAPACITE, DISPONIBILITE, ITINERAIRE_ITINERAIRE_ID) 
VALUES (2239, 'Modèle 7', 30, 'Disponible le 19 avril de 20h à 21h', 03);
COMMIT;


*/

---2024-05-18
--insertion des données dans la table autobus
INSERT INTO autobus (AUTOBUS_ID, MODELE, CAPACITE, DISPONIBILITE) 
VALUES (7934, 'Modèle 5', 50, 'Disponible le 5 avril de 2h à 3h');

INSERT INTO autobus (AUTOBUS_ID, MODELE, CAPACITE, DISPONIBILITE) 
VALUES (6781, 'Modèle 2', 35, 'Disponible le 24 avril de 16h à 15h');

INSERT INTO autobus (AUTOBUS_ID, MODELE, CAPACITE, DISPONIBILITE) 
VALUES (2239, 'Modèle 7', 30, 'Disponible le 19 avril de 20h à 21h');
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
    p_object       => 'AUTOBUS',
    p_object_type  => 'TABLE', -- Default  { TABLE | VIEW }
    p_object_alias => 'autobus'
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
FROM autobus;

