(function(){
    // thanks to http://stackoverflow.com/a/17907562/1363726
    var html = document.getElementsByTagName('html')[0];
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    // IF IE
    if(rv > -1){
        // IF IE8
        if(rv === 8){
            html.className = 'no-js lt-ie9';
        }
        // IE7
        else if(rv === 7){
            html.className = 'no-js lt-ie9 lt-ie8';
        }
        // If less than IE7
        else if(rv < 7){
            html.className = 'no-js lt-ie9 lt-ie8 lt-ie7';
        }
        window.IE_Version = rv;
    }
}());