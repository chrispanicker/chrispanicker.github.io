var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3wySYYU0tXKf12'}).base('appwWvc8kL4LpURS5');

let fullArray = [];

base('Table 1').select({
   maxRecords: 101,
   view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      if (every_window) {

        fullArray.push(record);
        console.log(fullArray);


         // define and create elements
         let parent1 = document.createElement('div');
         let parent2 = document.createElement('div')
         let img = document.createElement('img');

      
         /*// Set innerHTML of the elements
         h1.innerHTML = record.get('Feeling');
         p.innerHTML = record.get('Shape');
         img.src = record.fields.Attachments[0].url;

        //img styling
        img.style.height = "40vw";
        img.style.width = "40vw";
        img.style.objectFit = "cover";

        //change img shape based on the Shape record 
        if (record.get('Shape') == "circular"){ 
            img.style.borderRadius= "40vw";
            console.log("gotcha");
        }

        // append them to the list
        document.getElementById('every_window').append(parent);
        console.log(record)
        parent.append(img, h1, p);*/
      }
    });
    

    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});