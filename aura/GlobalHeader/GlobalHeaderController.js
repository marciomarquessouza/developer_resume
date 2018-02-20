({
	openLanguages : function(component, event, helper) {

		var buttonLanguage = component.find("languageButton");
		$A.util.toggleClass(buttonLanguage,'slds-is-open');

	},

    changeLanguage : function(component, event, helper) {
        
    	var language = component.get("v.languageInitial");
        var callEvent = component.getEvent("languageEvent");
        var selectedLanaguage = '';

    	if(language == 'EN') {

    		component.set("v.languageInitial",'PT');
    		component.set("v.languageOption",'English');
            selectedLanaguage = 'PT';


    	} else {

			component.set("v.languageInitial",'EN');
			component.set("v.languageOption",'Português');
            selectedLanaguage = 'EN';
    	}

    	var a = component.get('c.openLanguages');
        $A.enqueueAction(a);

        callEvent.setParams({ "mainLanguage" : selectedLanaguage });
        callEvent.fire()

    },

    executeMyMethod : function (component, event, helper) {
        var params = event.getParam('arguments');
        component.set("v.searchPlaceHolder",params.param1);
    }

})