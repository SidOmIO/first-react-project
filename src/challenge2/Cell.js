const Cell = ({ cellData }) => {
  let data;
  try {
    data = JSON.parse(cellData);
  } catch (error) {
    data = cellData;
  }

  const renderData = (obj) => {
    return Object.keys(obj).map((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        return renderData(obj[key]);
      } else {
        return (
          <td>{key} - {obj[key]}</td>
        );
      }
    });
  };

  if (typeof data === 'object' && data !== null) {
    return (
      <>
        {renderData(data)}
      </>
    );
  }

  return <td>{data}</td>;
};

export default Cell;
