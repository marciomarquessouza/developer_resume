//aura/lookUpSFOitemController
({
	objectSelected : function(component, event, helper) {

		//Get the selected object
		var getSelectedObject = component.get("v.oRecord");
		
		//Call the Event which will enable the connection with the Parent Element
		var callEvent = component.getEvent("oSelectedEvent");

		// Event Parameter - lookUpItem is the attribute created in lookUpSFOEvent.evt file
		callEvent.setParams( { "lookUpItem" :  getSelectedObject} );

		// Come on baby, light(ning) my fire
		callEvent.fire();

	}
})