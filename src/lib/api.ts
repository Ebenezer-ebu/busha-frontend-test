export const getAccounts = async () => {
  try {
    let response = await fetch("/accounts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    if (response.ok) {
      let res = await response.json();
      return res;
    }
  } catch (err) {
    return err;
  }
};

export const getWallets = async () => {
  try {
    let response = await fetch("/wallets", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    if (response.ok) {
      let res = await response.json();
      return res;
    }
  } catch (err) {
    return err;
  }
};

export const postWallets = async (currency: string) => {
  try {
    let response = await fetch("/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ currency }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    if (response.ok) {
      let res = await response.json();
      return res;
    }
  } catch (err) {
    return err;
  }
};
