import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import './Table.scss';

const Table = () => {
    return (
        <div className="app__table">
            <div className="table_header">
                <p>Producs</p>
                <div>
                    <input placeholder="products" />
                    <button className="add_new">+ Add New</button>
                </div>
            </div>
            <div className="app__table-section">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Availability </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-cell="No.">1</td>
                            <td data-cell="Name">camera</td>
                            <td data-cell="Price">$ 20</td>
                            <td data-cell="Quantity">10</td>
                            <td data-cell="Availability">in stock </td>
                            <td data-cell="Action">
                                <button>
                                    <BiDetail />
                                </button>
                                <button>
                                    <FaEdit />
                                </button>
                                <button>
                                    <MdDeleteForever />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
