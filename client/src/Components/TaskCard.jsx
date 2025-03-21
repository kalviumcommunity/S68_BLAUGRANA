import PropTypes from 'prop-types';

const TaskCard = ({ task }) => {
    return (
      <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-bold">{task.title}</h2>
        <p className="text-sm text-gray-600">{task.description}</p>
        <span className="text-xs bg-green-200 p-1 rounded">{task.status}</span>
      </div>
    );
  };

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
  
export default TaskCard;
  