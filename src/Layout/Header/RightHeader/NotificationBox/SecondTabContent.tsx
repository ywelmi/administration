import { Link } from "react-router-dom";
import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { messageData } from "../../../../Data/Layout/Header";

const SecondTabContent = () => {
  return (
    <div className="notification-card">
        <UL>
            {messageData.map((data,i)=>(
                <LI className="notification d-flex w-100 justify-content-between align-items-center" key={i}>
                    <div className="d-flex w-100 notification-data justify-content-center align-items-center gap-2">
                        <div className="user-alerts flex-shrink-0">
                            <Image className="rounded-circle img-fluid img-40" src={dynamicImage(`dashboard/user/${data.image}`)} alt="user" />
                        </div>
                        <div className="flex-grow-1">
                            <div className="common-space user-id w-100">
                                <div className="common-space w-100">
                                    <Link className="f-w-500 f-12" to={`${process.env.PUBLIC_URL}/chat/privatechats`} >{data.name}</Link>
                                </div>
                            </div>
                            <span className="f-w-500 f-light f-12">{data.detail}</span>
                        </div>
                    </div>
                    <span className="f-light f-w-500 f-12">{data.time}</span>
                </LI>
            ))}
        </UL>
    </div>
  );
};

export default SecondTabContent;
