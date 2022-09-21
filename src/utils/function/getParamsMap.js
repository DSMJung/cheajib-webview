const getParamsMap = (queryString) => {
  let splited = queryString.replace("?", "").split(/[=?&]/);
  let params = {};
  for (let i = 0; i < splited.length; i++) {
    params[splited[i]] = splited[++i];
  }
  return params;
};

export default getParamsMap;
