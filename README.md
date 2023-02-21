## CustomTabContainer

Use this widget to dynamically set the active tab page in the local storage.

## Features

Instead of using entity the widget uses local storage from the browser

## Usage

-   Step 1: Add the widget above your Tab Container.
-   Step 2: Copy the name of the Tab Container.
-   Step 3: Open the settings for Custom Tab Container.
-   Step 4: Paste the Copied Tab Container name into the Tab Container Name field.
-   Step 5: Type in the name of the current module in which you're in so unique names for local storage can be
    generated.
-   Step 6: Give XPath for current logged in user so this widget can work and save information for each user
    individually rather than applying same for all the users.

## Issues, suggestions and feature requests

https://github.com/muhammad-asad-26/aio-custom-tab-container/issues

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
