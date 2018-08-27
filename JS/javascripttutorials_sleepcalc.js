const getSleepHours = day => {
    switch (day) {
        case 'Monday' :
          return 8
          break;
        case 'Tuesday' :
          return 7
          break;
        case 'Wednesday' :
          return 5
          break; 
        case 'Thursday' :
          return 10
          break;
        case 'Friday' :
          return 6
          break; 
          case 'Saturday' :
          return 8.5
          break;
        case 'Sunday' :
          return 9
          break;   
        default :
          return "Error"
          break;
    }    
};
    //debug
    //console.log(getSleepHours('Monday'));
    
    const getActualSleepHours = () => {
        getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday');
    };
    
    //debug 
    console.log(getActualSleepHours());
      
    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    };
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    };
    
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep');
      else if (actualSleepHours > idealSleepHours) {
        console.log('You got '+ (idealSleepHours-actualSleepHours)+ 'more hours of sleep');
      }
      else if (actualSleepHours < idealSleepHours) {
          console.log('Get ' + (idealSleepHours-actualSleepHours)+ 'of sleep.');
      }
      else {
        console.log('Error');
      }
    };

calculateSleepDebt();

    
    
    
    
    