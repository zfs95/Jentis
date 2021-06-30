function CookiebotMock(uiManager) {

    this.uiManager = uiManager;
    
    this.events = {
        Load: new Event('CookiebotOnLoad'),
        Accept: new Event('CookiebotOnAccept'),
        Decline: new Event('CookiebotOnDecline')
    }

    this.consent = {
        necessary: true,
        preferences: false,
        marketing: false,
        statistics: false
    };

    this.renew = () => {
        this.uiManager.showConsentUI(true);        
    };

    this.show = () =>  {
        this.uiManager.showConsentUI(true);        
    };

    this.hide = () => {
        this.uiManager.showConsentUI(false);
    };

    return {
        consent: this.consent,
        renew: this.renew, 
        show: this.show,
        hide: this.hide,
        CookiebotOnLoad: this.events.Load,
        CookiebotOnAccept: this.events.Accept,
        CookiebotOnDecline: this.events.Decline
    };
}
