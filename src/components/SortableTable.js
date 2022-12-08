import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const upadtedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th>{column.label} IS SORTAABLE</th>
    }
  });
  return <Table  {...props} config={upadtedConfig}/>
};

export default SortableTable;
