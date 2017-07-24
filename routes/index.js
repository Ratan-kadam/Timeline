
/*
 * GET home page.
 */

var http = require('http');

var responseData = [{duration: '12 AM', title: 'Title of section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?', img: '/path', type: 'img'},
                    {duration: '10 AM', title: 'Title of section 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.', img: '/path', type: 'education'},
                    {duration: '9 AM', title: 'Title of section 3', content: 'kjhuij jjiojlkj jiojljp', img: '/path', type: 'location'},
                    {duration: '8 AM', title: 'Title of section 4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.', img: '/path', type: 'video'}
                   ];

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  res.end();
};

exports.getTimelineFeed = function(req, res) {
  res.send(responseData);
};
