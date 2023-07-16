import Clock from './clock';

export default function WorldClock({clockData}) {
  
  return (
    <div>
      {clockData.map((timezoneValue, i) => <Clock timeZone={timezoneValue} key={i}/> )}
    </div>
  )
}