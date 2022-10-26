import PropTypes from "prop-types";

const TableRow = ({ value, onClick, TextColor = "black" }) => {
  return (
    <tr onClick={onClick}>
      {value?.map((title, index) => {
        return (
          <td key={index} style={{ color: TextColor }}>
            {title}
          </td>
        );
      })}
    </tr>
  );
};

TableRow.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableRow;
