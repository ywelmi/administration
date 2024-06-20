import { Container, Row } from 'reactstrap'
import AreaChart1 from './AreaChart1/AreaChart1'
import AreaChart2 from './AreaChart2/AreaChart2'
import ColumnChart1 from './ColumnChart1/ColumnChart1'
import ColumnChart2 from './ColumnChart2/ColumnChart2'
import GanttChart from './GanttChart/GanttChart'
import LineChart from './LineChart/LineChart'
import ComboChart from './ComboChart/ComboChart'
import WordTree from './WordTree/WordTree'
import PieChart1 from './PieChart1/PieChart1'
import PieChart2 from './PieChart2/PieChart2'
import PieChart3 from './PieChart3/PieChart3'
import PieChart4 from './PieChart4/PieChart4'
import BarChart2 from './BarChart2/BarChart2'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Charts, GoogleCharts } from '../../../utils/Constant'

const GoogleChartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleCharts} parent={Charts} />
      <Container fluid>
        <Row>
          <AreaChart1 />
          <AreaChart2 />
          <ColumnChart1 />
          <ColumnChart2 />
          <GanttChart />
          <LineChart />
          <ComboChart />
          <BarChart2 />
          <WordTree />
          <PieChart1 />
          <PieChart2 />
          <PieChart3 />
          <PieChart4 />
        </Row>
      </Container>
    </>
  )
}

export default GoogleChartContainer