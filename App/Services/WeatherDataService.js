import apisauce from 'apisauce'
import appSettings from './../Config/AppSettings'

const { baseUrl, appId } = appSettings.API.weatherService;

const create = (baseURL = baseUrl) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  api.addRequestTransform(request => {
    request.params['APPID'] = appId
  });

  const getCityById = (id) => api.get('weather', {id: id, units: 'metric'});

  return {
    getCityById
  }
};

export default {
  create
}
