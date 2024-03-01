function test() {
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x);
    }

    console.log(x);
}

test();