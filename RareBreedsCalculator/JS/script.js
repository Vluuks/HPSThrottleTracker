window.onload = function() {
    document.getElementById("resultbox").value = "";
}

function startParse() {

    // obtain text and treshold, then parse
    var text = document.getElementById("pastebox").value;
    var treshold = document.getElementById("tresholdbox").value;
    parseLines(text, treshold);
}

function parseLines(input, treshold) {

    // array to hold data
    var breeds = [];

    // split into lines
    var lines = input.split('\n');

    // sanity check to catch bad pasting
    var check = lines[0].split('\t')[0] == "Naam" ? 1 : 0;

    // loop over all the lines
    for(var i = check; i < lines.length; i++) {

        // split
        var separated = lines[i].split('\t');
        
        // get last three elements
        var amountInfo = separated.slice(-3);

        // get total mares + stallions combined
        var total = getTotal(amountInfo);

        // add to arrays
        separated.push(total)
        breeds.push(separated);

    }

    visualizeBreeds(breeds, treshold);
}

function getTotal(amounts) {

    var stallions = parseInt(amounts[0].split(' '));
    var mares = parseInt(amounts[1].split(' '));
    // var geldings = parseInt(amounts[2].split(' '));

    return stallions + mares;
}

function visualizeBreeds(breeds, treshold) {

    // sort by treshold
    breeds.sort(function(breedOne, breedTwo) {
        return breedOne[10] - breedTwo[10];
    });

    for(var i in breeds) {
        
        //check if it meets criteria
        if(parseInt(breeds[i][10]) > treshold) {
            return;
        }

        // construct string and append to text box for result
        var string = breeds[i][0] + "    [b]Hengsten:[/b] " + breeds[i][7] + "    [b]Merries:[/b] " + breeds[i][8] + "   [b]Totaal:[/b] " + breeds[i][10] + "\n";
        document.getElementById("resultbox").value += string;
    }
}

function generateCSV(breeds, threshold) {
    // todo
}
