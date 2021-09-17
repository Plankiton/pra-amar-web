import SearchBar from './SearchBar.js';
export default function Menu({
  items,
  onSearch,
  onItemFounds,
  onSelect,
  onSelectSearch,
  onJumpToEmptyMeal,
}) {
  return (
    <div className="Menu">
      <SearchBar onItemFounds={onItemFounds} onSearch={onSearch} onSelect={onSelectSearch}/>
      <nav className="MenuItems">
        <ul>
          {items&&items.map((item, i) => {
            try {
              return (<li key={item.id}>
                <h3><span style={{backgroundColor: item.color, color: item.text}}>
                  <a onClick={() => {
                    onSelect(item, i, () => {
                      if ((typeof item) == "string")
                        return (<li><a href={`#${item}`}>{item}</a></li>);
                      else if ((typeof item) == "function") {
                        item = item(i);
                      }
                    });
                  }} href={`#${item.id}`} style={{color: item.text}}>{item.label}</a>
                </span></h3>
              </li>);
            } catch {
              return null;
            }
          })}
        </ul>
      </nav>
    </div>
  );
}
