
jQuery.fn.extend({

	live: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			 return this.on(types, selector, data, fn, one);
	}
});
