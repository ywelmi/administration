import { Col, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { TLotsDraw, TLotsDrawMatrix } from "../../type/lotsdraw";
import { Btn, H3, H5 } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { Ref, useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { getScheduleContent, updateScheduleContent } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { forEach } from "lodash";
import { t } from "i18next";
import ReactDatePicker from "react-datepicker";
import { TGroup } from "../../type/team";
import { convertToDate, convertToDateType2 } from "../../utils/date";
const ContentSchedule = ({ content_id }: any) => {
    const [dataSchedule, setDataSchedule] = useState<any>(null);
    const [dataLocation, setDataLocation] = useState("");
    const fetch_data = async () => {
        getScheduleContent(content_id).then((res: any) => {
            if (res.status == 200) {
                setDataSchedule(res.data);
                setDataLocation(res.data.match_location);
            } else {
                getScheduleContent(content_id).then((res: any) => {
                    if (res.status == 200) {
                        setDataSchedule(res.data);
                        setDataLocation(res.data.match_location);
                    }
                });
            }
        });
    };
    const handleUpdateSchedule = (id: any, data: any) => {
        console.log(data);
        updateScheduleContent(id, data)
            .then((res) => {
                const { data, status } = res;
                if (status === 200) {
                    getScheduleContent(id).then((res: any) => {
                        if (res.status == 200) {
                            setDataSchedule(res.data);
                            setDataLocation(res.data.match_location);
                        }
                    });
                } else {
                    toast.error(res.data);
                }
            })
            .catch((err) => {
                toast.error(N["failed"] + "khi cập nhật khóa thăm" + err);
                console.log({ err });
            });
    };
    useEffect(() => {
        setDataSchedule(null);
        fetch_data();
    }, [content_id]);

    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center m-l-20">
                <H5 className="d-flex align-items-center">
                    <strong>Ngày thi đấu</strong>
                </H5>

                <Input
                    className="digits"
                    type="date"
                    name="match_date"
                    value={dataSchedule ? convertToDateType2(dataSchedule.match_date) : ""}
                    onChange={(newdate) => {
                        const newData = {
                            ...dataSchedule,
                            match_date: newdate.target.value,
                        };
                        handleUpdateSchedule(content_id, newData);
                    }}
                />
            </div>
            {dataSchedule && (
                <>
                    <div className="d-flex align-items-center">
                        <H5 className="">
                            <strong>Giờ thi đấu</strong>
                        </H5>
                        <ReactDatePicker
                            className="form-control m-l-10"
                            name="match_hour"
                            // selected={new Date(original.match_date as string || new Date())}
                            value={dataSchedule ? dataSchedule.match_hour : ""}
                            onChange={
                                (newdate) => {
                                    const newData = {
                                        ...dataSchedule,
                                        match_hour: `${newdate?.getHours()}: ${newdate?.getMinutes()}`,
                                    };
                                    handleUpdateSchedule(content_id, newData);
                                }
                                // table.options.meta?.updateData(
                                //     index,
                                //     id,
                                //     `${date?.getHours()}:${date?.getMinutes()}`
                                // )
                            }
                            showTimeSelect
                            showTimeSelectOnly
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Giờ"
                            locale={"vi"}
                        />
                    </div>
                    <div className="d-flex align-items-center m-l-20">
                        <H5 className="m-r-50">
                            <strong>Địa điểm</strong>
                        </H5>
                        <Input
                            className=" form-control"
                            name="match_location"
                            // selected={new Date(original.match_date as string || new Date())}
                            value={dataLocation}
                            type="text"
                            onBlur={(newdate) => {
                                const newData = {
                                    ...dataSchedule,
                                    match_location: newdate.target.value,
                                };
                                handleUpdateSchedule(content_id, newData);
                            }}
                            onChange={(newdate) => {
                                setDataLocation(newdate.target.value);
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export { ContentSchedule };
