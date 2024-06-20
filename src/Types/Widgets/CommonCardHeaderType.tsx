export interface PropsTypes  {
    headClass?: string;
    title: string;
    titleClass?: string;
    firstItem?: string;
    secondItem?: string;
    thirdItem?: string;
    mainTitle?: string;
    subClass?:string
};

export interface CardHeaderDropDownProps {
    firstItem: string | undefined;
    secondItem: string | undefined;
    thirdItem: string | undefined;
    mainTitle?: string ;
}