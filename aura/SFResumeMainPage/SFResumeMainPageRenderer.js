/* 
    created by Marcio Souza
    based on Doug Ayers code (https://github.com/DouglasCAyers) - 
    https://github.com/DouglasCAyers/sfdc-lightning-data-tables-component/blob/master/src/aura/DataTableCmp/DataTableCmpRenderer.js
*/
({
    afterRender : function( component, helper ) {


        this.superAfterRender();

        var totalChilds = document.getElementById("container_body").childNodes.length;
        var childs = document.getElementById("container_body").childNodes;
        var childsObj = []
        var totalHeight = 0;

        var didScroll = false;
        window.onscroll = function() {
            didScroll = true;
        };

        var scrollCheckIntervalId = setInterval( $A.getCallback( function() {

            if ( didScroll && component.isValid() ) {

                didScroll = false;

                // Window View Dimensin (Height)
                var window_initial_height = window['scrollY'];
                var window_final_height = window['scrollY'] + window['innerHeight'];
                var window_total_height = window['innerHeight'];
                var selectedElements = [];

                for (var i = 0; i < totalChilds; i++) { 

                    //Element dimensions
                    i == 0 ?
                    (childsObj.push( {   'id': childs[i].id ,
                                        'height': childs[i].offsetHeight,
                                        'container_initial_height': 0,
                                        'container_final_height': childs[i].offsetHeight,
                                        'window_percent': 0
                                    } )) : 
                    (childsObj.push( {   'id': childs[i].id ,
                                        'height': childs[i].offsetHeight,
                                        'container_initial_height': totalHeight,
                                        'container_final_height': totalHeight + childs[i].offsetHeight,
                                        'window_percent': 0
                                        } ));

                    totalHeight += childs[i].offsetHeight;

                    //Percent of each element inside the window view
                    if ( (childsObj[i].container_final_height >= window_initial_height) && (childsObj[i].container_initial_height <= window_final_height ) ) {

                        if ( (window_initial_height <= childsObj[i].container_initial_height) && (window_final_height >= childsObj[i].container_final_height ) )  {
                            childsObj[i].window_percent = ((1 -  ( (window_total_height - childsObj[i].height) / window_total_height) ) * 100 ).toFixed(2);
                        }

                        if ( (window_initial_height <= childsObj[i].container_initial_height) && (window_final_height < childsObj[i].container_final_height ) ) {
                            var spaceInsideWindow = window_final_height - childsObj[i].container_initial_height;
                            childsObj[i].window_percent = ( (1 -  (  (window_total_height - spaceInsideWindow) / window_total_height) ) * 100 ).toFixed(2);   
                        }


                        if ( (window_initial_height > childsObj[i].container_initial_height) && (window_final_height >= childsObj[i].container_final_height ) ) {
                            var spaceInsideWindow = childsObj[i].container_final_height - window_initial_height;
                            childsObj[i].window_percent = ( (1 -  ( (window_total_height - spaceInsideWindow) / window_total_height ) ) * 100 ).toFixed(2);   
                        }

                        if ( (window_initial_height >= childsObj[i].container_initial_height) && (window_final_height <= childsObj[i].container_final_height ) ) {
                            childsObj[i].window_percent = 100;  
                        }

                        selectedElements.push(childsObj[i].id);
                        console.log(childsObj[i].id);
                        console.log('percentual: ' + childsObj[i].window_percent);
                        console.log('------------------------');

                    }
                }

                console.log('********************');

            }

        }), 1000 );

        //component.set( 'v.scrollCheckIntervalId', scrollCheckIntervalId );

    },

    unrender : function( component, helper ) {

        this.superUnrender();

    }
})