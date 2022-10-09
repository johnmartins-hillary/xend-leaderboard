import axios from "axios";
import moment from "moment";

const timestamp = moment().valueOf().toString();

export const getLocation = () => ({
  longitude: 0,
  latitude: 0,
});

export const getTopReferalls = async (month, defaultLimit) => {
  const params = {
    month,
    defaultLimit,
  };
  Object.keys(params)?.forEach((key) => {
    if (params[key] === null) {
      delete params[key];
    }
  });
  const res = await axios.get(
    "https://apiprostaging.xend.finance/api/data/monthly/top/referalls",
    {
      params,
      headers: {
        ...getLocation(),
        authorization: `Basic parole`,
        timestamp,
      },
    }
  );
  return res?.data;
};

export const getTopSavers = async (
  month,
  currencyId,
  startDate,
  endDate,
  limitNumber
) => {
  const params = { month, currencyId, startDate, endDate, limitNumber };
  Object.keys(params)?.forEach((key) => {
    if (params[key] === null) {
      delete params[key];
    }
  });
  const res = await axios.get("https://apiprostagin.xend.finance/ap/topsaver", {
    params,
    headers: {
      ...getLocation(),
      authorization: `Basic parole`,
      timestamp,
    },
  });
  return res?.data;
};
