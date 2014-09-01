WAF.define('wakandaratings', function() {
	var widget = WAF.require('waf-core/widget');
	var wakandaratings = widget.create('wakandaratings');
	
	wakandaratings.addProperty('value', { defaultValue : 2,  type : "number"});
	
	wakandaratings.addProperty('max',{ defaultValue : 5,  type : "number", bindable : false});
	
	
	wakandaratings.prototype.init = function () { 
	
		 var that = this,
			$htmlElement, $rateIt;
		
		
		$('#' + this.id).bind('rated', function(event) {
		 	that.value($rateIt.rateit('value'));
		});
		
		$('#' + this.id).bind('reset', function(event) {
			that.value(0);
		});
		
		$htmlElement = $("#" + this.id);
		$htmlElement.html('<span class="rateit"> </span>');
		
		$rateIt = $htmlElement.find('.rateit');
		$rateIt.rateit();
		$rateIt.rateit('max', this.max());
		
		$rateIt.rateit('value', this.value() || 0);
		this.value.onChange(function (myValue) {
			$rateIt.rateit('value', myValue || 0);
		});
	};
	 
	return wakandaratings;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
