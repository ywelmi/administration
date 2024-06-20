import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { BlogTimelineTitle, ImplementedTheProgramForWeeklyCodeChallenges } from '../../../../utils/Constant';
import { Badges, H5, P } from '../../../../AbstractElements';

const BlogTimeline = () => {
    const BlogTextTime = "help you build problem-solving skills, better understand the programming. ";
    const BlogTime = "If you want to improve your skills in programming.";
  
    return (
      <VerticalTimelineElement className="cd-timeline-block" date="March 12 2022" icon={<i className="icon-youtube"></i>} iconClassName="cd-timeline-img bg-danger">
        <div className="cd-timeline-content">
            <div className="timeline-wrapper">
                <Badges color="danger">{BlogTimelineTitle}</Badges>
            </div>
            <H5 className="f-w-500 m-0"> {ImplementedTheProgramForWeeklyCodeChallenges}</H5>
            <P className="mb-0">
                Challenges <em className="txt-danger">{BlogTextTime}</em>{BlogTime}
            </P>
            <div className="ratio ratio-21x9 m-t-20">
                <iframe src="https://www.youtube.com/embed/sqRk0Ly66Ps" title="myFrame" allowFullScreen></iframe>
            </div>
        </div>
      </VerticalTimelineElement>
    );
}

export default BlogTimeline