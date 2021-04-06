var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3wySYYU0tXKf12'}).base('appwWvc8kL4LpURS5');

let every_window = document.getElementById('every_window');

base('Table 1').select({
   maxRecords: 100,
   view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      if (every_window) {

         // define and create elements
         let el = document.createElement('li');
         let p = document.createElement('p');
         let h1 = document.createElement('h1');
         let img = document.createElement('img');

         // Set innerHTML of the elements
         h1.innerHTML = record.get('Feeling');
         p.innerHTML = record.get('Shape');
         img.src = record.fields.Attachments.url;
         console.log(h1.innerHTML)
         console.log(p.innerHTML)
         // append them to the list
         every_window.append(el);
         el.append(img, h1, p);
      }
    });

    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});