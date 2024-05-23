-- Généré par Oracle SQL Developer Data Modeler 23.1.0.087.0806
--   à :        2024-05-23 01:52:04 HAE
--   site :      Oracle Database 11g
--   type :      Oracle Database 11g



-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE


-----------------------1/5------------------------
-- Création de la table autobus

CREATE TABLE autobus (
    autobus_id    NUMBER NOT NULL,
    modele        VARCHAR2(30),
    capacite      NUMBER NOT NULL,
    disponibilite VARCHAR2(150) NOT NULL
);

ALTER TABLE autobus ADD CONSTRAINT autobus_pk PRIMARY KEY ( autobus_id );
-- Insertion des données dans la table autobus
INSERT INTO autobus (autobus_id, modele, capacite, disponibilite) 
VALUES (7934, 'Modèle 5', 50, 'Disponible du 6 janvier au 24 mars de 14h à 15h');

INSERT INTO autobus (autobus_id, modele, capacite, disponibilite) 
VALUES (6781, 'Modèle 2', 35, 'Disponible du 16 avril au 30 juin de 7h à 8h');

INSERT INTO autobus (autobus_id, modele, capacite, disponibilite) 
VALUES (2239, 'Modèle 7', 30, 'Disponible du 1 juillet au 10 spetembre de 20h à 21h');
COMMIT;

SELECT *
FROM autobus;

------------------------2/5----------------------
-- Création de la table commentaire

CREATE TABLE commentaire (
    commentaire_id       NUMBER NOT NULL,
    text                 VARCHAR2(500),
    touriste_touriste_id NUMBER NOT NULL
);

ALTER TABLE commentaire ADD CONSTRAINT commentaire_pk PRIMARY KEY ( commentaire_id );
-- Insertion des données dans la table commentaire
INSERT INTO commentaire(commentaire_id, text ,touriste_touriste_id)
VALUES (01, 'Très bon', 1111);

INSERT INTO commentaire(commentaire_id, text ,touriste_touriste_id)
VALUES (0002, 'Ils m''ont volé mes bagages', 6472);

INSERT INTO commentaire(commentaire_id, text ,touriste_touriste_id)
VALUES (0003, 'Malgré cher, on a reçu un très bon voyage', 4583);

COMMIT;

SELECT *
FROM commentaire;


------------------------3/5--------------------------
-- Création de la table reservation

CREATE TABLE reservation (
    reservation_id       NUMBER NOT NULL,
    date_reservation     DATE NOT NULL,
    nombre_passager      NUMBER NOT NULL,
    type_repas           VARCHAR2(50),
    touriste_touriste_id NUMBER NOT NULL,
    visite_visite_id     NUMBER NOT NULL,
    autobus_autobus_id   NUMBER NOT NULL,
    cout_total           NUMBER NOT NULL
);

ALTER TABLE reservation ADD CONSTRAINT reservation_pk PRIMARY KEY ( reservation_id );
-- Insertion des données dans la table reservation
INSERT INTO reservation(reservation_id, date_reservation ,nombre_passager,type_repas,touriste_touriste_id,visite_visite_id,autobus_autobus_id,cout_total)
VALUES (8119, TO_DATE('2024-03-01', 'YYYY-MM-DD'), 33, 'Végétarien', 1111, 01, 7934, 1155);

INSERT INTO reservation(reservation_id, date_reservation ,nombre_passager,type_repas,touriste_touriste_id,visite_visite_id,autobus_autobus_id,cout_total)
VALUES (4892, TO_DATE('2012-05-16', 'YYYY-MM-DD'), 2, 'Sans sel', 6472, 02, 6781, 120);

INSERT INTO reservation(reservation_id, date_reservation ,nombre_passager,type_repas,touriste_touriste_id,visite_visite_id,autobus_autobus_id,cout_total)
VALUES (1947, TO_DATE('2020-12-23', 'YYYY-MM-DD'), 4, '', 4583, 03, 2239, 160);

COMMIT;

SELECT *
FROM reservation;

----------------------4/5-------------------------
-- Création de la table touriste

CREATE TABLE touriste (
    touriste_id NUMBER NOT NULL,
    nom         VARCHAR2(40) NOT NULL,
    prenom      VARCHAR2(40) NOT NULL,--j'ai modifier manuellement l'ordre car la colonne «prenom » été placé comme dernier
    email       VARCHAR2(100) NOT NULL,
    telephone   VARCHAR2(12) NOT NULL,
    mot_passe   VARCHAR2(80) NOT NULL
);

ALTER TABLE touriste ADD CONSTRAINT touriste_pk PRIMARY KEY ( touriste_id );
-- Insertion des données dans la table touriste
INSERT INTO touriste(touriste_id, nom,prenom, email, telephone,mot_passe)
VALUES (0, 'Admin','Root', 'AdminRoot@gmail.com', '438-7886-329','codeBleu');

