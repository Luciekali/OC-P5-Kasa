
function EquipmentsList({ equipments }) {
    const equipmentsList = equipments.map(equipment =>
        <li key={equipment}>
            {equipment}</li>)
    return (
        <ul >{equipmentsList}</ul>
    )
}

export default EquipmentsList;