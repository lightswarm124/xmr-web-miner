const CoinHive = require('coin-hive');

(async () => {

    // Create miner
    const miner = await CoinHive('XgexuLS74kRnn2D56Ze6WXzoBXe2iVV6');

    // Start miner
    await miner.start();

    // Listen on events
    miner.on('found', () => console.log('Found!'));
    miner.on('accepted', () => console.log('Accepted!'));
    miner.on('update', data => console.log(`
        Hashes per second: ${data.hashesPerSecond}
        Total hashes: ${data.totalHashes}
        Accepted hashes: ${data.acceptedHashes}
    `));

    // Stop miner
    // setTimeout(async () => await miner.stop(), 60000);
})();
