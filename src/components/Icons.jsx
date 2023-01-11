const Icons = (icon) => {
switch (icon) {
    case '11d':
        icon='Icons/thunderstorms-rain.svg'
        console.log("TORMENTA");
        break; 
    case '11n':
            icon='Icons/thunderstorms-rain.svg'
            console.log("TORMENTA");
            break;    
    case '09d':
        icon='Icons/partly-cloudy-day-drizzle.svg'
        console.log('LLOVIZNA');
        break;
    case '09n':
            icon='Icons/partly-cloudy-night-rain.svg'
            console.log('LLOVIZNA');
            break;
    case '10d':
        icon='Icons/rain.svg'
        console.log('LLUVIA');
        break;
    case '10n':
            icon='Icons/partly-cloudy-night-rain.svg'
            console.log('LLUVIA');
            break;
    case '13d':
        icon='Icons/snow.svg'
        console.log('NIEVE');
        break;
    case '13n':
            icon='Icons/snow.svg'
            console.log('NIEVE');
            break;                          
    case '01d':
        icon='Icons/clear-day.svg'
        console.log('DESPEJADO');
        break;
    case '01n':
        icon='Icons/clear-night.svg'
        console.log('DESPEJADO');
        break; 
    case '02d':
        icon='Icons/partly-cloudy-day-fog.svg'
        console.log('NUBES');
        break;
    case "02n":
        icon='Icons/partly-cloudy-night-fog.svg'
        console.log('NUBES');
        break; 
    case '03d':
        icon='Icons/cloudy.svg'
        console.log('NUBES');
        break;
    case '03n':
        icon='Icons/cloudy.svg'
        console.log('NUBES');
        break;
    case '04d':
        icon='Icons/fog.svg'
        console.log('NUBES');
        break;  
    case '04n':
        icon='Icons/fog.svg'
        console.log('NUBES');
        break;    
    case '50d':
        icon='Icons/mist.svg'
        console.log('HUMO');
        break;
    case '50n':
        icon='Icons/mist.svg'
        console.log('HUMO');
        break;      
    default:
        icon=null
        console.log('LIMPIO');    
}
return icon
}

export default Icons