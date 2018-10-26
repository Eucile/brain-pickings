# Brain Pickings

#### an Angular site clone by Krystal Foster
#### Oct. 19, 2018

### Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
It will be launched on firebase as a mock-up of the online newsletter, [Brain Pickings](https://www.brainpickings.org/)(original site) using TypeScript, angular components and any new tools I uncover in the weeks ahead.   

## Current Structure

1. [TO REVISIT] The program features a main article section that I would like to be informed by a database, but currently I am not sure how to pass content that includes multiple html elements and unique composition into a firebase argument. I initially had it feeding from the database but for now, it is hard-coded as a placeholder. I will revisit this feature once I know how to do pass all media properly.

2. [DONE] The program features a sidebar that contains multiple components, three of them successfully feed off the central firebase database.

3. [DONE] The first component in the sidebar is a donation section. It does not change or require a constructor, so it is hard-coded and styled within its own component.

4. [DONE] The second component contains the newsletter form. Again, these do not update with new information so they will be hard-coded and composed in their own space.

5. [TO ADD] The third component in the sidebar is an About and Contact section. These will only provide external hyperlinks so will be managed with hard code.

6. [DONE] The fourth sidebar component is an "Also" section that directs users to other additional media on the website.

7. [DONE] The sixth sidebar component is a "Favorite Reads" section. This is also a data-informed list that previews the most popular articles up-to-date. It is successfully retrieving its contents via a firebase list.

8. [DONE] "Labors of Love" is the ninth component that also draws from another list in the database.

9. [TO REVISIT] Another component is the logo banner at the top. This contains animation and styling that I would like to explore in the future but it does not seem necessary for this week's emphasis on Angular.

10. [DONE] The last component is the footer section, which is static.

### Screen Shots

![Screenshot](ss1.png)
![Screenshot](ss1.png)

### Technologies and Resources

* JavaScript
* HTML
* TypeScript
* ESlint
* Babel
* Jasmine
* Karma
* NPM
* Angular
* Firebase


### Setup Instructions

First, make sure you have node package manager installed globally. Check out https://www.npmjs.com/get-npm for information on that.

#### Then:

`$ git clone https://github.com/Eucile/brain-pickings`

`$ cd brain-pickings`
`$ npm install`

Run `ng serve --open` for a dev server. The app will automatically reload if you change any of the source files.

### License

Copyright (c) 2018 **_{ Krystal Foster}_**
