var _content_point = {
    /**
     * Loại điểm
     * @private
     */
    _POINT_UNIT: {
        /**
         * Số lần, số nguyên, số thập phân, khoảng cách... cứ là số thì dùng
         */
        _NUMBER: 1,
        /**
         * Thời gian
         */
        _TIME: 2,
    },

    /**
     * Dữ liệu theo content
     * @private
     */
    _points: {
        /**
         * Lưu kiểu thuộc tính - giá trị: 
         * Thuộc tính: content_id đã lowercase
         * Giá trị: là bản ghi trả về từ backend
         */
    },

    /**
     * Cập nhật dữ liệu điểm
     * Client sẽ gọi api /sports/point-config/{sportId} để trả về dữ liệu. rồi gọi hàm này truyền kết quả nhận dc từ api 
     */
    setPoints(contentPoints) {
        var me = this;

        //không có dữ liệu thì bỏ qua
        if (!Array.isArray(contentPoints) || contentPoints.length == 0) {
            return;
        }

        var configlen = contentPoints.length;
        for (var i = 0; i < configlen; i++) {
            var item = contentPoints[i];
            //bỏ qua bản ghi thiếu thông tin
            if (!item.content_id || !Array.isArray(item.points) || item.points.length === 0) {
                continue;
            }

            //cập nhật dữ liệu
            //xử lý lower dữ liệu để hàm tính toán tiện xử lý
            me._points[item.content_id.toString().toLowerCase()] = item;

            //Xử lý chuyển đổi dữ liệu để tiện tính toán
            var pointsLenth = item.points.length;
            for (let j = 0; j < pointsLenth; j++) {
                var point = item.points[j];
                point.record_value_cal = me._convertValue(item.record_unit, point.record_value);
            }
        }
    },

    /**
     * Chuyển đổi từ thành tích thi đấu của nội dung ra điểm
     * @param {string/guid} contentId: Nội dung thi đấu nào
     * @param {string} recordValue: Kết quả thi đấu. Nhập đúng định dạng quy định
     * Dữ liệu sẽ trả kèm về qua 1 api /client/<content_id>.js, client sẽ tự querystring _dc theo thời gian để xử lý cache
     * Dữ liệu sẽ tạo đẩy vào _content_point.
     */
    convert(contentId, recordValue) {
        var me = this;

        //thiếu thông tin -> bỏ qua
        if (!contentId || !recordValue) {
            return;
        }

        //lấy cấu hình điểm của nội dung
        var pointConfig = me._points[contentId.toString().toLowerCase()];

        //không tìm dc cấu hình -> bỏ qua
        if (!pointConfig
            || !Array.isArray(pointConfig.points)
            || pointConfig.points.length === 0) {
            return;
        }

        var point = me._calculatorPoint(pointConfig, recordValue);
        return point;
    },

    /**
     * Tính điểm
     * Tùy thuộc vào cấu hình point unit thì sẽ duyệt asc hoặc desc để tìm mốc điểm
     * Từ đó map tính ra điểm quy đổi ứng với point_value truyền vào
     */
    _calculatorPoint(pointConfig, recordValue) {
        var me = this;
        var recordValueCal = me._convertValue(pointConfig.record_unit, recordValue);

        //dữ liệu đã sắp xếp tăng dần theo point_value, tùy thuộc điểm là thời gian hay số thì sẽ sắp xếp lại mảng nguồn để duyệt tìm bản ghi tưng ứng
        var pointDetails = pointConfig.points;
        var pointDetail = null;
        var count = pointDetails.length;

        for (var i = count - 1; i >= 0; i--) {
            var item = pointDetails[i];
            if (recordValueCal === item.record_value_cal) {
                //khớp mốc khởi điểm trả luôn khỏi tính
                return item.point_value;
            }

            //thuộc khoảng giá trị của mốc gần nhất -> lấy ra để tính toán
            if ((pointConfig.record_unit === me._POINT_UNIT._TIME && recordValueCal < item.record_value_cal)
                || (pointConfig.record_unit === me._POINT_UNIT._NUMBER && recordValueCal > item.record_value_cal)) {
                pointDetail = item;
                break;
            }
        }

        //Không có detail phù hợp -> bỏ qua
        if (pointDetail == null) {
            return 0;
        }

        //Không có offset -> mốc fix
        if (!pointDetail.point_offset) {
            return pointDetail.point_value;
        }

        //Duyệt offset để tính point_value
        //TODO tránh while vô hạn thì sẽ giới hạn số lần tính đủ tốt: 1000
        var rvalue = pointDetail.record_value_cal;
        var pvalue = pointDetail.point_value;
        let pvaluePrv;
        for (var i = 0; i < 1000; i++) {
            pvaluePrv = pvalue;

            rvalue = Math.roundDecimal(rvalue + pointDetail.record_offset, 2);
            pvalue = Math.round(pvalue + pointDetail.point_offset);

            if (rvalue === recordValueCal) {
                //đạt mốc điểm -> trả giá trị theo mốc điểm
                return pvalue;
            }

            if ((pointConfig.record_unit === me._POINT_UNIT._TIME && recordValueCal > rvalue)
                || (pointConfig.record_unit === me._POINT_UNIT._NUMBER && recordValueCal < rvalue)
            ) {
                //không đạt chính xác mốc mà vượt quá -> lấy mốc nhỏ hơn gần nhất
                return pvaluePrv;
            }
        }

        return 0;
    },

    /**
     * Chuyển đổi sang dữ liệu để tính toán so sánh với kết quả
     * @param {any} unit: Đơn vị của điểm
     * @param {any} recordValue: chuỗi kết quả nhập vào
     * @private
     */
    _convertValue(unit, recordValue) {
        var me = this;
        switch (unit) {
            case me._POINT_UNIT._TIME:
                return me._convertValue_TIME(recordValue);
                break;
            case me._POINT_UNIT._NUMBER:
            default:
                return parseFloat(recordValue.replace(',', '.'));
        }

        return null;
    },

    /**
     * Chuyển đổi thời gian thành giá trị tính toán
     * @param {any} value: chuỗi thời gian kết quả thi đấu. Định dạng HH:mm:ss.miliseconds
     * @private
     */
    _convertValue_TIME(value) {
        var hour = 0, minute = 0, second = 0;

        var ds = value
            .replace('"', ':')  //chuẩn hóa dữ liệu trước khi tính toán
            .replace("'", ':')
            .replace(",", '.')
            .split('.');        //ngắt xem có thập phân không (milisecond)

        var ts = ds[0].split(':');
        if (ts.length > 2) {
            //Có giờ
            hour = parseInt(ts[0], 0);
            minute = parseInt(ts[1], 0);
            second = parseInt(ts[2], 0);
        }
        else if (ts.length > 1) {
            //Có phút
            minute = parseInt(ts[0], 0);
            second = parseInt(ts[1], 0);
        }
        else if (ts.length > 0) {
            //Có giây
            second = parseInt(ts[0], 0);
        }

        var pvalue = 0;
        if (hour > 0) {
            pvalue += hour * 3600;
        }
        if (minute > 0) {
            pvalue += minute * 60;
        }
        if (second > 0) {
            pvalue += second;
        }

        if (ds.length > 1) {
            pvalue += parseFloat('0.' + ds[1]);
        }

        return pvalue;
    },
};

/**
 * Làm tròn đến bao nhiêu số thập phân
 */
Math.roundDecimal = function (value, decimal) {
    var ps = Math.pow(10, decimal);
    return Math.round(value * ps) / ps;
}