let person = {
    name: 'Hannah',
    age: 28,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Monday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);
  
  let person = {
    name: 'Hannah',
    age: 28,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Monday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);
  
    