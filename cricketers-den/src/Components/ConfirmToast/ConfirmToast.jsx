import "./ConfirmToast.css";
// const ConfirmToast = ({ closeToast, onConfirm, msg }) => {

//     return (
//         <div>
//             <p>{msg}</p>
//             <button onClick={() => { onConfirm(); closeToast(); }}>Yes</button>
//             <button onClick={closeToast}>No</button>
//         </div>
//     );
// };

const ConfirmToast = ({ closeToast, onConfirm, msg }) => {
    msg = "Delete this player?";
    return (
        <>

            <div className="confirmToast w-full flex flex-col justify-center items-center gap-2">
                <p>{msg}</p>
                <div className="buttons w-full flex gap-1 justify-center items-center">
                    <button
                        className="confirm"
                        onClick={() => { onConfirm(); closeToast(); }}
                    >
                        Yes
                    </button>
                    <button
                        className="cancel"
                        onClick={closeToast}
                    >
                        No
                    </button>
                </div>


            </div>
        </>
    );
};

export default ConfirmToast;