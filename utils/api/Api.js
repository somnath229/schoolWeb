import axios from "axios";
import moment from "moment/moment";
const project = "";
const url = process.env.NEXT_PUBLIC_API_BASE_URL;
const lead_source = "Website";
const getCommonHeaders = () => {
  let headers = {};
  headers["X_TIMESTAMP"] = Math.round(new Date() / 1000);
  headers["X_FEATURES"] = "unknown";
  headers["X_APPID"] = "1";
  headers["X_APPVERSION"] = "1.0.0";
  headers["X_DEVICEID"] = "1";
  headers["X_DEVICEOS"] = "web"; 
  headers["X_APIKEY"] = "";
  return headers;
};
const normalFieldList = ["name", "phone", "email", "city"];
const modifyPayloadData = (data) => {
  let normalList = {};
  let customList = {};
  Object.keys(data).map((item) => {
    if (normalFieldList.includes(item)) {
      normalList[item] = data[item];
    } else {
      customList[item] = data[item];
    }
  });
  return { normalList, customList };
};
const submitFormApi = (data) => {
  let lead_created_at = null;
  lead_created_at = moment().format("YYYY-MM-DD");
  let modifiedData = modifyPayloadData(data);
  return axios({
    method: "post",
    url: `${url}external/projects/${project}/leads`,
    headers: getCommonHeaders(),
    data: {
      ...modifiedData.normalList,
      custom_params: modifiedData.customList,
      lead_created_at: lead_created_at,
      lead_source: lead_source,
    },
  });
};

export { submitFormApi };