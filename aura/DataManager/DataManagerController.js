({
    loadOptions: function (component, event, helper) {
        
        var opts = [
            { value: '', label: "Choose One" },
            { value: '0', label: "String" },
            { value: '1', label: "Array" },
            { value: '2', label: "Object" },
            { value: '3', label: "Array of objects" }
         ];
         
         component.set("v.options", opts);
    
    },

	selectChanged : function(component, event, helper) {

		var selectedItem = component.get("v.selectedValue");
		component.set("v.typeComponent",selectedItem);
	}
})