function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
//Main
const emp_ul = document.getElementById("employees");
const elemH1 = document.getElementById("h1");

const url = "http://127.0.0.1:8080/ords/hr2/employees";
//new1
const elemtTotal = document.getElementById("totalSalaire");
//end1
//new2
const elemtMoyen = document.getElementById("MoyenSalaire");
let nombre = 0 ;
let totalSalaire = 0 ; // doit etre en dehors de la boucle
//end2

elemH1.innerHTML = "Liste des employees";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
     // span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job}`;
     //modifier1
     
     span.innerHTML = `${employee.empno} ${employee.ename} ${employee.job} ${employee.sal}`;
     totalSalaire += employee.sal;
     //end1
     //new2 pour moyenne calculer nombre des employees
     nombre++;
     //end2
      append(li, span);
      
      append(emp_ul, li);
          //new1  fait appele a data pour recevoir 
    elemtTotal.innerHTML="total Salaire ="+totalSalaire+ "$";
    //end1
    //new2  
    let SalaireMoyen = totalSalaire/nombre;
    elemtMoyen.innerHTML="Salaire moyen ="+SalaireMoyen+ "$";
    //end2



    });



      
  })

  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
 
