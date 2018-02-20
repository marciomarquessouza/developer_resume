public with sharing class SFResumeMainPageController {

	@AuraEnabled
	public static List<sObject> pageData (String fieldId, String language) {

		String queryString = 'SELECT 	Name, field_id__c, dataType__c, language__c, section__c, sub_section__c, element__c, sub_element__c, ObjectData__c, ObjectDataLarge__c, Active__c  ' + 
							 'FROM 		resumeData__c ' +
							 'WHERE 	field_id__c LIKE: field_id ' +
							 'AND		language__c LIKE: language ' +
							 'AND 		Active__c = True';

		List<sObject> rSQL = Database.query(queryString);

		return rSQL;
		
	}

	@AuraEnabled
	public static List<sObject> dataSection (String sectionId, String language) {

		String queryString = 'SELECT 	Name, field_id__c, dataType__c, language__c, section__c, sub_section__c, element__c, sub_element__c, ObjectData__c, ObjectDataLarge__c, Active__c  ' + 
							 'FROM 		resumeData__c ' +
							 'WHERE 	section__c LIKE: sectionId ' +
							 'AND		language__c LIKE: language ' +
							 'AND 		Active__c = True';

		List<sObject> rSQL = Database.query(queryString);

		return rSQL;
		
	}
}