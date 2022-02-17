import { useState, useEffect } from "react";
import { Content, Card } from "../myStyles";
import { getAccounts, postWallets } from "../lib/api";
import Loader from "./shared/Loader";
import Error from "./Error";
import { AccountData } from "../types";
import arrow from "../images/arrow.svg";
import Modal from "./shared/Modal";
import AddWalletsForm from "./AddWalletsForm";

const Accounts = () => {
  const [state, setState] = useState<AccountData>({
    isLoading: true,
    isOpen: false,
    error: false,
    accounts: [],
    postError: false,
  });

  const getAccountsInfo = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const data = await getAccounts();
    if (data.length > 0) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        accounts: data,
        error: false,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: true,
      }));
    }
  };

  const handleClose = () => {
    setState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const handleNetworkClose = () => {
    setState((prev) => ({
      ...prev,
      postError: false,
    }));
  };

  const handleSubmit = async (currency: any) => {
    const res = await postWallets(currency);
    if (Object.keys(res).length > 0) {
      setState((prev) => ({
        ...prev,
        accounts: [...prev.accounts, res],
        isOpen: !prev.isOpen,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        loading: false,
        postError: true,
      }));
    }
  };

  const handleClick = () => {
    setState((prev) => ({
      ...prev,
      isOpen: true,
    }));
  };

  useEffect(() => {
    getAccountsInfo();
  }, []);
  console.log(state.accounts);
  return (
    <Content>
      {state.isLoading ? (
        <div className="load">
          <Loader />
        </div>
      ) : state.error ? (
        <Error getData={getAccountsInfo} />
      ) : (
        <>
          <div className="heading">
            <h1>Wallets</h1>
            <button onClick={handleClick}>+ Add new wallet</button>
          </div>
          <div className="card-container">
            {state.accounts.map((account) => (
              <Card key={account.id}>
                <div>
                  <p>
                    <img src={account.imgURL} alt={account.name} />
                    {account.name}
                  </p>
                </div>
                <div className="balance">
                  <>
                    {account.type === "digital" ? (
                      <>
                        <p>{account.balance}</p>
                        <p>{account.type === "digital" && account.currency}</p>
                      </>
                    ) : (
                      <>
                        <p>{account.currency}</p>
                        <p>{account.balance}</p>
                      </>
                    )}
                  </>
                </div>
                <div className="image">
                  <img src={arrow} alt="arrow" />
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
      <Modal isOpen={state.isOpen}>
        <AddWalletsForm
          close={handleClose}
          handleSubmit={handleSubmit}
          postError={state.postError}
          handleNetworkClose={handleNetworkClose}
        />
      </Modal>
    </Content>
  );
};

export default Accounts;
