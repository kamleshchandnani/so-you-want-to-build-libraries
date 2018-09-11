import fetch from './fetch';

const get = async (url) => {
  console.log('[GET]', url);
  const response = await fetch('GET', 'http://geturl', url);
  return response;
};

export default get;
