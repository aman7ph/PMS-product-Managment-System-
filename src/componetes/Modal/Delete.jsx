import React from 'react';
import './ModalStyle.scss';

const Delete = ({ show, crudNum, close, ProductDelete }) => {
    return (
        <div>
            {show && crudNum === 4 ? (
                <div className="modalContainer" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal_header">
                            <h2 className="modal_header-title">
                                Delete Product
                            </h2>
                            <button className="close" onClick={() => close()}>
                                <img src="x.svg" alt="close" />
                            </button>
                        </div>
                        <div className="modal_content">
                            Are you shure you Want to delete this product ?
                        </div>
                        <div className=" modal_footer">
                            <button
                                className="modal-close"
                                onClick={() => close()}
                            >
                                Cancel
                            </button>
                            <button
                                className="submit"
                                onClick={() => ProductDelete()}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Delete;
