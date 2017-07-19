(function() {
  var newPin = utilModule.getPin();
  var json = [{duration: '91 AM', title: 'title', content: 'kjhuij jjiojlkj jiojljp', img: '/path'},
              {duration: '12 AM', title: 'title1', content: '2.kjhuij jjiojlkj jiojljp', img: '/path'}
             ];

  var entryPoint = document.getElementById('list-container');

  function getTimelineFeed() {
    console.log("get timeline feed called");

  }

  function processTimeLIneFeed() {
    console.log("process timeline feed called");
    json.map(function (item) {
        var newPin = utilModule.getPin(item);
        entryPoint.appendChild(newPin);
    });
  }


  /* main */
  getTimelineFeed();



})();
