(function() {

  var user_name, api_key, twitch_widget;

  user_name = "agis";
  api_key = "5j0r5b7qb7kro03fvka3o8kbq262wwm";
  twitch_widget = $("#twitch-widget");

  $.getJSON('https://api.twitch.tv/kraken/streams/' + user_name + '?client_id=' + api_key + '&callback=?', function(data) {
	  if (data.stream) {
		  twitch_widget.html("<span class='online'></span><img src='img/feelsamazingman.png' width='45px' height='50px' style='vertical-align:top'/><b> Agis is Online!</b> <br><b>Playing:</b> " + data.stream.game + "<span class='viewers'><b>Viewers:</b> " + data.stream.viewers + "</span>");
	  } else {
		  twitch_widget.html("<span class='offline'></span> <b>Agis is Offline</b>");
	  }
  });

   })();
