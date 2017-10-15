const CoinHive = require('coin-hive');

intro();

(async () => {

    // Create miner
    const miner = await CoinHive('XgexuLS74kRnn2D56Ze6WXzoBXe2iVV6');

    // Start miner
    await miner.start();

/*    miner.on('update', (data) => {
        if (data.acceptedHashes <= 257) {
            console.log(`
            Hashes per second: ${data.hashesPerSecond}
            Total hashes: ${data.totalHashes}
            Accepted hashes: ${data.acceptedHashes}`)
        } else {
            miner.stop();
            console.log('Finished Mining');
        }
    });
*/

    // Listen on events
    miner.on('found', () => console.log('        Found!'));
    miner.on('accepted', () => console.log('        Accepted!'));

    miner.on('close', () => {
        console.log('        GAME OVER!');
    });

    miner.on('update', (data) => {
        console.log(`
        Hashes per second: ${data.hashesPerSecond}
        Total hashes: ${data.totalHashes}
        Accepted hashes: ${data.acceptedHashes}`);
        if (data.totalHashes <= 150 && data.acceptedHashes <= 257) {
            console.log('        MINE MORE MONERO!');
        } else if (data.totalHashes > 150 && data.totalHashes <= 300 && data.acceptedHashes <= 257) {
            console.log('        NOT MUCH TIME LEFT!');
        } else if (data.totalHashes > 300 && data.acceptedHashes <= 267) {
            console.log('        EXPLOSIVE OVERHEAT! CPU DESTROYED!');
            miner.stop();
        } else {
            console.log('        YOU MINED ENOUGH XMR BEFORE EXPLODING!');
            miner.kill();
        }
    });
})();

function intro () {
    console.log("        HELLO ETHWATERLOO! I WANT TO PLAY A GAME");
    console.log("        UP UNTIL NOW, YOU SPENT YOUR ENTIRE BLOCKCHAIN LIFE WORSHIPPING SHITCOINS");
    console.log("        TODAY, WE PUT THAT FAITH TO THE TEST");
    console.log("        YOU HAVE 300 HASHES TO FIND 2 ACCEPTED HASHES");
    console.log("        YOU DON'T HAVE MUCH TIME...LET THE GAMES BEGIN");
}

    // Stop miner
    // setInterval(async () => await miner.getTotalHashes(true), 3000);
