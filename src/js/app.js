/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
//  */

// var UI = require('ui');
// var ajax = require('ajax');

// var main = new UI.Card({
//   title: 'Pebble.js',
//   icon: 'images/menu_icon.png',
//   subtitle: 'Hello World!',
//   body: 'Press any button.',
//   subtitleColor: 'indigo', // Named colors
//   bodyColor: '#9a0036' // Hex colors
// });

// main.show();
// console.log('running')
// main.on('click', 'up', function(e) {


//   ajax({ url: "http://sadiklsd.tk:4567/lights",method: 'post',crossDomain: true,
// data: {"color":"blue"}}, function(data, status, req){
//     console.log(data)
//     console.log(status)
//     console.log(req)


//   });

//   console.log('up')


//   });


// main.on('click', 'down', function(e) {
//   console.log('down')

//   var xhr = new XMLHttpRequest();

//   xhr.open("POST", "http://sadiklsd.tk:4567/lights");
//   payload="color=red"
//   xhr.send(payload);

// });

// main.on('click', 'select', function(e) {
//   console.log('select')

//   var xhr = new XMLHttpRequest();

//   xhr.open("POST", "http://sadiklsd.tk:4567/lights");
//   payload="color=green"
//   xhr.send(payload);

// });
var UI = require('ui');
var ajax = require('ajax');
var main = new UI.Card({
  title: 'WX Station',
  body: 'Loading ...'
});
main.show();

var url = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1"
ajax({
  url: url,
  type: 'json',
}, function (data) {
  console.log(JSON.stringify(data))
  var temp =  ((data.main.temp - 273.15) * 1.8 + 32).toFixed(1); //this will convert the temperature to Fahrenheit 
  console.log(JSON.stringify(temp))
  
  main.body("Temperature: " + temp + " F"); }, function (err) { console.log("AJAX Error: " + err); //It is strongly recommend to pass a second parameter in case there is an error 
});

  ajax({
    url: "http://sadiklsd.tk:4567/lights",
    method: 'post',
    type: 'text',
    crossDomain: true,
    cache: false,
    xhrFields: { withCredentials: true },
    
    data: 'color=green'
  },
  
    function(post) {
      console.log('Success');
    },
         function(error) {
      console.log('Failed' + error);
      });
  
  
  // , function (data) {
  //   console.log(JSON.stringify(data))
    
  //    }, function (err) { console.log("AJAX Error: " + err);
    

  //   });
    
