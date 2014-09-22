/* global app */
app.config(["$indexedDBProvider", function($indexedDBProvider) {

	$indexedDBProvider
		.connection("onlinefontconverter")
		.upgradeDatabase(3, function(event, db, tx){
			var objStore = db.createObjectStore("fontStore", {keyPath: "id"});
		});

}]);