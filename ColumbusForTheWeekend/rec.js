
// document.getElementById("entry-template").append(html);


  var globalValueOccurrences = [];
  Handlebars.registerHelper('displayIfFirstOccurrence', function( value ){
    if ( globalValueOccurrences[ value ] === value ){
    	console.log(globalValueOccurrences);
      return "none"; //if it has been found, don't display
    } else {
      globalValueOccurrences[ value ] = value; //set the value
      return "block"; //if it hasn't yet been found, display it
    }
  });
  var deals = 'https://docs.google.com/spreadsheets/d/1zp100czRz7uEj5Gxnq_JP01cjiAcfdeWzU5Drgk-dow/edit#gid=0';



  var recs1Template = Handlebars.compile($('#recs1-template').html());
  $('#recs1').sheetrock({
    url: deals
    ,query: "select A,B,C,D,E where A = 1"
    ,rowTemplate: recs1Template
  });


var recs2Template = Handlebars.compile($('#recs2-template').html());
  $('#recs2').sheetrock({
    url: deals
    ,query: "select A,B,C,D,E where A = 2"
    ,rowTemplate: recs2Template
  });
