export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IChangeContact {
  id: string;
  newName: string;
  newNumber: string;
}

export interface IFilterState {
  filter: { value: string };
}

export interface IAuthState {
  user: { name: null | string; email: null | string };
  token: null | string;
  isLoggedIn: Boolean;
  isFetchingCurrentUser: Boolean;
  isError: false;
}

export interface IGlobalState {
  auth: IAuthState;
  contactsApi: any;
  filter: IFilterState;
}

export interface IAuthAction {
  type: string;
  payload?: any;
}
