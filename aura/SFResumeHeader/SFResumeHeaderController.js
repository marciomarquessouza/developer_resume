({
	doInit : function(component, event, helper) {
		
	},

	languageDataChange : function(component,event,helper) {

		var listLanguages = component.get("v.langSFResumeHeader");

		listLanguages.forEach(function lanFunction(item) {

				var childComponent = component.find(item.sub_section__c);
        		childComponent.myMethod(item.ObjectData__c);
    
		});
	}

})