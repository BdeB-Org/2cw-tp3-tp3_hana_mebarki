-- Généré par Oracle SQL Developer Data Modeler 23.1.0.087.0806
--   à :        2024-05-18 03:58:40 HAE
--   site :      Oracle Database 11g
--   type :      Oracle Database 11g



-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE

CREATE TABLE autobus (
    autobus_id    NUMBER NOT NULL,
    modele        VARCHAR2(30),
    capacite      NUMBER NOT NULL,
    disponibilite NVARCHAR2(100) NOT NULL
);

ALTER TABLE autobus ADD CONSTRAINT autobus_pk PRIMARY KEY ( autobus_id );

CREATE TABLE comentaire (
    commentaire_id       NUMBER NOT NULL,
    texte                VARCHAR2(500),
    touriste_touriste_id NUMBER NOT NULL
);

ALTER TABLE comentaire ADD CONSTRAINT comentaire_pk PRIMARY KEY ( commentaire_id );

CREATE TABLE panier_reservation (
    reservation_id       NUMBER NOT NULL,
    date_reservation     DATE NOT NULL,
    touriste_touriste_id NUMBER NOT NULL,
    autobus_autobus_id   NUMBER NOT NULL,
    nombre_passager      NUMBER NOT NULL,
    type_repas           VARCHAR2(35),
    visite_ville_id      NUMBER NOT NULL
);

ALTER TABLE panier_reservation ADD CONSTRAINT panier_reservation_pk PRIMARY KEY ( reservation_id );

CREATE TABLE touriste (
    touriste_id NUMBER NOT NULL,
    nom         VARCHAR2(25) NOT NULL,
    email       VARCHAR2(40) NOT NULL,
    telephone   VARCHAR2(12) NOT NULL
);

ALTER TABLE touriste ADD CONSTRAINT touriste_pk PRIMARY KEY ( touriste_id );

CREATE TABLE visite (
    ville_id           NUMBER NOT NULL,
    nom_ville_visite   VARCHAR2(45) NOT NULL,
    description_visite VARCHAR2(300),
    duree_visite       VARCHAR2(10) NOT NULL,
    prix_par_personne  NUMBER NOT NULL
);

ALTER TABLE visite ADD CONSTRAINT visite_pk PRIMARY KEY ( ville_id );

ALTER TABLE comentaire
    ADD CONSTRAINT comentaire_touriste_fk FOREIGN KEY ( touriste_touriste_id )
        REFERENCES touriste ( touriste_id );

ALTER TABLE panier_reservation
    ADD CONSTRAINT panier_reservation_autobus_fk FOREIGN KEY ( autobus_autobus_id )
        REFERENCES autobus ( autobus_id );

ALTER TABLE panier_reservation
    ADD CONSTRAINT panier_reservation_touriste_fk FOREIGN KEY ( touriste_touriste_id )
        REFERENCES touriste ( touriste_id );

ALTER TABLE panier_reservation
    ADD CONSTRAINT panier_reservation_visite_fk FOREIGN KEY ( visite_ville_id )
        REFERENCES visite ( ville_id );



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
