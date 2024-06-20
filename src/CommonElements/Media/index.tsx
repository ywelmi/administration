import { Media } from "reactstrap";
export interface ImageTypes {
  body?: boolean;
  className?: string;
  src: any;
  alt: string;
  ref?: any;
  onLoad?: () => void;
  style?: Object;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

const Image = (props: ImageTypes) => <Media {...props} />;

export default Image;
