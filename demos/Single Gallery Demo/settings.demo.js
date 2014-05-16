/*!
 * flipGallery - jQuery Powered Animated Photo Gallery
 * version: 1.1.1
 * @requires jQuery v1.5 or later
 *
 * License at http://flipgallery.net/#download
 * 
 * Example at http://flipgallery.net
 *
 * Copyright 2014 flipGallery.net
 *
 */

// BEFORE YOU START
// ----------------

// In this document you can add your images, adjust the layout,
// co-ordination and speed of flipGallery. flipGallery does not
// require an external CSS file and all elements of flipGallery
// can be controlled from here. flipGallery's background is
// transparent, so it will overlay the color and/or images set
// in your html document. Please follow the annotations and in
// a few minutes you will be up and running.

// YOUR CONTENT
// ------------

// To get flipGallery up and running you will need to insert 
// your content:

var fg_my_content = {
        
        content_master: {
                
                gallery_master_folder: '../x-demo-images',
                
                // This is the main folder where the images are
                // kept in relation to your html file
                // (for example: gallery_master_folder: 'images',).
                // If all the images are kept in different folders
                // on the main directory level, then simply leave
                // this empty (like so: gallery_master_folder: '',).
                
                main_menu_title: 'Single Gallery Demo',
                
                // This is the main title for your galleries menu.
                
                // You can also insert html in here. Please be sure
                // to use double quotes ("), as opposed to single
                // quotes (') to avoid any output errors.
                
        },
                
        gallery_1: {
                        
                cover_thumb: '1.gif',
                        
                        // Gallery cover image file path
                        // (compulsory).
                
                        // ***IMPORTANT***: If the image path is
                        // incorrect the gallery cover thumbnail will
                        // appear blank.

                        // If the image size is larger than the
                        // thumbnail's dimensions, flipGallery will
                        // automatically crop it for you.
                        
                        // All image paths are an extension
                        // continuing from your 'gallery_master_folder'
                        // setting. If your 'gallery_master_folder'
                        // setting is left empty then it will be
                        // relative to the location of your html file.
                        
                
                gallery_title: 'Gallery 1',
                        
                        // Gallery title (optional).
                        
                        // If left blank it will display the
                        // 'main_menu_title' in its place.
                        
                        // You can also insert html in here.
                        
                image_1: {
                        
                        thumb: '1.gif',
                        
                        // Image thumbnail file path (compulsory).

                        // ***IMPORTANT***: If the image path is
                        // incorrect the thumbnail will appear blank.
 
                        // If the image size is larger than the
                        // thumbnail dimensions, flipGallery will
                        // automatically crop it for you.
                        
                        enlarged: '1.gif',
                        
                        // Image enlargement file path (compulsory).

                        // ***IMPORTANT***: If the image path is
                        // incorrect the lightbox will not open.

                        // The lightbox image size will be set to the
                        // size of the actual image.
                        
                        text: ''
                        
                        // Text to accompany enlarged image (optional).
                        
                        // You can also insert html in here.
                
                },

                // From now on the gallery images structure is compressed
                // for speed of insertion.

                image_2: { thumb: '2.gif', enlarged: '2.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_3: { thumb: '3.gif', enlarged: '3.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_4: { thumb: '4.gif', enlarged: '4.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_5: { thumb: '5.gif', enlarged: '5.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_6: { thumb: '6.gif', enlarged: '6.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_7: { thumb: '7.gif', enlarged: '7.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_8: { thumb: '8.gif', enlarged: '8.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_9: { thumb: '9.gif', enlarged: '9.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_10: { thumb: '10.gif', enlarged: '10.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_11: { thumb: '11.gif', enlarged: '11.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_12: { thumb: '12.gif', enlarged: '12.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_13: { thumb: '13.gif', enlarged: '13.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                image_14: { thumb: '14.gif', enlarged: '14.gif', text: '<b>Example Title</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem vitae lacus sollicitudin lacinia. <a href="http://flipgallery.net/" target="_blank" style="color: #000;">Example Link</a>' },
                
        },

};

// MODE SETTINGS
// -------------

var fg_mode_settings = {
        
        edit_mode: 1,
        
        // 1 = On & 0 = Off.
        
        // ***IMPORTANT***: It is recommended to leave this
        // option switched on during assembly of your galleries
        // as it will prevent your images from caching.
        // Once published online, it is then recommended that you
        // switch it off, as it will result in the reduction of
        // workload on your hosting.
        
}

// VISUAL SETTINGS
// ---------------

var fg_visual_settings = {
        
        // *Content Visual Settings*
        
        position_property: 'margin:auto; position:relative;',
        
        // How you wish to 'position' or 'float' flipGallery
        // within your html document (for example: 'float: right;'
        // or 'position: fixed; left: 10px; top: 10px;' or
        // 'margin:auto; position:relative;').
        
        // *Gallery Navigation Visual Settings*
        
        gallery_navigation_bar_margin_top: 10, // (pixels)
        
        gallery_navigation_bar_height: 30, // (pixels)
    
        // *Thumbnail Visual Settings*

        thumbnail_columns: 5, 
    
        thumbnail_rows: 3, 
    
        thumbnail_width: 180, // (pixels)
    
        thumbnail_height: 230, // (pixels)
    
        thumbnail_space_top: 5, // (pixels)
    
        thumbnail_space_left: 5, // (pixels)
    
        thumbnail_space_right: 5, // (pixels)
    
        thumbnail_space_bottom: 5, // (pixels)
    
        // *Lightbox Visual Settings*
    
        lightbox_background_opacity: 0.8,
    
        lightbox_border_width: 10, // (pixels)
    
        lightbox_border_color: '#fff'
    
}

// SPEED SETTINGS
// --------------

var fg_speed_settings = {
    
        thumbnail_flip_speed: 800,
    
        // Speed of complete thumbnail flip (milliseconds).
    
        initial_time_gap_between_thumbnails: 50,
    
        // Time gap between each thumbnail flipping in when the
        // page first loads (milliseconds).
    
        normal_time_gap_between_thumbnails: 50
    
        // Time gap between each thumbnail flipping round after
        // page load (milliseconds).

}

// TEXT SETTINGS
// -------------

var fg_text_settings = {
        
        // *Gallery Title Text Settings*
    
        gallery_title_text_style: 'font-size: 18px; color: #000; font-weight: bold;',
    
        // *Gallery Navigation Text Settings*
    
        return_to_main_gallery_text: '&lsaquo;&lsaquo; Back To Main Gallery',
    
        return_to_main_gallery_text_style: 'font-size: 14px; color: #333; font-weight: bold; text-decoration: none;',
    
        next_gallery_text: 'Next &rsaquo;&rsaquo;',
    
        back_gallery_text: '&lsaquo;&lsaquo; Back',
    
        next_and_back_text_style: 'font-size: 14px; color: #333; font-weight: bold; text-decoration: none;',
    
        page_number_page: 'Page',
    
        page_number_of: 'of',
    
        page_number_text_style: 'font-size: 13px; color: #999;',
    
        // *Picture/Lightbox Text Settings*
    
        lightbox_text_style: 'font-size: 14px; line-height: 1.4; color: #000; text-align: center;',
    
        lightbox_text_background_style: 'background-color: #fff; opacity:0.8;',
    
        // *Picture/Lightbox Navigation Text Settings*
    
        next_image_text: 'Next &rsaquo;&rsaquo;',
    
        back_image_text: '&lsaquo;&lsaquo; Back',
    
        next_and_back_image_text_style: 'font-weight: bold; color: #000;',
    
        image_number_page: 'Image',
    
        image_number_of: 'of',
    
        image_number_text_style: 'color: #999;',

        // *Image Streaming Text Settings*

        loading_text_color: '#333',
    
        loading_text_opacity: '0.3'
    
}

// A NOTE FOR DEVELOPERS
// ---------------------

// Only the variables in this document are global. They are all
// prefixed with 'fg_'to help them not to conflict with any
// other javascript variables that may be included in your document.

// AND FINALLY
// -----------

// Please feel free to remove all the annotations but be sure to
// keep the header (containing the ownership and copyright) intact.

// Thanks,

// The flipGallery Team