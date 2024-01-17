(function (){
  //console.log('head.js');
  var loc = window.location;
  if (loc.protocol !== 'file:' && loc.hostname !== 'www.ldsys.co.uk')
  {
    window.location.replace('http://www.ldsys.co.uk');
  }
})();
