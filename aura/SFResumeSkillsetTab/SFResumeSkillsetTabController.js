({
	changeBars : function(component, event, helper) {

		var sfBarSalesForce = component.find("sfBarEase");

		$A.util.toggleClass(sfBarSalesForce,"change");

		var barValues = component.get("v.sfBars");

		barValues.forEach(function(item){

			document.getElementById(item.id).style.width = item.total;

		});

	}
})