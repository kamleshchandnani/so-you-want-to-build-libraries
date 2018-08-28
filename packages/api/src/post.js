import fetch from './fetch';

const post = async (url, data) => {
  console.log('[POST]', data);
  const response = await fetch('POST', 'http://posturl', data);
  return response;
};

export default post;
