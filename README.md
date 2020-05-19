# University of Arizona Libraries LibGuides Customizations

## Getting started

Run `npm install`

### What's here:

```sh
.
├── .csscomb.json # CSSComb settings
├── .editorconfig # Editorconfig settings
├── .gitignore
├── .travis.yml # Travis CI settings
├── LICENSE
├── README.md
├── dist # Where build artifacts go. Don't edit these directly
├── gulpfile.js # Gulp config
├── package-lock.json
├── package.json
├── shipitfile.js # Shipit deployment settings
└── src # Source files. You should edit these
```

## Scripts

`% npm run build:prod` - Builds the project (the build goes into the `dist` directory).

`% npm run csscomb` - Runs [csscomb](http://csscomb.com/) on all css files.

`% npm run deploy:prod` - Syncs the `dist` directory to the production AWS S3 bucket `ualibr-libguides-assets` using the 'default' profile. Append `-- <args>` to add arguments to the command. For example, to add an aws profile you would run:
  ```
  % npm run deploy:prod -- --profile <name_of_profile>
  ```

## LibGuides settings

### System wide

In ['Admin' -> 'Look & Feel' -> 'Custom JS/CSS'](https://arizona.libapps.com/libguides/lookfeel.php), paste the following:

```html
<link href='http://www.library.arizona.edu/vendor-support/libguides/current/dist/ual-styles.css' rel='stylesheet' type='text/css' />
<script src="//v2.libanswers.com/load_chat.php?hash=07713bc057f66ebcdccd4dd1b4a2be3e"></script>
<script src="http://www.library.arizona.edu/vendor-support/libguides/current/dist/ual-scripts.js" type="text/javascript"></script>
```

### Groups

Groups can be edited in 'Admin' -> 'Groups'. Edit a group's JS/CSS settings by choosing the 'Edit' icon for the specific group and going to 'Custom JS/CSS Code'.
