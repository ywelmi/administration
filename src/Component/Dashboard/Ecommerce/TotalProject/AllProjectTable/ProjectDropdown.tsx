import CardHeaderDropdown from "../../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";

const ProjectDropdown = () => {
  return (
    <div className="product-sub">
      <CardHeaderDropdown svgIconId="more-horizontal" firstItem="Last Month" secondItem="Last Week" thirdItem="Last Day" />
    </div>
  );
};

export default ProjectDropdown;
