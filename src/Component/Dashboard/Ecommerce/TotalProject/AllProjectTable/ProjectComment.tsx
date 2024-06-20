import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { SVG } from "../../../../../AbstractElements";
import { PropsAllProjectTableBodyType } from "../../../../../Types/Dashboard/Ecommerce";

const ProjectComment:React.FC<PropsAllProjectTableBodyType> = ({data}) => {
  return (
    <div className="project-comment  d-flex gap-2">
      <div className="radial-chart-wrap">
        <ReactApexChart
          className="widgetsChart"
          id={data.chartId}
          options={data.chartOption}
          series={data.chartOption.series}
          type="radialBar"
          height={90}
        />
      </div>
      <div>
        <Link className="f-w-500 f-14 " to={Href}>
          {data.title}
        </Link>
        <div className="project-comment-icon">
          <div className="project-link">
            <SVG iconId={data.svgIcon} />
            <span className="f-w-500 f-light f-12">{data.messages}</span>
          </div>
          <div className="project-link">
            <SVG iconId={data.linkIcon} />
            <span className="f-w-500 f-light f-12">{data.link}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComment;
