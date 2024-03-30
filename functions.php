<?php

add_action('after_setup_theme', 'theme_setup');
add_action('wp_enqueue_scripts', 'load_styles');
add_action('wp_enqueue_scripts', 'load_scripts');

function theme_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
}

function load_styles()
{
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('all-styles', get_theme_file_uri('/dist/css/all.min.css'));
}

function load_scripts()
{
    wp_enqueue_script('all-scripts', get_theme_file_uri('/dist/js/all.min.js'));
}
