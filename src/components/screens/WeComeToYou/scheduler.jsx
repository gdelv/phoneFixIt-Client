import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  WeekView,
  MonthView,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './appointmentData'

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: '2018-07-17',
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }

  getCurrentDate = () => {
    let currentDate = new Date()
    this.setState({
      currentDate: currentDate
    })
  }




  componentDidMount = () => {
    this.getCurrentDate()
  }

  render() {
    const { data, currentDate } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            currentDate={currentDate}
            defaultCurrentViewName="Week"
            onCurrentDateChange={this.currentDateChange}
          />
          <DayView
            startDayHour={10}
            endDayHour={20}
          />
          <WeekView
            startDayHour={10}
            endDayHour={20}
          />
          <MonthView/>
          <Toolbar/>
          <ViewSwitcher/>
          <DateNavigator/>
          <TodayButton/>
          <Appointments
            // data={data} 
            />
          <AppointmentTooltip
          showCloseButton
          showOpenButton
          />
          <AppointmentForm
            readOnly
          />
        </Scheduler>
      </Paper>
    );
  }
}

export default Demo
