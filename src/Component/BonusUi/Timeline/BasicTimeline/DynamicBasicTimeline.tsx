import { H6, LI, P } from '../../../../AbstractElements'
import { basicTimeLineDataList } from '../../../../Data/BonusUi/Timeline/Timeline'

const DynamicBasicTimeline = () => {
  return (
    <>
      {basicTimeLineDataList.map(({ color, date, time, title, span }, index) => (
        <LI className="d-flex" key={index}>
          <div className={`timeline-dot-${color}`}></div>
          <div className="w-100 ms-3">
            <P className="d-flex justify-content-between mb-2">
              <span className="date-content light-background txt-dark">{date}</span>
              <span>{time}</span>
            </P>
            <H6>{title}<span className="dot-notification"></span></H6>
            <P className="f-light">{span}</P>
          </div>
        </LI>
      ))}
    </>
  )
}

export default DynamicBasicTimeline