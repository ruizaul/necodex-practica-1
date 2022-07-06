import React from "react";
import { classNames } from "../helpers/Utils";

export const TableStatusPills = ({ value }) => {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "px-5 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("activo") ? "bg-green-700 text-white" : null,
        status.startsWith("inactivo") ? "bg-yellow-700 text-white" : null
      )}
    >
      {status}
    </span>
  );
};
