-- Insertion des données dans la table commentaire
INSERT INTO panier_reservation(RESERVATION_ID, DATE_RESERVATION ,TOURISTE_TOURISTE_ID,AUTOBUS_AUTOBUS_ID,NOMBRE_PASSAGER,TYPE_REPAS,VISITE_VILLE_ID)
VALUES (0001,'2024-06-01',1,7934,33,'végétarien',1);

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
    p_object       => 'PANIER_RESERVATION',
    p_object_type  => 'TABLE', -- Default  { TABLE | VIEW }
    p_object_alias => 'panier_reservation'
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


SELECT*
FROM panier_reservation;


