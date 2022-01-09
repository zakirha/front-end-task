
We are not able to load the data.json inside the data.load() method as this method ("behind the hood") makes a FETCH call and expects the data to be available over the network (on HTTP)

Example:

grid.data.load("https://snippet.dhtmlx.com/codebase/data/grid/01/dataset.json");

When trying to load the local file using the data.load() method we keep getting the "URL Schema File is not supported exception"

Hence created a script file (data.js) and for demo purposes manually coded the data.json into a Javascript Object Array and used the grid's data.parse() method to load the data inside the grid



