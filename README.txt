This is a Module specifically for Open Atrium and the Time Tracker (drupal.org/project/time_tracker) module.

To enable, download the files into a folder called atrium_time_tracker (if you clone the repo using git, just rename the Atrium-Time-Tracker folder). Put that folder into sites/all/modules and goto admin/build/modules and enable as you would a regular module.

Once enabled you will have the following:

  - Additional theming for the time estimate and the time tracker summaries that appear at the top of nodes with time tracking enabled.

*** IMPORTANT NOTE (Changes as of April 24, 2012): ***

This module used to add a themed menu link into the features menu for the time sheet. This has been removed and put in it's own feature which is Spaces-aware. This was done to allow users to enable the time sheet feature on a group by group basis. If you would want to update your Atrium Time Tracker module, but still retain the Time Sheet menu link, you will need to do the following:

- Disable the old Atrium Time Tracker module
- Remove the old verion of Atrium Time Tracker and replace with this one
- Download the Atrium Time Sheet feature from: https://github.com/fuseinteractive/Atrium-Time-Sheet
- Re-enable Atrium Time Tracker and enable Atrium Time Sheet
- Clear the Cache
- Enable the Time Sheet Feature on a group by group basis by clicking on "Settings" then "Customize Features". Atrium Time Sheet should be in the list of available Features. See the Time Sheet README.txt for more details.
