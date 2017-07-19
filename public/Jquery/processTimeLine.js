(function() {
  console.log("calling dummy now");
  var newPin = utilModule.getPin();
  console.log("newPin:", newPin);
  var json = [{duration: '9 AM', title: 'title', content: 'kjhuij jjiojlkj jiojljp', img: '/path'},
              {duration: '12 AM', title: 'title1', content: '2.kjhuij jjiojlkj jiojljp', img: '/path'}
             ];
  var entryPoint = document.getElementById('list-container');

  json.map(function (item) {
      var newPin = utilModule.getPin(item);
      entryPoint.appendChild(newPin);
  });

})();
