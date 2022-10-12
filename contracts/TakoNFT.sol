// SPDX-License-Indentifier: UNLICENSED

// スマートコントラクト用のフォルダ
pragma solidty ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

// TokoNFTクラスを作成
contract TakoNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    // 値
    constructor() payable ERC721('Tako', 'TK') {
        mintPrice = 0.01 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;

    }

    // SetOwner
    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }


    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), 'Token does not exist!);
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    function withdeaw() external onlyOwner {
         (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
         requireuire(success, 'withdraw failed');
     }

     function mint(uint256 quantity_) public payable {
         require(isPublicMintEnabled, 'minting not enabled');
         require(msg.value == quantity_ * mintPrice, 'wrong mint value');
         require(totalSupply + quantity_ <= maxSupply, 'sold out');
         require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');

         for (uint256 i = 0; i < quantity_; i++) {
             uint256 newTokenId = totalSupply + 1;
             totalSupply ++;
             _safeMint(msg.sender, newTokenId);
         }
     }
}