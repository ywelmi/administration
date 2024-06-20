import { Fragment } from "react";
import { Image, LI, P, UL } from "../../../../../AbstractElements";
import { contactWrapperData } from "../../../../../Data/Application/Chat/PrivateChat";
import { dynamicImage } from "../../../../../Service";
import ContactEdit from "./ContactEdit";

const ContactWrapper = () => {
  return (
    <div className="contact-wrapper">
      <>
      {contactWrapperData.map((data, i) => (
        <Fragment key={i}>
          <P>{data.mainLetter} </P>
          {data.contactData.map((item, i) => (
            <UL className="border-0 simple-list" key={i} >
              <LI className="common-space">
                <div className="chat-time">
                  {item.image && 
                  <Image className="img-fluid rounded-circle" src={dynamicImage(item.image)} alt="user" /> }
                  {item.imageUser &&
                    <div className={`custom-name bg-light-${item.color}`}>
                      <P className={`txt-${item.color} f-w-500`}>{item.imageUser}</P>
                    </div>
                  }
                  <div>
                    <span className="f-w-600">{item.name}</span>
                    <P>{item.phoneNumber}</P>
                  </div>
                </div>
                <ContactEdit />
              </LI>
            </UL>
          ))}
        </Fragment>
      ))}
      </>
    </div>
  );
};

export default ContactWrapper;
