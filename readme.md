# Amazon AWS Dynamic Image Gallery

## Instructions

Amazon AWS by default return an xml schema of a directory. We can use this information to dynamically create links to files, in this case an image gallery.

### Large Image

First get your full size image and rename it like:

	[unique_id]_[name of file to be used as caption].[extension]

So an example of the above will become:

	123334_This is the name of my image.jpg

Not that it is ok to use spaces. Also, foreign characters should work fine too - anything apart from an underscore.

Place the image in the /gallery/ folder at the root of the site.


### Thumbnail Image

Take the above large image and resize it. Keep exactly the same name but instead save it to the /gallery/tn/ folder.


### Upload

Upload to http://[your]s3.amazonaws.com/gallery/ and /gallery/tn/ respectively.

## Multiple galleries

For each gallery you will need a seperate image folder (and how to arrange the images as described above). To view the folder you simply pass the name of the gallery with a query string. For example, if you have a folder called "cars" for a cars gallery you would use:

...com/index.html?gallery=cars

That's it!!
