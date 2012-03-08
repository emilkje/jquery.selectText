(function( $ ){

	$.fn.selectText = function() {
  
		// there's no need to do $(this) because
		// "this" is already a jquery object

		// $(this) would be the same as $($('#element'));

        var doc = document;
		var element = this[0];
		if (doc.body.createTextRange) {
			var range = doc.body.createTextRange();
			range.moveToElementText(element);
			range.select();
		} else if (window.getSelection) {
			var selection = window.getSelection();
			if (selection.setBaseAndExtent) {
				selection.setBaseAndExtent(text, 0, text, 1);
			} else {
				var range = document.createRange();
				range.selectNodeContents(element);
				selection.removeAllRanges();
				selection.addRange(range);	
			}
		}     
	};
})( jQuery );
