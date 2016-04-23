/*--put placeholder polyfill inside IIFE function--*/
/*check if placeholder support in the browser if yes, no need fallback code and return exite the function*/
/*if no give the browser a fallback code*/
(function(){
	if('placeholder' in document.createElement('input')){
		return;
	}
	
	//how many form element on the page
	var length = document.forms.length;
	for (i=0, l=length; i<l; i++){
		showPlaceholder(document.forms[i].elements);
	}
	
	//function showPlaceholder
	function showPlaceholder(elements){
		for(i=0, l=elements.length; i<l; i++){
			var el = elements[i];
			if (!el.placeholder){
				continue;
			}
			el.style.color = '#666666';
			el.value = el.placeholder;
				//add event listener when the element gain focus
		addEvent(el, 'focus', function(){
			if (this.value === this.placeholder){
				this.value = '';
				this.style.color = '#000000';
			}
		});
		//add event listener when element lost focus
		addEvent(el, 'blur', function(){
			if (this.value === ''){
				this.value = this.placeholder;
				this.style.color = '#666666';
			}
		});
		}
	}
}());





























