WAF.define('Ratings', function() {
    var widget = WAF.require('waf-core/widget');
    var Ratings = widget.create('Ratings');

//	Event.create("rate");
//    Event.create("reset");
    
	Ratings.prototype.init = function () { 
	     var that = this,
            $htmlElement, max;
		
		
		 $('#' + this.id).bind('rated', function(event) {
		 	that._binded_attributes.value.datasource.rate = $(this).find('.rateit').rateit('value');
		 	that._binded_attributes.value.datasource.save();
            
            Ratings.autoFireDomEvent('rate', Event.rate);
            
        });
        $('#' + this.id).bind('reset', function(event) {
        	that._binded_attributes.value.datasource.rate = 0;
		 	that._binded_attributes.value.datasource.save();
            
             Ratings.autoFireDomEvent('reset', Event.reset);
        });
		
        $htmlElement = $("#" + this.id);
        max = this.options.max || 5;
        $htmlElement.html('<div class="waf-container"><span class="rateit"> </span></div>');
		
		$rateIt = $htmlElement.find('.rateit');
		$rateIt.rateit();
        $rateIt.rateit('max', max);

        if (this.options.fixedvalue) {
			$rateIt.rateit('value', this.options.fixedvalue);
        }
	};
	
	Ratings.prototype.value = function(myValue) {
        if (arguments.length > 0) { // if there's a parameter, set the value
            this._value = myValue;

           $("#" + this.id).find('.rateit').rateit('value', myValue); //update rating
        }
        return this._value; // otherwise, just get the value
    };
	
//  /* create a new bindable property */
	
	Ratings.makeBindableProperty('value',Ratings.prototype.value, Event.rate);
	
    return Ratings;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
