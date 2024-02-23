import axios from "axios";

const getTokenMetadata = async () => {
  const baseUrl = "https://elated-tan-skat.explorer.mainnet.skalenodes.com/api";
  // ?module=token&action=getToken&contractaddress={contractAddressHash}
  const contractAddress = "0x5ac8106144c8931503e8ed3e6a2b6c0fdc43d771";
  const url = `${baseUrl}?module=token&action=getToken&contractaddress=${contractAddress}`;
  const response = await axios.get(url);
  console.log("Token Metadata: ", response.data.result);
};

getTokenMetadata();
