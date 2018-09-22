process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// My code starts here 
function getProduct(product, num) {
    return product * num;
}

function largestMultiple(n, k, num) {
    let total = 0;
    let i = 0; 
    let numArray = num.toString(10).split("").map(Number);
    while (k < numArray.length - 1) {
        let temp_total = numArray.slice(i, k).reduce(getProduct);
        if (temp_total > total) {
            total = temp_total;
        }
        i += 1;
        k += 1;
    }
    return total;
    
}
// Ends here
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        var num = readLine();
        console.log(largestMultiple(n, k, num));
    }

}
