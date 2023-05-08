import axios from './axios-instance';

const getHeaders = async headers => {
  const bearertoken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk';
  const defaultHeaders = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${bearertoken}`,
  };
  return {...defaultHeaders, ...headers};
};
const getMemberDetails = async (id, headers = {}) => {
  try {
    return axios.get(`/application/member_details?id=${id}`, {
      headers: await getHeaders(headers),
    });
  } catch (err) {
    throw err.response;
  }
};

export default {
  getMemberDetails,
};
