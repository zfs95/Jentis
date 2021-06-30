function CookieManager() {

    const cbMockUIMgr = CookiebotMockUIController();
    const cbMock = CookiebotMock(cbMockUIMgr);
    const cb = window.Cookiebot;

    const Cookiebot = () => {
        // return cb;
        return cbMock;
    };

    const setVendorConsent = (flag) => {

        // get all vendor data from jentis config
        const vendors = jentis.consent.engine.getVendorFullData();
        let vendorsArr = [];
    
        if(vendors.ga !== undefined) vendorsArr.push(vendors.ga);
        if(vendors.fb !== undefined) vendorsArr.push(vendors.fb);
        if(vendors.adw !== undefined) vendorsArr.push(vendors.adw);
    
        const statsVendors = vendorsArr.filter(x => x.purpose !== undefined &&  x.purpose.id === 'stat');
        const marketingVendors = vendorsArr.filter(x => x.purpose!== undefined && x.purpose.id === 'mark');
        const preferenceVendors = vendorsArr.filter(x => x.purpose!==undefined && x.purpose.id === 'pref');
    
        const consents = {};
    
        if(Cookiebot().consent.statistics === flag) {
            statsVendors.forEach(x => {
                consents[x.vendor.id] = flag;
            });
        }
        if(Cookiebot().consent.marketing === flag){
            marketingVendors.forEach(x =>{
                consents[x.vendor.id] = flag;
            })
        }
        if(Cookiebot().consent.preferences === flag){
            preferenceVendors.forEach(x => {
                consent[x.vendor.id] = flag;
            })
        }
    
        const consentsJson = JSON.stringify(consents);
        jentis.consent.engine.setNewVendorConsents(consentsJson);
    };

    const renewCookieConsent = () => {
        Cookiebot().renew();        
    };

    const captureCookieConsent = () => { 
        Cookiebot().show();
    };

    const setCookieConsent = (consentAction) => {
        const cb = Cookiebot();
        const cns = cb.consent;

        switch(consentAction) {
            case "all":
                cns.preferences = true;
                cns.marketing = true;
                cns.necessary = true;
                cns.statistics = true;
                cbMockUIMgr.syncConsentUI(cns);
                document.dispatchEvent(cb.CookiebotOnAccept);
                break;
            case "selection":
                const cnsSelection = cbMockUIMgr.getConsentSelection();
                cns.preferences = cnsSelection.preferences;
                cns.marketing = cnsSelection.marketing;
                cns.necessary = cnsSelection.necessary;
                cns.statistics = cnsSelection.statistics;
                document.dispatchEvent(cb.CookiebotOnLoad);
                break;
            case "deny":
                cns.preferences = false;
                cns.marketing = false;
                cns.necessary = false;
                cns.statistics = false;
                cbMockUIMgr.syncConsentUI(cns);
                document.dispatchEvent(cb.CookiebotOnDecline);
                break;
            default: 
                break;
        }

        cb.hide();
    }


    return {
        setVendorConsent: setVendorConsent, 
        captureCookieConsent: captureCookieConsent, 
        renewCookieConsent: renewCookieConsent,
        setCookieConsent: setCookieConsent,
        cookiebot: Cookiebot
    }
}


