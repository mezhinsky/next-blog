export default function NoContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2900"
        width="100"
        height="100"
        fill="#e5e7eb"
      >
        <path
          d="M108.544 284.202667a166.4 166.4 0 0 1 166.4-166.4h474.112a166.4 166.4 0 0 1 166.4 166.4v289.834666a38.4 38.4 0 1 1-76.8 0V284.202667a89.6 89.6 0 0 0-89.6-89.6H274.944a89.6 89.6 0 0 0-89.6 89.6V739.84c0 49.493333 40.106667 89.6 89.6 89.6h265.514667a38.4 38.4 0 0 1 0 76.8H274.944a166.4 166.4 0 0 1-166.4-166.4V284.16z"
          p-id="2901"
        ></path>
        <path
          d="M302.336 336.64a38.4 38.4 0 0 1 38.4-38.4h342.528a38.4 38.4 0 1 1 0 76.8H340.736a38.4 38.4 0 0 1-38.4-38.4zM340.736 465.024a38.4 38.4 0 0 0 0 76.8h215.466667a38.4 38.4 0 1 0 0-76.8h-215.466667z"
          p-id="2902"
        ></path>
        <path
          d="M569.258667 735.232a156.202667 156.202667 0 1 1 290.474666 79.914667l53.376 53.376a38.4 38.4 0 1 1-54.314666 54.314666l-53.333334-53.376a156.202667 156.202667 0 0 1-236.16-134.229333z m156.245333-79.445333a79.402667 79.402667 0 1 0 0 158.848 79.402667 79.402667 0 0 0 0-158.848z"
          p-id="2903"
        ></path>
      </svg>

      <h2 className="text-xl font-bold font-mono text-gray-300">No Content</h2>
      {/* <p className="text-gray-600 mt-2 text-center">
        It looks like there are no files here. Upload some files to start
        managing your content.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Upload Files
      </button> */}
    </div>
  );
}
