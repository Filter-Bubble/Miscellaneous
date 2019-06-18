# Miscellaneous

This repository contains various scripts and documents.

## Repository content

### IDSelector.js

The _ID Selector_ is a _GreaseMonkey_ script which makes it easier to select _Passive Data Kit_ ID's for exporting. 

To install the script, add the [GreaseMonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) extension to _Firefox_, then create a new user script and copy the content from this file into the new script.

To use the script, go to the [export page](https://bubble.labs.vu.nl/data/export) of the _Passive Data Kit_ and press `Ctrl+Enter`. This will open a prompt asking for the list of ID's. These ID's are gathered using the _Qualtrics_ survey. In the [Visualisation](https://github.com/Filter-Bubble/Filter-Bubble-Visualisations) _Jupyter Notebook_, the survey data is imported and the ID's are placed in a variable named `qualtricsIdListUnionWaves`. The output of this variable, which is already in the format `['ID1','ID2',...]`, can be copied into the prompt. This will automatically select all relevant ID's.