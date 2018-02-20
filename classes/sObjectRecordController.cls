public class sObjectRecordController {
    
    @AuraEnabled public static lightningTableWrapper getRecords(	String 	ObjectName,
                                                                	String 	fieldstoget,
                                                                	decimal pageNumber, 
                                                                	String	pageSize) 	{     
       
        integer offset = (integer.valueOf(pageNumber) - 1) * integer.valueof(pageSize);
                                                                    
        String queryString = 'Select ' 	+ String.escapeSingleQuotes(fieldstoget)+
                             ' from ' 	+ String.escapeSingleQuotes(ObjectName) +
                             ' Limit ' 	+ String.escapeSingleQuotes(pageSize) + 
            				 ' Offset '	+ offset;      
                                                                    
        lightningTableWrapper ltw = new lightningTableWrapper();
                                                                        
        ltw.total = database.countQuery('Select count() from '+ String.escapeSingleQuotes(ObjectName));
        ltw.page = Integer.valueOf(pageNumber);
        ltw.sObjectrecords = database.query(queryString);
                                                                    
        return ltw;
    }
}