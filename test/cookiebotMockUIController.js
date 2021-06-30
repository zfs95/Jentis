function CookiebotMockUIController() {

    this.getConsentSelection = () => {
                
        const pref = document.querySelector("#preferences");
        const mark = document.querySelector("#marketing");
        const stats = document.querySelector("#statistics");
        const nec = document.querySelector("#necessary");

        const retVal = {
            preferences: pref.checked,
            marketing: mark.checked,
            statistics: stats.checked,
            necessary: nec.checked
        };

        return retVal;
    };

    this.showConsentUI = (flag) => {
        const el =  document.querySelector(".consentBar");

        if(flag) {
            el.setAttribute("class", "consentBar");
        }
        else {
            el.setAttribute("class", "consentBar hidden");
        }        
    };

    this.syncConsentUI = (consent) => {

        const pref = document.querySelector("#preferences");
        const mark = document.querySelector("#marketing");
        const stats = document.querySelector("#statistics");
        const nec = document.querySelector("#necessary");

        pref.checked = consent.preferences;
        mark.checked = consent.marketing;
        stats.checked = consent.statistics;
        nec.checked = consent.necessary;
    };

    
    return {
        getConsentSelection: this.getConsentSelection,
        showConsentUI: this.showConsentUI,
        syncConsentUI: this.syncConsentUI
    };
}