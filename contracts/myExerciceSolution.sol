pragma solidity ^0.6.0;
import "./myERC20.sol";
import "./DummyToken.sol";
import "./utils/IUniswapV2Factory.sol";
import "./utils/IUniswapV2Pair.sol";

contract myExerciceSolution {

    myERC20 public myToken;
    DummyToken public dummyToken;
    IUniswapV2Factory public uniswapV2Factory;
    address public WETH;


    constructor(myERC20 _myToken, DummyToken _dummyToken, IUniswapV2Factory _uniswapV2Factory, address _WETH) public {
        	myToken = _myToken;
		dummyToken = _dummyToken;
		uniswapV2Factory = _uniswapV2Factory;
		WETH = _WETH;
    }

    function swapYourTokenForEth() external {
        
    }

}
