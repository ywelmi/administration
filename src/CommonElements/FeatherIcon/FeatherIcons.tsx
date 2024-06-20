import * as Icon from "react-feather";

export interface FeatherIconType {
 iconName: keyof typeof Icon;
 className?: string;
 onClick?: () => void;
}

const FeatherIcons: React.FC<FeatherIconType> = ({iconName,className,onClick}) => {
 const IconComp = Icon[iconName];
 return <IconComp className={className} onClick={onClick} />;
};

export default FeatherIcons;