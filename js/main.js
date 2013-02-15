(function($){
	$(document).ready(function() {

		$(".tweets").liveTwitter('ilyadorman', {

			mode:'search',
			/* Valid options are 'search', 'user_timeline', 'list', 'favorites'. 'search' is the default. */

			rate:900000,
			/* Refresh rate, in milliseconds. The default is 15000. */

			limit:5,
			/* Maximum number of tweets to show at once. The default is 10. */

			imageSize:0,
			/* Dimensions of profile image. The default is 24 pixels. */

			refresh:true,
			/* Pass refresh: false to disable automatic refreshing. */

			timeLinks:true,
			/* Pass timeLinks: false to disable the timestamp on tweets. */

			entities:false,
			/* Includes entities. Disabled by default. */

			service:false,
			/* Use another service with compatible API, for example 'identi.ca' or 'youraccount.status.net'. */

			/* rpp:100,
				Results per page to request from the API. This defaults to the limit, increase it if you're filtering tweets. */

			/* showAuthor: true,
				username and profile picture. Defaults to false for user_timeline and true for all other modes. */

			localization: { /* Hash for localization strings, see example. */
				seconds:	'seconds ago',
				minute:		'a minute ago',
				minutes:	'minutes ago',
				hour:		'an hour ago',
				hours:		'hours ago',
				day:		'a day ago',
				days:		'days ago'
			}

			/*
			filter:Pass a function to filter tweets before displaying them.
			*/
		});



		$('.js-tweet').click(function (e) {

			e.preventDefault;

			var twitterUrl = "http://twitter.com/home/?status=",
				beginning = encodeURIComponent("Interesting stuff on "),
				pageUrl = location.href,
				pageTitle = encodeURIComponent(document.title),
				end = encodeURIComponent(" by @user #hashtag ");

				url = twitterUrl + beginning + pageUrl + end;

			window.open(url, '_blank');

		});

	});
})(jQuery);