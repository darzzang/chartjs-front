import VerticalBarChart from './components/BarChart/VerticalBarChart';
import HorizontalBarChart from './components/BarChart/HorizontalBarChart'
import StackedBarChart from './components/BarChart/StackedBarChart';
import StackedBarChartWithGroups from './components/BarChart/StackedBarChartWithGroups';
import FloatingBarChart from './components/BarChart/FloatingBarChart';
import BarChartBorderRadius from './components/BarChart/BarChartBorderRadius';
import LineChart from './components/LineChart/LineChart';
import Layout from './components/Layout';
import MultiAxisLineChart from './components/LineChart/MultiAxisLineChart';
import SteppedLineChart from './components/LineChart/SteppedLineChart';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const data = [50, 40, 30, 35, 40]
  const labels = [2017, 2018, 2019, 2020, 2021]
  const [csv, setCsv] = useState([1, 2, 3, 4])
  const getCsvWithCallback = useCallback(async () => {
    try {
      const url = 'http://localhost:3001/csv'
      const axiosObj = await axios.get(url)
      const res = await axiosObj.data
      setCsv(res)
    } catch (e) {
      console.log(e);
    }
  }, [])

  useEffect(() => {
    getCsvWithCallback()
  }, [getCsvWithCallback])
  console.log(csv)

  return (
    <Layout>
      <VerticalBarChart data={data} labels={labels} />
      <HorizontalBarChart data={data} labels={labels} />
      <LineChart data={data} labels={labels} />
      <StackedBarChart data={data} labels={labels} />
      <StackedBarChartWithGroups data={data} labels={labels} />
      <FloatingBarChart data={data} labels={labels} />
      <BarChartBorderRadius data={data} labels={labels} />
      <MultiAxisLineChart data={data} labels={labels} />
      <SteppedLineChart data={data} labels={labels} />
    </Layout>
  );
}

export default App;
