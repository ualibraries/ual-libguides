# University of Arizona Libraries LibGuides Customizations

## Getting started

Run `npm install`

## Scripts

`% npm run build:prod` - Builds the project (the build goes into the `dist` directory).

`% npm run csscomb` - Runs [csscomb](http://csscomb.com/) on all css files.

`% npm run deploy:prod` - Deploys the build from the `master` branch

## LibGuides settings

## System wide

In ['Admin' -> 'Look & Feel' -> 'Custom JS/CSS'](https://arizona.libapps.com/libguides/lookfeel.php), paste the following:

```html
<link href='http://www.library.arizona.edu/vendor-support/libguides/current/dist/ual-styles.css' rel='stylesheet' type='text/css' />
<script src="//v2.libanswers.com/load_chat.php?hash=07713bc057f66ebcdccd4dd1b4a2be3e"></script>
<script src="http://www.library.arizona.edu/vendor-support/libguides/current/dist/ual-scripts.js" type="text/javascript"></script>
```

## Groups

Groups can be edited in 'Admin' -> 'Groups'. Edit a group's JS/CSS settings by choosing the 'Edit' icon for the specific group and going to 'Custom JS/CSS Code'.
