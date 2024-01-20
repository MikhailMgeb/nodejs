process.stdin.resume();
process.stdin.on('data', function (data) {
    const sumNumber = String(data).split(' ').map(Number).reduce((acc, item) =>  acc + item )
    console.log(sumNumber);

}) 
