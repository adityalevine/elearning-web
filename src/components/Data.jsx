export const Data = (props) => {
  const { label, percentage } = props;

  return (
    <div>
      <div className="mb-2">
        <p className="text-lg">{label}</p>
        <div className="flex justify-between items-center">
          <div className="w-3/4 bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="ml-2">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};
