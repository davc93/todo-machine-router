import React from "react";
import { TodoIcon } from "./";

export const EditIcon = ({onEdit}) => {
  return (
    <TodoIcon
        type="edit"
        onClick={onEdit}
    />
  )
}
