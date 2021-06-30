
		function acceptAll()
		{
			jentis.consent.engine.AcceptAll();
		}
		
		function acceptGa()
		{		
			var sConsentId = jentis.consent.engine.setNewVendorConsents({
			  "ga"  : true, 
			  "fb"  : true
			});		
		}
		
		function denyAll()
		{		
			var sConsentId = jentis.consent.engine.DenyAll();
		}
		
		function MigrateOldConsent()
		{
			var aData = {
				consentid: "TESTTESTTEST",
				lastupdate: 100,
				vendors: {"ga":true,"fb":false,"adw":false}				
			};			
			var sJson = JSON.stringify(aData);

			//Now write it to the local storage
			localStorage.setItem("jentis.consent.data", sJson);		
		}
		
		function MigrateInTimeConsent()
		{
			var aData = {
				consentid: "TESTTESTTEST",
				lastupdate: Date.now()-1000,
				vendors: {"ga":true,"fb":false,"adw":false}				
			};			
			var sJson = JSON.stringify(aData);

			//Now write it to the local storage
			localStorage.setItem("jentis.consent.data", sJson);		
		}
