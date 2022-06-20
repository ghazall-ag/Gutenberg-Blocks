<?php
/**
 * Custom Gutenberg functions
 */




function custombtn_gutenberg_block(){

wp_register_script('custom-btn-js',get_template_directory_uri().'/build/index.js',array('wp-blocks','wp-editor','wp-components'));
register_block_type('custombtn/custom-btn',array(
'editor_script'=>'custom-btn-js'
));

}


add_action('init','custombtn_gutenberg_block');