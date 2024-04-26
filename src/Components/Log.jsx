

const Log = ({turns}) => {
    console.log("🚀 ~ Log ~ turns:", turns)
    
  return (
    <ol id='log'>
{turns.map(turn=> <li key={`${turn?.square?.row}${turn?.square?.col}`}>{turn?.player}selcted{turn?.square?.row},{turn?.square?.col}</li>)}
    </ol>
  )
}

export default Log