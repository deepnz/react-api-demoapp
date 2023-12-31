import React from "react";
import CartStore from "./CartStore";

export default function Eventitem({ event }) {
  return (
    <tr className="align-middle">
      <td>
        <img className="img-fluid max-100" src={event.imgUrl} alt="Cover" />
      </td>
      <td className="max-50">
        { new Date(event.date).getFullYear() }
      </td>
      <td className="max-50">
        { event.name }
      </td>
      <td className="max-50">
        { event.artist }
      </td>
      <td className="max-50">
        ${ event.price }
      </td>
      <td className="max-50">
        <button type="button" className="btn btn-primary btn-primary-themed btn-md font-upper" onClick={() => CartStore.dispatch({ type: "add", payload: event})}>Add to
              Cart</button>
      </td>
    </tr>
  );
}