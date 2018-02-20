({
	onFocus : function(component, event, helper) {
		
		var lookUpElementOpen = component.find("lookupStatus");
		$A.util.addClass(lookUpElementOpen,'slds-is-open');
		$A.util.removeClass(lookUpElementOpen,'slds-combobox-lookup');

		var lookUpFocus = component.find("lookupFocused");
		$A.util.addClass(lookUpFocus,'slds-has-input-focus');
		
		var getInputKeyWord = '';
		helper.searchHelper(component,event,getInputKeyWord);

	},

	keyPressController : function(component,event,helper) {
		var getInputKeyWord = component.get("v.keyWord");

		if(getInputKeyWord.length > 0) {
			var lookUpElementOpen = component.find("lookupStatus");
			$A.util.addClass(lookUpElementOpen,'slds-is-open');
			$A.util.removeClass(lookUpElementOpen,'slds-combobox-lookup');

			var lookUpFocus = component.find("lookupFocused");
			$A.util.addClass(lookUpFocus,'slds-has-input-focus');

			helper.searchHelper(component,event,getInputKeyWord);

		} else {
			component.set("v.oListRecords",null);

			var lookUpElementClose = component.find("lookupStatus");
			$A.util.addClass(lookUpElementClose,'slds-combobox-lookup');
			$A.util.removeClass(lookUpElementClose,'slds-is-open');

			var lookUpFocus = component.find("lookupFocused");
			$A.util.removeClass(lookUpFocus,'slds-has-input-focus');

		}
	},

	handleSelectObject : function(component,event,helper) {

		var selectedObjectFromEvent = event.getParam("lookUpItem");

		component.set("v.selectedObject",selectedObjectFromEvent);

		var lookUpElementClose = component.find("lookupStatus");
			$A.util.addClass(lookUpElementClose,'slds-combobox-lookup');
			$A.util.removeClass(lookUpElementClose,'slds-is-open');

		var lookUpElementSelected = component.find("lookupSelectedObject");
			$A.util.addClass(lookUpElementSelected,'slds-show');
			$A.util.removeClass(lookUpElementSelected,'slds-hide');

		var lookUpInputElement = component.find("lookupInput");
			$A.util.addClass(lookUpInputElement,'slds-hide');
			$A.util.removeClass(lookUpInputElement,'slds-show');

		var lookUpFocus = component.find("lookupFocused");
			$A.util.removeClass(lookUpFocus,'slds-has-input-focus');

	},

	closePill : function(component,event,helper) {

		var lookUpElementSelected = component.find("lookupSelectedObject");
			$A.util.addClass(lookUpElementSelected,'slds-hide');
			$A.util.removeClass(lookUpElementSelected,'slds-show');

		var lookUpInputElement = component.find("lookupInput");
			$A.util.addClass(lookUpInputElement,'slds-show');
			$A.util.removeClass(lookUpInputElement,'slds-hide');


		component.set("v.keyWord",null);
		component.set("v.selectedObject",null);
		component.set("v.oListRecords",{});

	},

	toggleSpinner : function(component,event,helper) {

		var lookUpSpinner = component.find("lookUpSpinner");
		$A.util.toggleClass(lookUpSpinner, "slds-hide");
	}

})