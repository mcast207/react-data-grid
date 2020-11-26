import React, {useState} from "react";
import ReactDataGrid from "react-data-grid"

function Grid(){
const [selectedIndex, setSelectedIndex] = useState([]);
const columns = [
{
key: "id",
name: "ID"
},
{
  key: "title",
  name: "Title"
},
{
  key: "count",
  name: "Count"
}

]

let rowsx = [{
  id: 1,
  title: "title1",
  count: 1
},
{
  id: 2,
  title: "title2",
  count: 2
},
{
   id: 3,
  title: "title3",
  count: 3
}
]

let onRowsSelected = rows =>{
setSelectedIndex(rows.map(r=>r.rowIdx))
}
console.log("selectedIndex: "+ selectedIndex);
return(
  <>
  <div>
      <ReactDataGrid
          rowKey="id"
          columns={columns}
          rowGetter={i=>rowsx[i]}
          rowsCount={3}
          minHeight={300}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
           onRowsSelected: onRowsSelected,
            selectBy: {
              indexes: selectedIndex
            }
          }}
        />
  </div>
  </>
);
        
}



function App(){
  return (
    <div className="App">
      <Grid />
    </div>
  );
}
export default App;
