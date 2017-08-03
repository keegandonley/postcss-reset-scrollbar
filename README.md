# PostCSS Reset Scrollbar 
[![Build Status](https://travis-ci.org/keegandonley/postcss-reset-scrollbar.svg?branch=master)](https://travis-ci.org/keegandonley/postcss-reset-scrollbar)
[![npm](https://img.shields.io/npm/v/postcss-reset-scrollbar.svg)]()
[![npm](https://img.shields.io/npm/l/postcss-reset-scrollbar.svg)]()
[![](https://img.shields.io/github/issues-pr/keegandonley/postcss-reset-scrollbar.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/keegandonley/postcss-reset-scrollbar.svg)]()

[PostCSS](https://github.com/postcss/postcss) plugin to remove scrollbar style rules.

I really hate when libraries (semantic UI, etc) try to style the scrollbar in browsers. This simply strips all styling for scrollbars. 

## Installing
This package requires postCSS:

`npm i --save-dev postcss`

then

`npm i --save-dev postcss-reset-scrollbar`

## Usage

`postcss([require('postcss-reset-scrollbar')]);`
