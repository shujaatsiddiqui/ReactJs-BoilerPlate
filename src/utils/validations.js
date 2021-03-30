// Cheap mechanism to check for JSON String
const jsonRegex = /{(.*?)}/;

export function isJSONString(value) {
  return jsonRegex.test(value);
}

export const passwordRegex = /^(?=^.{8,12}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W])(?!.*\s).*$/;
