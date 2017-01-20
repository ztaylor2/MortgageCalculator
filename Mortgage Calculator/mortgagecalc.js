var monthlyCost = function() {
	var cost = parseFloat(document.getElementById('cost').value);
	var inter = parseFloat(document.getElementById('inter').value);
	var down = parseFloat(document.getElementById('down').value);
	var years = parseFloat(document.getElementById('years').value);
	
	var output = document.getElementById('output');
	
	if (isNaN(cost) || isNaN(inter) || isNaN(down) || isNaN(years))          //check if inputs are numbers
		{
			output.textContent = "All Input Values Must be Numbers."
		}
	else {
		var n = years*12;                                      //convert years to months
		var r = inter/1200;                                    //convert percent to decimal and to monthly
		var p = cost-cost*(down/100);                          //find principle loan from total cost of house and down payment
		var m = p*(r*(1+r)**n)/((1+r)**n-1);                   //use mortgage equation to find monthly cost 
		output.textContent = "Monthly Payment = " + Math.round(m * 100) / 100 + " $";
		
	}
}