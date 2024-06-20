import { Card, CardBody, Col, Table } from 'reactstrap'
import GridOptionTableHead from './GridOptionTableHead'
import GridOptionTableBody from './GridOptionTableBody'
import { gridData } from '../../../../Data/Ui-Kits/Grid/GridData'
import { GridOptions } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const GridOptionsCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={GridOptions} span={gridData} />
        <CardBody>
          <div className="theme-scrollbar">
            <Table bordered striped responsive>
              <GridOptionTableHead />
              <GridOptionTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default GridOptionsCart