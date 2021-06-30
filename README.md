<a href="https://www.jentis.com">
    <img src="https://www.jentis.com//jentis/storage/uploads/2020/08/05/5f2a798bbbc30logo_jentis.svg" alt="Jentis logo" title="Jentis" align="right" height="60" />
</a>
    <a href="#">
    <img src="https://img.pngio.com/hyperlink-link-linkage-icon-png-and-vector-for-free-download-linkage-png-512_512.png" alt="link logo" title="linkage" align="right" height="60" />
    </a>
<a href="https://www.cookiebot.com/en/?gclid=Cj0KCQjwlMaGBhD3ARIsAPvWd6jqzH65-UCA9socldpe5svC6Ai4sBTdVudZn5arqV7ugElu0ByLDEwaAs5FEALw_wcB">
    <img src="https://www.cookiebot.com/img/logo.svg" alt="Cookiebot logo" title="Cookiebot" align="right" height="60" />
</a>

# Jentis
## Preword
Because of the legal situation in Europe we must get the consent of the user before we are allowed to track.
Sometimes our customer is using our JENTIS Consent Bar for getting this consent of the user, but sometimes our
customer wants to use a 3rd party consent bar, like Cookiebot.
In this case we have to “bridge” this consentbar in order to get all the information we need to know, especially if we are
allowed to track or not.
So for example: did the user accept the tracking for Google Analytics or not.
<p align = "centre">
<img src = "https://www.linkpicture.com/q/JenEx.png" alt = "example">
</p>

## Goal
The goal is to write a bridge between our JENTIS Consent Engine and the consent bar Cookiebot.
<ol>
    <li> Checkout the JENTIS Consent Engine.</li>
<li> Read and understand the JENTIS Consent Engine documentation.</li>
<li> Get a demo version of Cookiebot and set up the Cookiebot at the test html page.</li>
<li> Run the test page html.</li>
<li> Whenever the user is giving a consent you must listen to it and hand over this information to the JENTIS
Consent Engine.</li>
</ol>
## Resources

1. Checkout the JENTIS consent engine
git clone https://bitbucket.org/jentis/jentis-consent-engine.git
2. Documentation about JENTIS Consent Engine.
https://my.jentis.com/extensions/consent-engine
3. Read the documentation at Cookiebot
https://www.cookiebot.com/de/developer/
 
## Hints

Hints
<ul>
    <li> At the JENTIS Consent Engine you will find a test directory.</li>
<li> In this directory you will find an example configuration. This configuration includes some vendor definitions.
These are the vendors which are set at the JENTIS Systems. For these vendors we must know if we are
allowed to track or not.</li>
<li> In this directory you will find a test page html file. Execute it directly and you can run the Consent Engine locally
standalone (don't forget to add the basic code of Cookiebot)</li>
<li> If you are doing it all right, you will need at least the following events and infos by the JENTIS Consent Engine: </li>
<li> jentis.consent.engine.getVendorFullData</li>
<li> jentis.consent.engine.setNewVendorConsents</li>
<li> Cookiebot is setting the consent per purpose (statistic, marketing, preferences). Use the purpose.id field at the
example config of the Consent Engine to match the vendors at JENTIS with the given Consents from
Cookiebot.</li>
<li> The test html page includes some event listener and console logs too. If you do a good job you should see
something in the browser’s javascript console.</li>
    </ul>

## Legal Information
Our dev team already developed the bridge to the Cookiebot.
So we will not use your result productively. Your result will be owned by yourself.
We just use your result to discuss it with you during the recruiting process.

<p align = "centre">
Happy Coding!
</p>
