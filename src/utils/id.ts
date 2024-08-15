import { uniqueId } from "lodash";

const getUniqueId = (prefix = "") => {
  return `${prefix}${uniqueId()}`;
};

export { getUniqueId };
