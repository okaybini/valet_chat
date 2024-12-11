import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/outline"; // Import the icon
const ReceiptsPanel = ({
  searchInput,
  setSearchInput,
  handleSearchSubmit,
  files,
  setFiles,
}) => {
  const handleFileSelection = (fileId) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, synced: !file.synced } : file
      )
    );
  };

  const syncSelectedFiles = () => {
    const unsyncedFiles = files.filter((file) => file.synced);
    console.log("Syncing files:", unsyncedFiles);
    // Add your sync logic here
  };

  return (
    <div className="p-4 h-full flex flex-col bg-gray-900 text-white">
      {/* Search Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Sync Now</h2>
        <p className="text-sm text-gray-400">
          Sync now lets you select receipts from your list and sync them
          individually.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center space-x-3 mb-4"
      >
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search Receipts"
          className="flex-1 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring focus:ring-fuchsia-500"
        />
        <button
          type="submit"
          className="p-3 bg-transparent hover:text-fuchsia-500 transition-all duration-300 hover:scale-110 hover:bg-gray-800 rounded-full shadow-md hover:shadow-lg"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-white transition-transform duration-300 ease-in-out" />
        </button>
      </form>

      {/* File List */}
      <div className="flex-1  overflow-y-auto space-x-1 space-y-5">
        {files.map((file) => (
          <div
            key={file.id}
            className={`flex  items-center justify-between bg-gray-800 rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            {/* File Info */}
            <div className="flex items-center space-x-4">
              {/* File Icon */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
                  file.synced
                    ? "bg-gray-700 text-gray-300 hover:shadow-lg"
                    : " text-white hover:bg-gray-600 hover:shadow-lg"
                } transition-all duration-300`}
              >
                <DocumentIcon className="h-6 w-6" />
              </div> 
              {/* File Details */}
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-400">
                  {new Date().toLocaleDateString()} | 6:45 PM
                </p>
              </div>
            </div>

            {/* Sync Toggle */}
            <button
              onClick={() => handleFileSelection(file.id)}
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                file.synced
                  ? "border-white bg-purple-500"
                  : "border-gray-500 bg-gray-700"
              }`}
            >
              {file.synced ? "" : ""}
            </button>
          </div>
        ))}
      </div>

      {/* Sync Now Button */}
      <button
        onClick={syncSelectedFiles}
        className="mt-4 w-full py-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-center font-semibold rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-fuchsia-500 transitiona-all duration-300 shadow-md hover:shadow-lg"
      >
        Sync Now
      </button>
    </div>
  );
};

ReceiptsPanel.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      synced: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default ReceiptsPanel;
