(function(Ratings) {
	Ratings.inherit(WAF.require('waf-behavior/studio'));
     /*Display name of the widget*/
	Ratings.setDescription('Ratings');

//      /*Define your widget's properties*/
	Ratings.addAttributes([{
        name: 'data-max',
        description: 'Max Value',
        type: 'string',
        defaultValue:'5'
    },{
        name: 'data-binding-value',
        description: 'Source',
       typeValue: 'datasource'
    },
    {
    	name:'data-fixedvalue',
    	description:'Value',
    	defaultValue:2,
    	type:'string'
    }]);
    
    

//      /*Default width and height of your widget when added to the Page*/
	Ratings.setWidth('180');
	Ratings.setHeight('21');

//      /*Define the events for your widget*/
	Ratings.addEvent({
        'name': 'rate',
        'description': 'On Rate',
        'category': 'Mouse Events'
    });
    
	Ratings.addEvent({
        'name': 'reset',
        'description': 'On Reset Rate',
        'category': 'Mouse Events'
    });



	Ratings.on('display', function(attributes) {
		
			var that = this;
			
            this.options.max                  = attributes["data-max"];
            this.options.fixedValue                  = attributes["data-fixedvalue"];
			studio.alert("ok");
            if(attributes['data-binding']) {
            	       console.log("ok");
				       $('#' + attributes['id']+' .rateit').html('['+attributes['data-binding']+']');
				       
				   }
			this.init();	   
           
    });

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html
