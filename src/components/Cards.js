import React from 'react';

function Cards(props) {
  return (
    <div className="card text-white bg-secondary mb-3 col-6">
      <div className="card-header">กล่องเพิ่มรายการ</div>
      <div className="card-body">
        <h5 className="card-title">
          <input
            value={props.list}
            onChange={props.onListChange}
            type="text"
            className="form-control"
            placeholder="กรอกข้อมูล . . ."
          />
        </h5>
        <button
          onClick={props.addLists}
          type="button"
          className="btn btn-primary  btn-sm btn-block"
        >
          เพิ่ม
        </button>
      </div>
    </div>
  );
}

export default Cards;
