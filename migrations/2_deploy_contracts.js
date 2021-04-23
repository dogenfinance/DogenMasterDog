const DogenToken = artifacts.require("DogenToken");
const DogenMasterDog = artifacts.require("DogenMasterDog");

async function deployMainnet(deployer) {
  const token = await deployer.deploy(DogenToken,
    '12276593',
    '12276594');
  await deployer.deploy(DogenMasterDog,
    token.address,
    '0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000',
    '646527000000000000000000',
    '12280072',
    '12474960',
  );
}

async function deployTestnet(deployer) {
  const token = await deployer.deploy(DogenToken,
    '8139841',
    '8139842');
  await deployer.deploy(DogenMasterDog,
    token.address,
    '0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000',
    '646527000000000000000000',
    '8139851',
    '8539851'
  );
}

module.exports = function(deployer) {
  deployer.then(async() => {
    console.log(deployer.network);
    switch (deployer.network) {
      case 'mainnet':
        await deployMainnet(deployer);
        break;
      case 'development':
      case 'rinkeby':
      case 'ropsten':
      case 'bsctestnet':
        await deployTestnet(deployer);
        break;
      default:
        throw("Unsupported network");
    }
  });
};
