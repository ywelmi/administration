import { CardBody, TabContent, TabPane, Table } from 'reactstrap'
import { materialStyleDataList } from '../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs'
import { H6 } from '../../../../AbstractElements'
import { TabContentProp } from '../../../../Types/Ui-Kits/UiKitsTypes'

const MaterialTabContent:React.FC<TabContentProp> = ({basicTab}) => {
  return (
    <TabContent activeTab={basicTab}>
      {materialStyleDataList.map(({ tabId, header, tableHeaders, tableData }, index) => (
        <TabPane tabId={tabId} key={index}>
          <CardBody className="px-0 pb-0">
            <div className="user-header pb-2">
              <H6 className="fw-bold">{header}</H6>
            </div>
            <div className="user-content">
              <div className="theme-scrollbar">
                <Table responsive className="mb-0">
                  <thead>
                    <tr>
                      {tableHeaders.map((item, index) => (
                        <th scope="col" key={index}>
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((value, index) => (
                          <td key={index}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </TabPane>
      ))}
    </TabContent>
  )
}

export default MaterialTabContent