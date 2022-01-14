// add,subtract,multiply,division
// node app.js --operation addition 1 2 3 4 => 10
// handle invalid cases
// include validations for unsupported operations, number of inputs


function add(args) {
    var res = parseInt(args[2]);
    for (i = 3; i < args.length; i++) {
        res += parseInt(args[i]);
    }
    return res;
}

function sub(args) {
    var res = parseInt(args[2]);
    for (i = 3; i < args.length; i++) {
        res -= parseInt(args[i]);
    }
    return res;
}
function multiply(args) {
    var res = 1;
    for (i = 2; i < args.length; i++) {
        res *= parseInt(args[i]);
    }
    return res;
}
function division(args) {
    if (args.length != 4) {
        return (new Error('invalid number of operands'));
    }

    if (args[3] == '0') {
        return (new Error('divide by zero error'));
    }

    var res = parseInt(args[2]) / parseInt(args[3]);

    return res;
}

function main() {
    var args = process.argv;
    args.splice(0, 2);

    if (args[0] == '--operation') {
        switch (args[1]) {
            case 'addition':
                console.log(add(args))
                break;
            case 'subtraction':
                console.log(sub(args))
                break;
            case 'division':
                console.log(division(args));
                break;
            case 'multiply':
                console.log(multiply(args));
                break;
            default:
                console.log(new Error('not supported operation'));
        }
    }
    else {
        console.log(new Error('Not Valid Syntax'));
    }
}

// remove unecessary information from arguments
main();


