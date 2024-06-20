export interface CustomizerDataType {
    path: string;
    image: string;
    name: string;
    class?: string
}

export interface SidebarTypeProp {
    layout?: string
  }

  export interface SidebarIconProp  {
    handleSideBarIconType: (data: string) => void;
    sideBarIconType: string;
  };

  export interface MixLayoutComponentProp  {
    handleCustomizerMix_Background: (item: string) => void;
    mixLayout: string;
  };

  export interface NavCustomizerType {
    callbackNav: (test: string, open: boolean) => void;
    selected: string
}

export interface TabCustomizerType  {
    callbackNav: (test: string, open: boolean) => void;
    selected: string
}

export interface LtrDataType {
    handleLayout: (item: string) => void,
    layout_type: string

}

export interface PropsTypeProp {
  toggle: () => void;
  modal: boolean;
}

export interface PropsLightColor {
  primary : string,
  secondary : string
}