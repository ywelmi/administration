export interface CommonTouchSpinProp {
  color: string;
  id?: number;
  value: number;
  outline?: boolean;
  faAngle?: boolean;
  onDecrement: () => void;
  onIncrement: () => void;
  btnClass?: string;
}

export interface CommonSwitchProp {
  defaultChecked?: boolean;
  color?: string;
  disabled?: boolean;
}

export interface CommonSwitchSpanProp {
  color: string;
  defaultChecked?: boolean;
}

export interface CommonSwitchProp {
  defaultChecked?: boolean;
  color?: string;
  disabled?: boolean;
}

export interface CommonSwitchSpanProp {
  color: string;
  defaultChecked?: boolean;
}