INSERT INTO touriste(touriste_id, nom, prenom,email, telephone,mot_passe)
VALUES (1, 'Touriste','Défaut', 'TouristeDefaut@gmail.com', '000-0000-000','TouristeDefaut1');

INSERT INTO touriste(touriste_id, nom,prenom, email, telephone,mot_passe)
VALUES (1111, 'Clara','Nordate', 'claradam@gmail.com', '438-6512-123','WWWNous1900');

INSERT INTO touriste(touriste_id, nom,prenom ,email, telephone,mot_passe)
VALUES (6472, 'Kim','Fleuron', 'kimno67@gmail.com', '438-455-5452','101marcher');

INSERT INTO touriste(touriste_id, nom,prenom ,email, telephone,mot_passe)
VALUES (4583, 'James','Batiery' ,'James93@gmail.com', '438-821-3981','sacRouge');

SELECT *
FROM touriste;
--------------------------5/5-------------------------------
-- Création de la table visite

CREATE TABLE visite (
    visite_id          NUMBER NOT NULL,
    nom_ville_visite   VARCHAR2(45) NOT NULL,
    description_visite VARCHAR2(300),
    duree_visite       VARCHAR2(30) NOT NULL,
    prix_par_personne  NUMBER NOT NULL
);
-- Insertion des données dans la table viste

INSERT INTO visite(visite_id, nom_ville_visite, description_visite, duree_visite, prix_par_personne)
VALUES (01, 'Montréal', 'Visite de 3 heures à Montréal avec arrêts au Vieux-Montréal, Plateau Mont-Royal et Musée des Beaux-Arts.','3h',35);

INSERT INTO visite(visite_id, nom_ville_visite, description_visite, duree_visite, prix_par_personne)
VALUES (02, 'Vancouver', 'Visite de 5 heures à Vancouver avec arrêts à Stanley Park, Granville Island et pont suspendu de Capilano.','5h',60);

INSERT INTO visite(visite_id, nom_ville_visite, description_visite,duree_visite, prix_par_personne)
VALUES (03, 'Toronto', 'Visite de 3 heures à Toronto avec arrêts à la Tour CN, Distillery District et marché de St. Lawrence.','3h',40);

COMMIT;

SELECT *
FROM visite;


ALTER TABLE visite ADD CONSTRAINT visite_pk PRIMARY KEY ( visite_id );

ALTER TABLE commentaire
    ADD CONSTRAINT commentaire_touriste_fk FOREIGN KEY ( touriste_touriste_id )
        REFERENCES touriste ( touriste_id );

ALTER TABLE reservation
    ADD CONSTRAINT reservation_autobus_fk FOREIGN KEY ( autobus_autobus_id )
        REFERENCES autobus ( autobus_id );

ALTER TABLE reservation
    ADD CONSTRAINT reservation_touriste_fk FOREIGN KEY ( touriste_touriste_id )
        REFERENCES touriste ( touriste_id );

ALTER TABLE reservation
    ADD CONSTRAINT reservation_visite_fk FOREIGN KEY ( visite_visite_id )
        REFERENCES visite ( visite_id );

-- Ceci va creer un URI sous le URL qui pourra etre utilise pour y activer les tables en mode REST
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

   

----------------------------1/5-------------------------
-- Activation de la autobus hotel pour acces REST 
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

----------------------------2/5-------------------------
-- Activation de la commentaire hotel pour acces REST 
BEGIN
  ORDS.enable_object (
    p_enabled      => TRUE, -- Default  { TRUE | FALSE }
    p_schema       => 'RESTSCOTT',
    p_object       => 'COMMENTAIRE',
    p_object_type  => 'TABLE', -- Default  { TABLE | VIEW }
    p_object_alias => 'commentaire'
  );
    
  COMMIT;
END;
/

----------------------------3/5-------------------------
-- Activation de la reservation hotel pour acces REST 
BEGIN
  ORDS.enable_object (
    p_enabled      => TRUE, -- Default  { TRUE | FALSE }
    p_schema       => 'RESTSCOTT',
    p_object       => 'RESERVATION',
    p_object_type  => 'TABLE', -- Default  { TABLE | VIEW }
    p_object_alias => 'reservation'
  );
    
  COMMIT;
END;
/


----------------------------4/5-------------------------
-- Activation de la touriste hotel pour acces REST 
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
----------------------------5/5-------------------------
-- Activation de la visite hotel pour acces REST 
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



-- Rapport récapitulatif d'Oracle SQL Developer Data Modeler : 
-- 
-- CREATE TABLE                             5
-- CREATE INDEX                             0
-- ALTER TABLE                              9
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
