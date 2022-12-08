import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const handleClick = (label) => {
    console.log(label);
  };

  const upadtedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTAABLE</th>
    }
  });
  return <Table  {...props} config={upadtedConfig}/>
};

export default SortableTable;
