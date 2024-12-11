import PropTypes from "prop-types";

const ReceiptList = ({ receipts }) => {
  return (
    <div className="p-4 bg-purple-950 min-h-screen">
      <h2 className="text-lg font-semibold mb-5 text-white">Uploaded Receipts</h2>
      {receipts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {receipts.map((receipt) => (
            <div
              key={receipt.id}
              className="flex flex-col bg-gray-800 text-white shadow-lg rounded-lg p-4 hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-transform duration-300 ease-in-out"

            >
              {/* File Information */}
              <div className="mb-4">
                <p className="font-bold truncate">{receipt.fileName}</p>
                <p className="text-sm text-gray-400">{receipt.timestamp}</p>
              </div>

              {/* Download/Preview Button */}
              <div className="flex justify-between items-center">
                <a
                  href={`/receipts/${receipt.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm hover:underline"
                >
                  Preview
                </a>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    receipt.autoSync
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {receipt.autoSync ? "Synced" : "Not Synced"}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-96 text-white">
          <p className="text-center text-gray-400 text-lg">
            No receipts uploaded yet.
          </p>
        </div>
      )}
    </div>
  );
};

ReceiptList.propTypes = {
  receipts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fileName: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      autoSync: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ReceiptList;
