import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import React, {useState} from 'react';
import {compareAsc, format, parse} from 'date-fns';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

type Events = {
	title: string;
	start: Date;
	end: Date;
};

const MyCalendar = () => {
	const [events, setEvents] = useState<Events[]>([
		{
			title: 'event1',
			start: parse('2022-11-18 09:00:00', 'yyyy-MM-dd HH:mm:ss', new Date()),
			end: parse('2022-11-18 10:00:00', 'yyyy-MM-dd HH:mm:ss', new Date()),
		},
		// {
		// 	id: 2,
		// 	title: 'event2',
		// 	start: moment({hours: 10}).toDate(),
		// 	end: moment({hours: 11}).toDate(),
		// },
		// {
		// 	id: 3,
		// 	title: 'event3',
		// 	start: moment({hours: 11}).toDate(),
		// 	end: moment({hours: 12}).toDate(),
		// },
	]);
	const newEvent = () => {
		setEvents([...events, {
			title: 'Hello React',
			start: new Date(2022, 11, 18, 8),
			end: new Date(2022, 11, 18, 11),
		}]);
	};

	return (
		<div>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
				defaultView='day'
				onSelectSlot={newEvent}
				selectable
				toolbar={false}
				style={{height: 500, width: 200}}
			/>
		</div>
	);
};

export default MyCalendar;
