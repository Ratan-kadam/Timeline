var utilModule = (function () {
  function createTimeLinePin(pinData) {
    var outerLi = document.createElement('li');
    var durationSpan = document.createElement('span');
    outerLi.appendChild(durationSpan);
    durationSpan.setAttribute("class", "duration");
    durationSpan.innerHTML = pinData && pinData.duration;

    var divInfo = document.createElement('div');
    outerLi.appendChild(divInfo);
    divInfo.setAttribute("class", "info");

    var divTimeline = document.createElement('div');
    divTimeline.setAttribute("class", "timelinew");
    divInfo.appendChild(divTimeline);

    var timelineItem = document.createElement('div');
    timelineItem.setAttribute("class", "timeline-itemw");
    divTimeline.appendChild(timelineItem);

    var divArrowLeft = document.createElement('div');
    divArrowLeft.setAttribute("class", "arrow-left");
    timelineItem.appendChild(divArrowLeft);

    var divTimelineContent = document.createElement('div');
    divTimelineContent.setAttribute("class", "timeline-contentw");
    timelineItem.appendChild(divTimelineContent);

    var h2Title = document.createElement('h2');
    h2Title.innerHTML = pinData && pinData.title;
    divTimelineContent.appendChild(h2Title);

    var content = document.createElement('p');
    content.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo';
    divTimelineContent.appendChild(content);

    return outerLi;
  }

  this.getNewTimeLinePin = function (pinData) {
    var newPin = new createTimeLinePin(pinData);
    return newPin;
  };

  return {
      getPin: this.getNewTimeLinePin,
  }

})();
