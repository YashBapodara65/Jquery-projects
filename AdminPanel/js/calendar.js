var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();  $('.myCalendar').calendar({
  date: new Date(),
  autoSelect: false, // false by default
  select: function(date) {
    console.log('SELECT', date)
  },
  toggle: function(y, m) {
    console.log('TOGGLE', y, m)
  }
})
