

export default function ModalActor () {
    


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 max-w-md text-left">
                <button
                    className="text-blue-500 text-sm font-medium mb-4"
                >
                Close
                </button>
                <h2 className="text-2xl font-semibold mb-4">Name</h2>
                <p className="text-gray-700">Bio</p>
            </div>
        </div>
    )
}