import { PropsAllProjectTableBodyType } from "../../../../../Types/Dashboard/Ecommerce";

const ProjectStatus:React.FC<PropsAllProjectTableBodyType> = ({data}) => {
  return (
    <div className={`txt-${data.color} d-flex gap-2 align-items-center justify-content-center`} >
      <span className={`pending bg-${data.color}`} />
      <span className={`f-w-500 f-13 txt-${data.color}`}>{data.status}</span>
    </div>
  );
};

export default ProjectStatus;
