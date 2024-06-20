import { useState } from 'react'
import ReactDatePicker from 'react-datepicker';

const OnlyTimePicker = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return (
      <ReactDatePicker
        className="form-control"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    );
}

export default OnlyTimePicker