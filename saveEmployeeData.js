const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(dbUrl);

const EmployeeDB = require('./employeeDb.js');
const Employee = EmployeeDB.getModel(connection);

connection.on("open", () => {
	
	// create and save document objects
	let employee;

	employee = new Employee({
		eFirstName: 'John',
		eLastName: 'Smith'		
	}); 
	employee.save();

	employee = new Employee({
		eFirstName: 'Jane',
		eLastName: 'Smith'
	}); 
	employee.save();
  

	employee = new Employee({
		eFirstName: 'John',
		eLastName: 'Doe'
	}); 
	employee.save((err) => {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});
	
});










