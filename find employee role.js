function findEmployeesRole(name){
	var temp = name.split(" ")
	
	for (var i =0; i <employees.length ; i++){
		if(employees[i].firstName + " " + employees[i].lastName === name){return employees[i].role;}
	}
 return "Does not work here!"
}
var employees = [ 
{ firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
{ firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
{ firstName: 'Peter',lastName: 'Ross',role: 'Warehouse Manager' }
];
//var employeesObj = Object.create(employees);
console.log(findEmployeesRole('Morty Smith'));
