/* Created by Renske, for what it's worth. */

/* Wait until page is ready. */
$('document').ready(function() {

    // Manage DOM element visibilities.
    $('#error').hide();
    
    var databaseRef = firebase.database();
    console.log(databaseRef);
    console.log(config);

});


/* On button click, process date and amount of foals. */
function processFoals(){
    
    console.log("yo ho test");
    
    var testObj = { date: "01-01-2017", 
                    amount:  "500",
                    userName: "Renske1000"
                  };
                  
    var db = firebase.database();
    db.ref('data/' + testObj.date).set({
        userName: testObj.userName,
        amount: testObj.amount
    });
    
}




/* Insert into database. FIREBASE YO */





/* Show visualization with D3. */
/* Allow click on date with tooltip? */




