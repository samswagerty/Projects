/**
 * h07_Swagerty_Samuel.js
 */

 "use strict;"

var annualSavings 	  = 0;
var interestRate      = 0;
var annualRaise       = 0;
var startYear 		  = 0;
var stopYear 		  = 0;
var annualSalary      = 0;

var resultsTable;
var inputForm;
var chosenValuesTable;

function initialize() {
	//alert("In initialize(): Web App Loaded!");

	resultsTable=document.getElementById('resultsTableId');
	inputForm=document.getElementById('inputFormId');
	chosenValuesTable=document.getElementById('chosenValuesTableId');

	console.log(resultsTable);
	console.log(inputForm);
	console.log(chosenValuesTable);
}

function clearInputs(form) {
	//alert("clearing inputs");

	var formElements = inputForm.elements;
	for (var i=0; i< formElements.length; i++)
		formElements[i].value="";
}

function loadDefaults(form) {
	form.reset();
}

function getNumValue(id) {
	return Number(document.getElementById(id).value);
}

function makeMeRich (form) {
	if (!form.checkValidity()) {
		alert("There are input errors.");
	} else {
		//alert("makeMeRich function is running!");
		//debugger;

		startYear = Number(inputForm.elements[0].value);
		stopYear = Number(inputForm.elements[1].value);
		annualSalary = Number(inputForm.elements[2].value);
		interestRate = Number(inputForm.elements[3].value);
		annualSavings = Number(inputForm.elements[4].value);
		annualRaise = Number(inputForm.elements[5].value);
		// stopYear  = document.getElementById('endAgeInput');
		// annualSalary = document.getElementById('salaryInput');
		// interestRate = document.getElementById('interestInput');
		// annualSavings = document.getElementById('annualSavingsInput');
		// annualRaise = document.getElementById('annualRaiseInput');

		//alert(startYear+" "+stopYear+" "+annualSalary+" "+interestRate+" "+annualSavings+" "+annualRaise );

		var age 			 = 0;
		var salary 		     = 0;
		var savings 		 = 0;
		var interest 	     = 0;
		var retirement       = 0;
		var tableRowNumber   = 1;
		var compoundingYears = stopYear - startYear; 
		var retirementFund   = 0;
		var lifetimeSalary   = 0;
		var totalSaved       = 0;
		var earnedInterest   = 0;

		clearResultsTable(resultsTable);

		for (var i = 1; i <= compoundingYears; i++) {

			age = startYear;
			salary = annualSalary;
			savings = annualSalary*annualSavings;
			interest = annualSalary*interestRate;
			retirement = savings + interest;

			startYear++;
			annualSalary = annualSalary + (annualSalary*annualRaise);

			//write values to resultsTable
			var resultsRow = resultsTable.insertRow(tableRowNumber);
			var resultsCell0 = resultsRow.insertCell(0);
			var resultsCell1 = resultsRow.insertCell(1);
			var resultsCell2 = resultsRow.insertCell(2);
			var resultsCell3 = resultsRow.insertCell(3);
			var resultsCell4 = resultsRow.insertCell(4);

			resultsCell0.innerHTML = formatNumberWithCommas(age);
			resultsCell1.innerHTML = formatNumberWithCommas(salary);
			resultsCell2.innerHTML = formatNumberWithCommas(savings);
			resultsCell3.innerHTML = formatNumberWithCommas(interest);
			resultsCell4.innerHTML = formatNumberWithCommas(retirement);

			tableRowNumber ++;

			//add to values in chosen values table
			retirementFund = retirementFund + retirement;
			lifetimeSalary = lifetimeSalary + salary;
			totalSaved = totalSaved + savings;
			earnedInterest = earnedInterest + interest;



		}


		document.getElementById('yearsToInvestId').innerHTML = formatNumberWithCommas(compoundingYears);
		document.getElementById('retirementFundId').innerHTML = formatNumberWithCommas(retirementFund);
		document.getElementById('lifetimeSalaryId').innerHTML = formatNumberWithCommas(lifetimeSalary);
		document.getElementById('totalSavedId').innerHTML = formatNumberWithCommas(totalSaved);
		document.getElementById('earnedInterestId').innerHTML = formatNumberWithCommas(earnedInterest);

	}
}

function clearResultsTable(table) {

	for (var i = table.rows.length; i > 1; i--) {
		table.deleteRow(i-1);
	}
}
