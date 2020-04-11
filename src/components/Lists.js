import React from 'react';

function Lists(props) {
  return (
    <div className="d-flex justify-content-center">
      <ul className="list-group mt-3 col-6">
        {props.lists.length ? (
          props.lists.map((item, index) => (
            <li
              className="list-group-item d-flex flex-row justify-content-around align-items-center"
              key={index}
            >
              <p className="text-muted mt-2">{index + 1}</p>
              <input
                type="text"
                value={item}
                onChange={(e) => props.onEditListChange(index, e)}
                className="form-control col-10"
              />
              <button
                className="btn btn-danger"
                onClick={() => props.removeTodo(index)}
              >
                ลบ
              </button>
            </li>
          ))
        ) : (
          <li
            className="list-group-item d-flex flex-row justify-content-around align-items-center"
            key={-1}
          >
            <p className="text-danger mt-2">ยังไม่มีรายการ</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Lists;
