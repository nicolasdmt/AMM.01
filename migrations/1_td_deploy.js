const Str = require('@supercharge/strings')
// const BigNumber = require('bignumber.js');

var TDErc20 = artifacts.require("ERC20TD.sol");
var ERC20 = artifacts.require("DummyToken.sol"); 
var evaluator = artifacts.require("Evaluator.sol");
var myERC20 = artifacts.require("myERC20.sol");


module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await deployTDToken(deployer, network, accounts); 
		await exercice(deployer, network, accounts); 
    });
};

async function deployTDToken(deployer, network, accounts) {
	Evaluator = await evaluator.at("0x89a2Faa44066e94CE6B6D82927b0bbbb8709eEd7")
	MyERC20 = await myERC20.at("0x5c1c8a6afeed2291cc9b997a70cd0c17a75717c8")
}

async function exercice(deployer, network, accounts) {
	//Exo1:
	await Evaluator.ex1_showIHaveTokens();

	//Exo2:
	await Evaluator.ex2_showIProvidedLiquidity();

	//Exo6a:
	await Evaluator.ex6a_getTickerAndSupply();
	ticker = await Evaluator.readTicker("0x8D7a40024b11b3398DD5DE7bc03fE6DBb4c890f2");
	supply = await Evaluator.readSupply("0x8D7a40024b11b3398DD5DE7bc03fE6DBb4c890f2");
	//console.log(ticker) jt4_D
	//console.log(supply) 971100986000000000000000000
	MyERC20 = await myERC20.new("TD2DeFi", "jt4_D", web3.utils.toBN("971100986000000000000000000"))

	//Exo6b:
	await Evaluator.submitErc20(MyERC20.address);
	await Evaluator.ex6b_testErc20TickerAndSupply();

	//Exo7:
	await Evaluator.ex7_tokenIsTradableOnUniswap();

	//Exo8:
	
}
