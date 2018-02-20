//classes/lookUpSFOHeaderController.cls
/* 		created by: Marcio Souza
		based on script posted on "http://sfdcmonkey.com/2017/07/17/re-usable-custom-lookup/" */

public class lookUpSFOHeaderController {
	
	//return all Salesforce Objects
	@AuraEnabled
	public static List <sObject> listObjects (String keyWord) {

		//combine the letter sent by paramenter with the wildcard %
		String keyWordWildCard = keyWord + '%';

		//Query to bring the Label and the API Object limited by the number of lines sent by parameter
		String queryString = 'SELECT label,qualifiedapiname FROM EntityDefinition WHERE label LIKE: keyWordWildCard ORDER BY label LIMIT 5';
		
		//Query result and looping to fill the method return
		List<sObject> rSQL = Database.query(queryString);
		List<sObject> returnListObjects = new List<sObject>();

		for (sObject item:rSQL) {

			returnListObjects.add(item);
		}

		return 	returnListObjects;

	}
}