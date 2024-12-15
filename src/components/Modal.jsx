const Modal = ({ closeModal, isOpen }) => {
  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <p className=" text-white text-center">Assalomu Alaykum</p>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button onClick={closeModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Yopish
              </button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
