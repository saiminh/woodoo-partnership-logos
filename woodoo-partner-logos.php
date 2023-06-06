<?php
/**
 * Plugin Name:       Woodoo Partner Logos
 * Description:       Add Metadata for Logos for the custom post type "Partners".
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Simon Flöter
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       woodoo-partner-logos
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_woodoo_partner_logos_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_woodoo_partner_logos_block_init' );

// register custom meta tag field
function register_post_meta_woodoo_partner_logo() {
  register_post_meta( 'partners', 'partnerlogo', array(
      'show_in_rest' => true,
      'single' => true,
      'type' => 'string',
      'default' => 'https://via.placeholder.com/150X60'
  ) );
}
add_action( 'init', 'register_post_meta_woodoo_partner_logo' );