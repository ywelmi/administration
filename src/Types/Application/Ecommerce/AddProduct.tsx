export interface AddProductNav {
  id: number;
  icon: string;
  title: string;
  detail: string;
}

export interface InitialStateType {
  navId: number;
}

export interface AddProductSliceType {
  navId: number;
  tabId: number;
  formValue: any;
}
