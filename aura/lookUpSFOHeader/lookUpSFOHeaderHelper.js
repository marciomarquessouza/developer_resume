({
	searchHelper : function(component,event,getInputKeyWord) {

		var action = component.get("c.listObjects");

		action.setParams({
			'keyWord': getInputKeyWord
		});


		// set a callBack    
		        action.setCallback(this, function(response) {

		            var state = response.getState();

		            if (state === "SUCCESS") {
		                var storeResponse = response.getReturnValue();

		                if (storeResponse.length == 0) {
		                    component.set("v.message", 'No Object with this inital label was found...');
		                } else {
		                    component.set("v.message", '');
		                }
		                
		                component.set("v.oListRecords", storeResponse);
		                
		            }
		 
		        });

		        $A.enqueueAction(action);
		    
			},
})