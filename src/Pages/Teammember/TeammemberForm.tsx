import { Button, ButtonGroup, Col, Input, Label, Row } from "reactstrap";
import { TTeammember } from "../../type/teammember";
import { useFormik } from "formik";
import { Btn, Popovers } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useState } from "react";
import { hasOwnProperty } from "react-bootstrap-typeahead/types/utils";
import { DGender, DRank } from "../../type/enum";
import { InputSelect } from "../../Component/InputSelect";
import { N } from "../../name-conversion";
import ReactDatePicker from "react-datepicker";
import { useOrgStore } from "../../store/org";
import { useCompetitionStore } from "../../store/competition";
import { convertToDate } from "../../utils/date";
import { ImageUpload } from "../../Component/Forms/FormsControl/ImageUpload";
import { getTeammemberPhoto } from "../../Service/teammember";
import { ImageListType, ImageType } from "react-images-uploading";
import { uploadFile } from "../../Service/file";
import { toast } from "react-toastify";

interface ITeammemberForm {
  omitColumns?: ("teams" | "gender" | "competitions" | "orgs")[];
  teammember?: TTeammember;
  onSubmit: (teammember: TTeammember) => void;
  onCancel?: () => void;
}

interface ITeammemberModal extends ITeammemberForm {}

interface ITeammemberPopover extends ITeammemberForm {}
const TeammemberForm = ({
  teammember: initTeammember,
  onSubmit,
  omitColumns,
  onCancel,
}: ITeammemberForm) => {
  const { orgs } = useOrgStore();
  const { competitions } = useCompetitionStore();
  const teammember: Partial<TTeammember> = initTeammember
    ? initTeammember
    : {
        name: "",
        rank: 0,
        gender: 0,
        dob: new Date("1/1/1980").toISOString(),
        date_join_army: new Date().toISOString(),
        org_id: "",
        competition_id: competitions?.[0].id || "",
        weights: "60",
        photo: "",
        has_army: true,
        has_militia: false,
        id_number: "",
        date_of_issue: new Date(),
        issuing_authority: "",
      };

  // console.log({ teammember, initTeammember });
  const [imgs, setImgs] = useState<ImageListType>([]);

  // const { teams } = useTeamStore();

  const formik = useFormik({
    initialValues: { ...teammember },
    onSubmit: (value) => {
      console.log({ submitValue: value });
      const submitValue = { ...value } as TTeammember;
      if (hasOwnProperty(value, "id")) {
        submitValue["id"] = value.id as string;
      }
      if (submitValue) onSubmit(submitValue);
    },
  });

  useEffect(() => {
    if (!initTeammember?.photo) return;
    getTeammemberPhoto(initTeammember.photo).then((res) => {
      const { data } = res;
      console.log({ imageData: data });
      // const file = new File([data], "photo");
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        const result = reader.result;
        setImgs([{ dataURL: result as string }]);
      };
    });
  }, [initTeammember]);

  const handleUpdatePhoto = (im: ImageType, idx: number) => {
    uploadFile({ file: im }).then(() => {
      // TODO: update current photo
      console.log(`update image at ${idx} successfully`);
    });
  };

  const handleAddPhoto = (im: ImageType) => {
    uploadFile({ file: im.file })
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          formik.setFieldValue("photo", data);
          toast.success(N["success"]);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleDeletePhoto = async (i: number) => {
    // TODO: detele photo api
    formik.setFieldValue("photo", "");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12">
          <Label>Tên</Label>
          <Input
            className="form-control"
            name="name"
            type="text"
            placeholder={teammember.name}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12">
          <ImageUpload
            multiple={false}
            values={imgs}
            onUpdate={handleUpdatePhoto}
            onAdd={handleAddPhoto}
            onDelete={handleDeletePhoto}
          />
        </Col>
        <Col md="12">
          <Label>Số CCCD/CMND</Label>
          <Input
            className="form-control"
            name="id_number"
            type="text"
            placeholder={formik.values.id_number}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12">
          <Label for="date_of_issue" check>
            Ngày cấp
          </Label>
          <ReactDatePicker
            className="form-control"
            name="date_of_issue"
            showYearDropdown
            selected={new Date(formik.values.date_of_issue || new Date())}
            value={
              formik.values.date_of_issue
                ? convertToDate(formik.values.date_of_issue)
                : undefined
            }
            onChange={(date) =>
              formik.setFieldValue("date_of_issue", date?.toISOString())
            }
            locale={"vi"}
            dateFormat={"dd/MM/yyyy"}
          />
        </Col>
        <Col md="12">
          <Label>Nơi cấp</Label>
          <Input
            className="form-control"
            name="issuing_authority"
            type="text"
            placeholder={formik.values.issuing_authority}
            onChange={formik.handleChange}
          />
        </Col>
        <ButtonGroup>
          <Button
            color="primary"
            outline
            onClick={() => {
              formik.setFieldValue("has_militia", false);
              formik.setFieldValue("has_army", true);
            }}
            active={!!formik.values.has_army}
          >
            Lực lượng thường trực
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => {
              formik.setFieldValue("has_militia", true);
              formik.setFieldValue("has_army", false);
            }}
            active={!!formik.values.has_militia}
          >
            Dân quân tự vệ
          </Button>
        </ButtonGroup>
        <Col md="12">
          <InputSelect
            title="Cấp bậc"
            data={DRank.map((item, i) => ({ item, i }))}
            k="item"
            name="rank"
            v="i"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.rank}
          />
        </Col>
        <Col md="12">
          <InputSelect
            title="Giới tính"
            data={DGender.map((item, i) => ({ item, i }))}
            k="item"
            name="gender"
            v="i"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.gender}
          />
        </Col>
        <Col md="12">
          <Label for="dob" check>
            {N["dob"]}
          </Label>
          <ReactDatePicker
            className="form-control"
            name="dob"
            showYearDropdown
            selected={new Date(formik.values.dob || new Date())}
            value={
              formik.values.dob ? convertToDate(formik.values.dob) : undefined
            }
            onChange={(date) =>
              formik.setFieldValue("dob", date?.toISOString())
            }
            locale={"vi"}
            dateFormat={"dd/MM/yyyy"}
          />
        </Col>
        <Col md="12">
          <Label for="date_join_army" check>
            {N["date_join_army"]}
          </Label>
          <ReactDatePicker
            className="form-control"
            name="date_join_army"
            showYearDropdown
            selected={new Date(formik.values.date_join_army || new Date())}
            value={
              formik.values.date_join_army
                ? convertToDate(formik.values.date_join_army)
                : undefined
            }
            onChange={(date) =>
              formik.setFieldValue("date_join_army", date?.toISOString())
            }
            locale={"vi"}
            dateFormat={"dd/MM/yyyy"}
          />
        </Col>
        {!omitColumns?.includes("orgs") ? (
          <Col md="12">
            <InputSelect
              title={N["org_id"]}
              data={orgs || []}
              k="name"
              name="org_id"
              v="id"
              handleChange={({ target: { value } }) => {
                formik.setFieldValue("org_id", value);
              }}
              value={formik.values.org_id}
            />
          </Col>
        ) : null}
        {!omitColumns?.includes("competitions") ? (
          <Col md="12">
            <InputSelect
              title={N["competition_id"]}
              data={competitions || []}
              k="name"
              name="competition_id"
              v="id"
              handleChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.competition_id}
            />
          </Col>
        ) : null}
        <Col md="12">
          <Label>{N["weights"]}</Label>
          <Input
            className="form-control"
            name="weights"
            type="text"
            placeholder={teammember.weights}
            onChange={formik.handleChange}
          />
        </Col>

        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
          {onCancel ? (
            <Btn color="primary" type="button" onClick={onCancel}>
              Đóng
            </Btn>
          ) : null}
        </Col>
      </Row>
    </form>
  );
};

const useTeammemberModal = ({ onSubmit, ...rest }: ITeammemberModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (teammember: TTeammember) => {
    onSubmit(teammember);
    setOpened(false);
  };
  const TeammemberModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TeammemberForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TeammemberModal, handleToggle };
};

const useTeammemberPopover = ({ onSubmit, ...rest }: ITeammemberPopover) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (teammember: TTeammember) => {
    onSubmit(teammember);
    setOpened(false);
  };

  const TeammemberPopover = ({
    children,
    target,
  }: React.PropsWithChildren<{ target: string }>) => (
    <div>
      {children}
      <Popovers
        isOpen={opened}
        placement="auto"
        target={target}
        trigger="click"
      >
        <TeammemberForm
          onSubmit={handleSubmit}
          {...rest}
          onCancel={() => setOpened(false)}
        />
      </Popovers>
    </div>
  );

  return { TeammemberPopover, handleToggle };
};

export { TeammemberForm, useTeammemberModal, useTeammemberPopover };
