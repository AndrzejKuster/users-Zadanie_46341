import './ButtonsPanel.css'

const ButtonsPanel = (props) => {
    return (
    <div className="filteringButtons">
        <button className={props.filter==='admins' ? 'active' : ''} onClick={()=> props.setFilter('admins')}>Wyświetl tylko adminów</button>
        <button className={props.filter==='users' ? 'active' : ''} onClick={()=> props.setFilter('users')}>Wyświetl tylko userów</button>
        <button className={props.filter==='all' ? 'active' : ''}onClick={()=> props.setFilter('all')}>Wyświetl wszystkich</button>
    </div>
)}


export default ButtonsPanel;