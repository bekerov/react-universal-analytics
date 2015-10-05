/**
 * Google Universal Analytics
 * @author Bekerov Artur <artur@bekerov.ru>
 */


var analytics = {
    init: function(GoogleAnalyticsID){
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', GoogleAnalyticsID, 'auto');
    },

    /**
     * Page Tracking function
     *
     * @example
     * ga.pageview('send', 'pageview', {
     *   'page': '/my-new-page',
     *   'title': 'My New Page Title'
     * });
     *
     * @param data {string|Object} - Path or object with page path and page title
     */
    pageview: function(data) {
        ga('send', 'pageview', data);
    },

    /**
     * Event Tracking
     * @param args.eventCategory	{string}	Required	Typically the object that was interacted with (e.g. 'Video')
     * @param args.eventAction	    {string}	Required	The type of interaction (e.g. 'play')
     * @param args.eventLabel	    {string}	Optional	Useful for categorizing events (e.g. 'Fall Campaign')
     * @param args.eventValue	    {number}	Optional	A numeric value associated with the event (e.g. 42)
     *
     * @example
     * ga.event( { eventCategory: 'Payments', eventAction: 'Create payment' } );
     */
    event: function(args) {
        ga('send', 'event', args);
    },

    /**
     * Exception Tracking
     * @param args.exDescription	{string}	Optional	A description of the exception.
     * @param args.exFatal	        {boolean}	Optional	true if the exception was fatal.
     *
     * @example
     * ga.exception( { exDescription: 'dbError', exFatal: 'false' } );
     *
     * The following command wraps some logic that may fail in a try/catch block.
     * If there's an error, it sends an exception hit to Google Analytics.
     */
    exception: function(args) {
        ga('send', 'exception', args);
    }
};

module.exports = analytics;