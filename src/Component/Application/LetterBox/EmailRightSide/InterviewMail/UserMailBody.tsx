import { P } from "../../../../../AbstractElements";

const UserMailBody = () => {
  return (
    <div className="user-body">
      <P>Dear Customer,</P>
      <P>
        We regret to notify you that an unauthorized attempt was made to access
        your account. Our system discovered suspicious activity, and we acted
        right away to safeguard your personal data.
      </P>
      <P>
        Please change your login information by clicking the following link in
        order to safeguard your account:
      </P>
      <P>
        Please be aware that your account may be temporarily suspended if no
        action is taken within 24 hours. We urge you to take immediate action to
        prevent any inconvenience.
      </P>
      <P>
        We sincerely apologize for any inconvenience this may cause and thank
        you for your immediate attention to this matter.
      </P>
      <div className="mail-subcontent">
        <P>Yours faithfully,</P>
        <P>Account Security Team</P>
      </div>
    </div>
  );
};

export default UserMailBody;
