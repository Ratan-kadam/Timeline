
/*
 * GET home page.
 */

var http = require('http');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  res.end();
};

exports.getCalciApi= function(req,res1)
{
   //storage.getCounter= storage.getCounter+1;
   console.log("Entered to Proxy get function");
   var http = require('http');
  
		   var options = {
			       hostname: 'localhost',
			       port    : '3000',
			       path    : '/getJson',
			       method  : 'GET',
			       headers : {
			           'Content-Type': 'application/json',
			           'Cache-Control': 'no-cache' 
			       }  
   };

   var req1 = http.get(options, function(res) {
     console.log('STATUS: ' + res.statusCode);
     console.log('HEADERS: ' + JSON.stringify(res.headers));

     // Buffer the body entirely for processing as a whole.
     var bodyChunks = [];
     res.on('data', function(chunk) {
       // You can process streamed parts here...
    	 console.log("chunk");
    	 console.log(chunk);
       bodyChunks.push(chunk);
     }).on('end', function() {
       var body = Buffer.concat(bodyChunks);
       console.log('BODY: ' + body);
      res1.type('application/json');
//       
       res1.send(body);
//       res.end();
       // ...and/or process the entire body here.
     });
   });

   req.on('error', function(e) {
     console.log('ERROR: ' + e.message);
   });
  
   
};
