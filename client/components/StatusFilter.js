export default function StatusFilter({ filter, setFilter }) {

  const filters = ["All", "Want to Read", "Reading", "Completed"]

  return (
    <div className="flex gap-3 mb-6">

      {filters.map((status) => (

        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`px-3 py-1 rounded border ${
            filter === status
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          {status}
        </button>

      ))}

    </div>
  )
}