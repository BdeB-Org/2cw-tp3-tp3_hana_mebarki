    //ville visite
    //pour autobus

    function createNode(element) {
        return document.createElement(element);
      }
      
      function append(parent, el) {
        return parent.appendChild(el);
      }
      //Main
      const emp_ul = document.getElementById("employees");
      const elemH1 = document.getElementById("h1");
    const url1 = "http://127.0.0.1:8080/ords/hr2/touriste";
    elemH1.innerHTML = "Liste des employees";
/*
  fetch(url1)
  .then((resp) => resp.json())
  .then(function (data) {
    
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
     // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
     //modifier1
        span.innerHTML = `${employee.touriste_id} ${employee.nom} ${employee.prenom} ${employee.email}`;
        document.write= `${employee.touriste_id} ${employee.nom} ${employee.prenom} ${employee.email}`;

        // span.innerHTML = `${employee.ville_id} ${employee.nom} ${employee.description} `;
  //  span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job} ${employee.sal}`;
     //totalSalaire += employee.sal;
     //end1
     //new2 pour moyenne calculer nombre des employees
    // nombre++;
     //end2
      append(li, span);
      
      append(emp_ul, li);
          //new1  fait appele a data pour recevoir 
  //  elemtTotal.innerHTML="total Salaire ="+totalSalaire+ "$";
    //end1
    //new2  
    //let SalaireMoyen = totalSalaire/nombre;
    //elemtMoyen.innerHTML="Salaire moyen ="+SalaireMoyen+ "$";
    //end2



    });



      
  })

  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
  */
          
function login() {


/*
    let nom ;
    let mot_passe;
    
    fetch(url1)
    .then((resp) => resp.json())
    .then(function (data) {
        let touriste = data.items;
        //  let select = document.getElementById('autobus_choisi');

        return autobus.map(function (touriste) {
        // Afficher les données de l'autobus dans la console
        console.log(`touriste_id: ${touriste.touriste_id}, nom: ${touriste.nom}, prenom: ${touriste.prenom}, email: ${touriste.email}`);
        nom = touriste.touriste_id;
        mot_passe = touriste.mot_passe;
        //  let option = createNode("option");

        // Définir le texte de l'option pour inclure l'ID, le modèle, la capacité et la disponibilité de l'autobus
        // option.textContent = `AUTOBUS_ID: ${bus.autobus_id}, ${bus.modele}, CAPACITE: ${bus.capacite}, ${bus.disponibilite}`;


        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });


*/



    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //  console.log(nom)
    //console.log(mot_passe)
    if((username ===  'Admin' || username ===  'admin')  && password === 'codeBleu'  ) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('contentSection').style.display = 'block';
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
    }


    
    function createNode(element) {
        return document.createElement(element);
      }
      
      function append(parent, el) {
        return parent.appendChild(el);
      }
      //Main
      const emp_ul = document.getElementById("employees");
      const elemH1 = document.getElementById("h1");
    const url1 = "http://127.0.0.1:8080/ords/hr2/touriste";
    elemH1.innerHTML = "Liste des employees";
/*
  fetch(url1)
  .then((resp) => resp.json())
  .then(function (data) {
    
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
     // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
     //modifier1
        span.innerHTML = `${employee.touriste_id} ${employee.nom} ${employee.prenom} ${employee.email}`;
        document.write= `${employee.touriste_id} ${employee.nom} ${employee.prenom} ${employee.email}`;

        // span.innerHTML = `${employee.ville_id} ${employee.nom} ${employee.description} `;
  //  span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job} ${employee.sal}`;
     //totalSalaire += employee.sal;
     //end1
     //new2 pour moyenne calculer nombre des employees
    // nombre++;
     //end2
      append(li, span);
      
      append(emp_ul, li);
          //new1  fait appele a data pour recevoir 
  //  elemtTotal.innerHTML="total Salaire ="+totalSalaire+ "$";
    //end1
    //new2  
    //let SalaireMoyen = totalSalaire/nombre;
    //elemtMoyen.innerHTML="Salaire moyen ="+SalaireMoyen+ "$";
    //end2



    });



      
  })

  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
  */
}
        function showList() {
           // document.getElementById('numberList').style.display = 'block';
            
            document.getElementById('affichage').style.display = 'block';
            
            document.getElementById('employees').style.display = 'block';

            document.getElementById('root').style.display = 'block';
            
            document.getElementById('contentSection').style.display = 'block';

            fetch(url1)
  .then((resp) => resp.json())
  .then(function (data) {
    
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
     // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
     //modifier1
        span.innerHTML = `${employee.touriste_id} ${employee.nom} ${employee.prenom} ${employee.email}`;
        document.write= `${employee.touriste_id} ${employee.nom} ${employee.prenom} ${employee.email}`;

        // span.innerHTML = `${employee.ville_id} ${employee.nom} ${employee.description} `;
  //  span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job} ${employee.sal}`;
     //totalSalaire += employee.sal;
     //end1
     //new2 pour moyenne calculer nombre des employees
    // nombre++;
     //end2
      append(li, span);
      
      append(emp_ul, li);
          //new1  fait appele a data pour recevoir 
  //  elemtTotal.innerHTML="total Salaire ="+totalSalaire+ "$";
    //end1
    //new2  
    //let SalaireMoyen = totalSalaire/nombre;
    //elemtMoyen.innerHTML="Salaire moyen ="+SalaireMoyen+ "$";
    //end2



    });



      
  })

  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

        }