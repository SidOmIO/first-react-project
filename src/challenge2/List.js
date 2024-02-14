import ListItem from "./ListItem"

const List = ({ items }) => {
  return (
    <table class="table-container">
        {items.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
    </table>
  )
}

export default List