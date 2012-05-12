/**
 * jQuery selectText Plugin 1.0
 * https://github.com/emilkje/jquery.selectText
 *
 * Copyright 2012, Emil Kjelsrud
 * Licenced under MIT
 */
(function ($, doc, win) {
	"use strict";
	$.fn.selectText = function () {
		var element = this[0], textrange = doc.body.createTextRange, selection = win.getSelection(), range = doc.createRange(), text;
		if (doc.body.createTextRange) {
			textrange.moveToElementText(element);
			textrange.select();
		} else if (win.getSelection) {
			if (selection.setBaseAndExtent) {
				selection.setBaseAndExtent(text, 0, text, 1);
			} else {
				range.selectNodeContents(element);
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	};
}(jQuery, document, window));
