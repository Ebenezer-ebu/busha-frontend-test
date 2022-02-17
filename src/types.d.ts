export interface Account {
  id: string;
  name: string;
  imgURL: string;
  balance: string;
  currency: string;
  type: string;
}

export interface Wallet {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}

export interface Group {
  isOpen: boolean;
  loading: boolean;
  selected: string;
  error: boolean;
  networkError: boolean;
  accounts: Account[];
}

export interface AccountData {
  isLoading: boolean;
  error: boolean;
  accounts: Account[];
  isOpen: boolean;
  postError: boolean;
}

export interface Addwallet {
  loading: boolean;
  error: boolean;
  currency: string;
  wallets: Wallet[];
}

export interface Addwallets {
  isLoading: boolean;
  error: boolean;
  currency: string;
  wallets: Wallet[];
  isCreatingWallet: boolean;
}
