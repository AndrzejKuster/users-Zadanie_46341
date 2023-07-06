import './ButtonsPanel.css'

const ButtonsPanel = (props) => {
    return (
    <div className="filteringButtons">
        <button onClick={()=> props.filteringUsersByType('Admins')}>Wyśwetl tylko adminów</button>
        <button onClick={()=> props.filteringUsersByType('Users')}>Wyśwetl tylko userów</button>
        <button onClick={()=> props.filteringUsersByType('All')}>Wyśwetl wszystkich</button>
    </div>
)}


export default ButtonsPanel;