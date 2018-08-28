import data from './dataItems';

const fetch = (method, url, body) => {
  if (method === 'GET') {
    return data;
  }
  if (method === 'POST') {
    return ({ code: 200, message: 'Data posted successfully', body });
  }
  return 0;
};
export default fetch;
