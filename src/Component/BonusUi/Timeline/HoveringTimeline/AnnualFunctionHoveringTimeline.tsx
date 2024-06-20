import { H5, LI, P } from "../../../../AbstractElements";
import { Label } from "reactstrap";
import { Location } from "../../../../utils/Constant";

const AnnualFunctionHoveringTimeline = () => {
  return (
    <LI className="timeline-event">
      <Label className="timeline-event-icon"></Label>
      <div className="timeline-event-wrapper">
        <P className="timeline-thumbnail">January 2022- Annual Function</P>
        <H5 className="f-w-500">{Location}</H5>
        <div className="text-muted">Largo Febo,10225012-Calvisano BS</div>
        <P className="pt-3 mb-4">
          What a dynamic performance by the eighth-grade students, Let's welcome
          the ninth-grade kid to the stage.
        </P>
      </div>
    </LI>
  );
};

export default AnnualFunctionHoveringTimeline;
