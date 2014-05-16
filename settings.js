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
                
                gallery_master_folder: '',
                
                // This is the main folder where the images are
                // kept in relation to your html file
                // (for example: gallery_master_folder: 'images',).
                // If all the images are kept in different folders
                // on the main directory level, then simply leave
                // this empty (like so: gallery_master_folder: '',).
                
                main_menu_title: '',
                
                // This is the main title for your galleries menu.
                
                // You can also insert html in here. Please be sure
                // to use double quotes ("), as opposed to single
                // quotes (') to avoid any output errors.
                
        },
                
        gallery_1: {
                        
                cover_thumb: '',
                        
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
                        
                
                gallery_title: '',
                        
                        // Gallery title (optional).
                        
                        // If left blank it will display the
                        // 'main_menu_title' in its place.
                        
                        // You can also insert html in here.
                        
                image_1: {
                        
                        thumb: '',
                        
                        // Image thumbnail file path (compulsory).

                        // ***IMPORTANT***: If the image path is
                        // incorrect the thumbnail will appear blank.
 
                        // If the image size is larger than the
                        // thumbnail dimensions, flipGallery will
                        // automatically crop it for you.
                        
                        enlarged: '',
                        
                        // Image enlargement file path (compulsory).

                        // ***IMPORTANT***: If the image path is
                        // incorrect the lightbox will not open.

                        // The lightbox image size will be set to the
                        // size of the actual image.
                        
                        text: ''
                        
                        // Text to accompany enlarged image (optional).
                        
                        // You can also insert html in here.
                
                },

                // So now you've got the hang of it, you can insert your
                // other images and text:

                image_2: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                
                image_3: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_4: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_5: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_6: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_7: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_8: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                // The image order increments from 1 onwards
                // (eg: image_1, image_2, image_3 etc). Please be
                // sure the incrementation has no numerical gaps. 
                
                // So say for example you would like a total of
                // nine images in your gallery, simply copy
                // 'image_8' and paste it directly below itself.
                // Then rename it 'image_9' like so:

/*              image_9: {

                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
*/
                // You can continue this process as much as you
                // like. flipGallery will automatically paginate
                // the pages for you.
                
        },


        // *Additional Gallery Templates*
        // Below are four extra pre-made gallery templates.
        // Please be sure you don't skip over any galleries.
        // It's also best practice to remove any at the end that
        // are left empty.
        
        // If you only have one gallery, flipGallery will
        // automatically start within that gallery.


        gallery_2: {
                        
                cover_thumb: '',
                
                gallery_title: '',
                        
                        
                image_1: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_2: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_3: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_4: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_5: {
                        
                        thumb: '',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: '',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                
        },

        // From now on the gallery images structure is compressed for
        // speed of insertion.

        gallery_3: {
                
                cover_thumb: '',
                gallery_title: '',
                image_1: { thumb: '', enlarged: '', text: '' },
                image_2: { thumb: '', enlarged: '', text: '' },
                image_3: { thumb: '', enlarged: '', text: '' },
                image_4: { thumb: '', enlarged: '', text: '' },
                image_5: { thumb: '', enlarged: '', text: '' },
                
        },

        gallery_4: {
                
                cover_thumb: '',
                gallery_title: '',
                image_1: { thumb: '', enlarged: '', text: '' },
                image_2: { thumb: '', enlarged: '', text: '' },
                image_3: { thumb: '', enlarged: '', text: '' },
                image_4: { thumb: '', enlarged: '', text: '' },
                image_5: { thumb: '', enlarged: '', text: '' },
                
        },

        gallery_5: {
                
                cover_thumb: '',
                gallery_title: '',
                image_1: { thumb: '', enlarged: '', text: '' },
                image_2: { thumb: '', enlarged: '', text: '' },
                image_3: { thumb: '', enlarged: '', text: '' },
                image_4: { thumb: '', enlarged: '', text: '' },
                image_5: { thumb: '', enlarged: '', text: '' },
                
        },

        // Paste in any further additional galleries here.
        
        // The gallery menu order increments from 1 onwards
        // (eg: gallery_1, gallery_2, gallery_3 etc). Please be sure
        // the incrementation has no numerical gaps.
        
        // Say for example you would like a total of six
        // galleries. Simply copy and paste 'gallery_5' and paste it
        // directly below itself. Then change the newly pasted
        // gallery name from 'gallery_5' to 'gallery_6' like so:

/*      gallery_6: {
                
                cover_thumb: '',
                gallery_title: '',
                image_1: { thumb: '', enlarged: '', text: '' },
                image_2: { thumb: '', enlarged: '', text: '' },
                image_3: { thumb: '', enlarged: '', text: '' },
                image_4: { thumb: '', enlarged: '', text: '' },
                image_5: { thumb: '', enlarged: '', text: '' },
                
        },
*/
        // Again, you can continue this process as much as you like.
        // flipGallery will automatically paginate the pages for you.


};

// Now you have inserted your content, flipGallery is now ready to try.

// After you have given it a test, the next step is to take a look
// at the settings and adjust where needed:

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
        
        position_property: 'float: left;',
        
        // How you wish to 'position' or 'float' flipGallery
        // within your html document (for example: 'float: right;'
        // or 'position: fixed; left: 10px; top: 10px;' or
        // 'margin:auto; position:relative;').
        
        // *Gallery Navigation Visual Settings*
        
        gallery_navigation_bar_margin_top: 10, // (pixels)
        
        gallery_navigation_bar_height: 30, // (pixels)
    
        // *Thumbnail Visual Settings*

        thumbnail_columns: 4, 
    
        thumbnail_rows: 3, 
    
        thumbnail_width: 230, // (pixels)
    
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
    
        initial_time_gap_between_thumbnails: 200,
    
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

        loading_text_color: '#fff',
    
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