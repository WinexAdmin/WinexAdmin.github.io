const nftContainer = document.getElementById("nft-container");
const nftList = document.getElementById("nft-list");
const connectWalletButton = document.getElementById("connect-wallet");
const accountInfo = document.getElementById("account-info");

// Dummy NFT data (replace with real API call)
const fetchNFTs = async (address) => {
  // Replace with a call to an NFT API like OpenSea or Moralis
  return [
    {
      id: 1,
      name: "NFT #1",
      image: "https://via.placeholder.com/200",
      description: "This is NFT #1.",
    },
    {
      id: 2,
      name: "NFT #2",
      image: "https://via.placeholder.com/200",
      description: "This is NFT #2.",
    },
  ];
};

// Display NFT list
const displayNFTs = (nfts) => {
  nftList.innerHTML = "";
  nfts.forEach((nft) => {
    const card = document.createElement("div");
    card.className = "nft-card";
    card.innerHTML = `
      <img src="${nft.image}" alt="${nft.name}" />
      <h3>${nft.name}</h3>
      <p>${nft.description}</p>
      <button onclick="redeemNFT(${nft.id})">Redeem</button>
    `;
    nftList.appendChild(card);
  });
};

// Redeem NFT action
window.redeemNFT = (nftId) => {
  alert(`Redeem request sent for NFT ID: ${nftId}`);
  console.log(`Redeem request for NFT ID: ${nftId}`);
};

// Connect wallet
connectWalletButton.addEventListener("click", async () => {
  if (typeof window.ethereum === "undefined") {
    alert("Metamask를 설치하세요");
    return;
  }

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    accountInfo.textContent = `Connected account: ${account}`;

    // Fetch NFTs and display them
    const nfts = await fetchNFTs(account);
    nftContainer.style.display = "block";
    displayNFTs(nfts);
  } catch (error) {
    console.error("Error connecting wallet:", error.message);
  }
});
