(function() {
  var entryPoint = document.getElementById('list-container');

  function getTimelineFeed() {

    var xmlhttp = new XMLHttpRequest();
    var url = '/getTimelineFeed';

      xmlhttp.onreadystatechange = function() {
       if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           var myArr = JSON.parse(xmlhttp.responseText);
            processTimeLIneFeed(myArr);
          }
      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();
  }

  function processTimeLIneFeed(timeLineFeed) {
    timeLineFeed.map(function (item) {
        var newPin = utilModule.getPin(item);
        entryPoint.appendChild(newPin);
    });
  }


  /* main */
  getTimelineFeed();

  //

})();
