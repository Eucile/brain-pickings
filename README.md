# Brain Pickings

#### an Angular site clone by Krystal Foster
#### Oct. 19, 2018

### Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
It will be launched on firebase as a mock-up of the online newsletter, [Brain Pickings](https://www.brainpickings.org/)(original site) using TypeScript, angular components and any new tools I uncover in the weeks ahead.   

## Blue Print

1. The program will feature a main article section that will be informed by a TypeScript model/database to come.

2. [Done] The program will feature a sidebar that will contain multiple components, many feeding off of the central database.

3. [Done] The first component in the sidebar will be a donation section. It does not change or require a constructor, so it will likely be hard-coded and styled within its own component for now.

4. [Mostly Done] The second component contains two newsletter forms. Again, these do not update with new information so they will be hard-coded and composed in their own space.

5. The third component in the sidebar is an About and Contact section. These will only provide external hyperlinks so will be managed with hard code.

6. The fourth sidebar component is an "Also" section that directs users to other additional media on the website, I may implement some routing in this section.

7. The fifth component is an archive section that will include a search feature and pipe. I don't have access to the database and am not sure currently how to implement this part but it will be styled and composed as its own component until it works.

8. [Mostly Done] The sixth sidebar component is a "Favorite Reads" section. This is also a data-informed list that previews the most popular articles up-to-date.

9. [Mostly Done] "Labors of Love" is the ninth component that will feature hand-drawn charts and references to a selection of more articles chosen by the owner.

10. [Most Done] Another component is the logo banner at the top. This contains animation and styling that I will explore in the future.

11. The last component will comprise the footer section. It will be hard-coded and arranged as needed.  


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


### Setup Instructions

First, make sure you have node package manager installed. Check out https://www.npmjs.com/get-npm for information on that.

#### Then:

`$ git clone https://github.com/Eucile/brain-pickings`

`$ cd brain-pickings`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### License

Copyright (c) 2018 **_{ Krystal Foster}_**
