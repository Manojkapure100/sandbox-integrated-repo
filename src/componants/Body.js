import React from "react";

const Body = () => {
  return (
    <>
      <div>
        <table>
          <tr>
            <td> Name: </td>
            <td>
              {" "}
              <input type="text" name="name" />{" "}
            </td>
          </tr>
          <tr>
            <td> email: </td>
            <td>
              {" "}
              <input type="email" name="email" />{" "}
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <button> Submit </button>{" "}
            </td>
            <td>
              {" "}
              <button> reset </button>{" "}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Body;
