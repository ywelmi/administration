import { Container, Row } from "reactstrap";
import CommonTableComponent from "./Common/CommonTableComponent";
import { AlertTitle, BadgesTable, CheckboxTitle, InputsTable, ProgressbarTitle, RadioButtonsTitle, ReactstrapTable, SelectTable, SwitchTable, TableComponent, TooltipTriggersTitle, UIComponentsTitle } from "../../../../utils/Constant";
import { alertTableData, badgeTableData, checkBoxTableData, inputTableData, progressTableData, radioBoxTableData, selectBoxTableData, switchTableData, tooltipTableData, uiComponentData } from "../../../../Data/Tables/ReactstrapTable/TableComonent/TableComponent";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";

const TableComponentContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TableComponent} parent={ReactstrapTable} />
      <Container fluid>
        <Row>
          <CommonTableComponent title={UIComponentsTitle} data={uiComponentData} />
          <CommonTableComponent title={AlertTitle} data={alertTableData} />
          <CommonTableComponent title={ProgressbarTitle} data={progressTableData} tableClass="checkbox-td-width"/>
          <CommonTableComponent title={CheckboxTitle} data={checkBoxTableData} tableClass="checkbox-td-width" />
          <CommonTableComponent title={RadioButtonsTitle} data={radioBoxTableData} tableClass="radio-first-col-width" />
          <CommonTableComponent title={SelectTable} data={selectBoxTableData} tableClass="checkbox-td-width" />
          <CommonTableComponent title={InputsTable} data={inputTableData} tableClass="checkbox-td-width"/>
          <CommonTableComponent title={BadgesTable} data={badgeTableData} />
          <CommonTableComponent title={TooltipTriggersTitle} data={tooltipTableData} />
          <CommonTableComponent title={SwitchTable} data={switchTableData} />
        </Row>
      </Container>
    </>
  );
};

export default TableComponentContainer;
