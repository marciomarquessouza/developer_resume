({
	translateSectionHelper : function(component,event,idSection,languageCode) {

		var action = component.get('c.dataSection');
		var section = idSection;
		var language = languageCode;

		action.setParams({
			'sectionId': section,
			'language': language
		});

		action.setCallback(this, function(response) {

			var state = response.getState();

		    if (state === "SUCCESS") {
		    	
		    	var storeResponse = response.getReturnValue();
		        
		        component.set("v.langSFResumeHeader", storeResponse);    
		    }
		 
		});

		$A.enqueueAction(action);

	}
})