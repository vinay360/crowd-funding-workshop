import { useEffect, useState } from 'react';

const useConnect = () => {
  const [isConnected, setIsConected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);

  function accountsChangedHandler(newAccounts) {
    if (newAccounts.length) {
      setAccount(newAccounts[0]);
      setIsConected(true);
    } else {
      setAccount(null);
      setIsConected(false);
    }
  }

  useEffect(() => {
    window.ethereum.on('accountsChanged', accountsChangedHandler);
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_accounts' })
        .then((accounts) => {
          accountsChangedHandler(accounts);
        })
        .catch((error) => {
          setErrorMessage(error);
        });
    }
  }, []);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
      } catch (error) {
        console.error(error);
        setErrorMessage('There was a problem connecting to MetaMask');
      }
    } else {
      setErrorMessage('Please Install Metamask');
    }
  }

  return { isConnected, errorMessage, account, connectWallet };
};

export default useConnect;
