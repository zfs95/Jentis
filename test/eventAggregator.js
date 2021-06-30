
/******  Jentis Event Subscriptions  ************************* */

document.addEventListener('jentis.consent.engine.minimal-consent-given', function (e)
{
    console.log("Miniaml Consent is given: %o",e.detail);
});
document.addEventListener('jentis.consent.engine.no-consent-given', function (e)
{
    console.log("No Consent is given: %o",e.detail);
});
document.addEventListener('jentis.consent.engine.send-consent-data', function (e)
{
    console.log("SEND Consent to Server: %o",e.detail);
});
document.addEventListener('jentis.consent.engine.show-bar', function (e)
{
    console.log("Show Bar now: %o",e.detail);
});
            
document.addEventListener('jentis.consent.engine.vendor-change', function (e)
{
    console.log("Vendor Changed: %o",e.detail);
});			

document.addEventListener('jentis.consent.engine.vendor-add', function (e)
{
    console.log("Vendor Add: %o",e.detail);
});			

document.addEventListener('jentis.consent.engine.init', function (e)
{
    console.log("CMP Init: %o",e.detail);
});	


/******  Cookiebot Event Subscriptions  ************************* */

document.addEventListener('CookiebotOnLoad', function (e) {			
    
    /*
        1. check for necessary cookies
            a. if not found then the website should not load 
                i. if we need to notify jentis that we cannot load, then we call some function provided by jentis
            b. if found then 
                i. load the site
                ii. maybe if jentis needs, call one of their functions to tell them necessary cookies are loaded

    */    
    const thisCookiebot = window.cookieMgr.cookiebot();

    if(thisCookiebot.consent.necessary !== true){            
        thisCookiebot.renew();     // we can also use Cookiebot.show();  
    }    
    else {
        window.cookieMgr.setVendorConsent(true);
    } 
}, false);

document.addEventListener('CookiebotOnAccept', function (e) {			
    
    /*
        1. Get All vendors from jentis
        2. check cookiebot consent properties  for which category is allowed - either marketing, stats or pref      
        3. filter each vendor by category -  marketing, stats, pref  
        4. call jentis sendVendorConsent() function for each vendor for which tracking is allowed and also pass this function
            purpose Id of the vendor       
    */    
    window.cookieMgr.setVendorConsent(true);

}, false);


document.addEventListener('CookiebotOnDecline', function (e) {			    
    window.cookieMgr.setVendorConsent(false);

}, false);