"use strict";

var gallery = function () {

	var elements = [], current_number = 0, default_number = 20, url;

	//get the xml, and call parseXML on success
	function init (path, url) {
		if (typeof path === "undefined") {
			alert('You must specify an image folder');
			return false;
		}
		if(typeof url === "undefined") {
			alert("Please specify a url");
		}
		$.ajax({
			url: url,
			success: parseXML
		});
		//add infinite scroll
		$(window).scroll(scroll_handler);
	}

	//get the information we need
	function parseXML (xml) {
		$(xml).find("Contents").each(function() {
    		var content = $(this).find('Key').text();
			var file = content.match(/.*\/([^/]+)\.([^?]+)/i);
			if (file !== null) {
				//path, filename (remove the 'uniqueId_')
				elements.push(buildElement(file[0], file[1].split('_')[1].replace('-', ' ')));
			}
		});
		//add the images to the page
		drawImages (1, default_number);
	}

	//and create elements and add to array
	function buildElement (path, title) {
		return '<li class="span3">' + 
			'<a href="' + path.replace('/tn', '') + '" class="thumbnail img_modal" data-image-name="' + title + '" rel="lightbox[group]" title="' + title + '">' +
				'<img src="' + path + '" alt="">' + 
			'</a></li>';
	}

	function drawImages (from, number) {
		for (var i = 0; i < number; i++, current_number++) {
			if (current_number > elements.length) break;
			$('.thumbnails').append(elements[current_number]);
		}
		//add handler
		$("[rel^='lightbox']").prettyPhoto({social_tools:false});
	}

	function scroll_handler () {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
			if (current_number >= elements.length) {
				$(window).unbind("scroll");
			} else {
				drawImages(current_number, default_number);
			}
        }
	}

	return {
		init : init
	}

}();