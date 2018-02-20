({
	doInit : function(component, event, helper) {

		var callLanguageHelper = component.get('c.languageHelper');
        $A.enqueueAction(callLanguageHelper);
		
	},

	handlerLanguageEvent : function(component, event, helper) {

		var selectedEventLanguage = event.getParam("mainLanguage");
		var languageCode = selectedEventLanguage;

		component.set('v.pageLanguage',selectedEventLanguage);

		var callLanguageHelper = component.get('c.languageHelper');
        $A.enqueueAction(callLanguageHelper);

	},

	languageHelper : function(component, event, helper) {

		var languageCode = component.get("v.pageLanguage");

		var idSection = 'container_SFResumeHeader';

		helper.translateSectionHelper(component,event,idSection,languageCode);

	}
})