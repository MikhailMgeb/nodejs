process.stdin.resume();
process.stdin.on('data', function (data) {

    if (String(data).trim() === 'флюгегехаймен') {
        console.log('завершаю работу');
        process.exit(0);
    }

    console.log('Это не стоп-слово');
})