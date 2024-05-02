export const getProperties = (component) => {
  var properties = {};
  var cpjson = {};
  var hpjson = {};

  if (component.CPJSON) cpjson = JSON.parse(component.CPJSON);

  if (component.HPJSON) hpjson = JSON.parse(component.HPJSON);

  properties = { ...cpjson, ...hpjson };
  return properties;
};
