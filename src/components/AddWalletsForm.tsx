import { useEffect, useState } from "react";
import { Addwallets } from "../types";
import { getWallets } from "../lib/api";
import caution from "../images/caution.svg";
import Loader from "./shared/Loader";
import Error from "./Error";
import { FormContainer, Button } from "../myStyles";

const AddWalletsForm = (props: any) => {
  const { close, handleSubmit, postError, handleNetworkClose } = props;

  const [state, setState] = useState<Addwallets>({
    isLoading: true,
    isCreatingWallet: false,
    error: false,
    wallets: [],
    currency: "",
  });

  const getWalletsData = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const data = await getWallets();
    if (data.length > 0) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        wallets: data,
        error: false,
        currency: data[0].currency,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: true,
      }));
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    setState((prev) => ({ ...prev, currency: value }));
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isCreatingWallet: true,
    }));
    await handleSubmit(state.currency);
    setState((prev) => ({
      ...prev,
      isCreatingWallet: false,
    }));
  };

  useEffect(() => {
    getWalletsData();
  }, []);

  return (
    <FormContainer>
      <div className="form-head">
        <p className="add">Add new wallet</p>
        <button onClick={close} className="close" aria-label="Close button">
          X
        </button>
      </div>
      {state.isLoading ? (
        <div className="load">
          <Loader />
        </div>
      ) : state.error ? (
        <Error getData={getWalletsData} />
      ) : (
        <div>
          <p className="msg">
            The crypto wallet will be created instantly and be available in your
            list of wallet
          </p>
          <label htmlFor="wallet">Selected wallet</label>
          <form onSubmit={handleSubmitForm}>
            <div className="input">
              <select value={state.currency} onChange={handleSelect}>
                {state.wallets.map((wallet) => (
                  <option value={wallet.currency} key={wallet.imgURL}>
                    {wallet.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="btn">
              <Button type="submit">
                Create wallet
                {state.isCreatingWallet && <Loader size={25} />}
              </Button>
            </div>
            {postError && (
              <div className="failed">
                <div className="network">
                  <img src={caution} alt="caution" />
                  <p>Network error</p>
                </div>
                <button onClick={handleNetworkClose}>X</button>
              </div>
            )}
          </form>
        </div>
      )}
    </FormContainer>
  );
};

export default AddWalletsForm;
