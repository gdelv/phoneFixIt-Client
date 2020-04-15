import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing} from '@devexpress/dx-react-scheduler';
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
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './appointmentData'

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: '2018-07-17',
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
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

  changeAddedAppointment = (addedAppointment) => {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges = (appointmentChanges) => {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointmentId = (editingAppointmentId) => {
    this.setState({ editingAppointmentId });
  }

  commitChanges = ({ added, changed, deleted }) => {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, currentDate, addedAppointment, appointmentChanges, editingAppointmentId } = this.state;

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
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointmentId={editingAppointmentId}
            onEditingAppointmentIdChange={this.changeEditingAppointmentId}
          />
          <IntegratedEditing/>
          <DayView
            startDayHour={10}
            endDayHour={20}
          />
          <WeekView
            startDayHour={10}
            endDayHour={20}
          />
          <MonthView/>
          <AllDayPanel/>
          <EditRecurrenceMenu/>
          <ConfirmationDialog/>
          <Toolbar/>
          <ViewSwitcher/>
          <DateNavigator/>
          <TodayButton/>
          <Appointments
            data={data} 
            />
          <AppointmentTooltip
          showCloseButton
          showOpenButton
          showDeleteButton
          />
          <AppointmentForm
          />
        </Scheduler>
      </Paper>
    );
  }
}

export default Demo
