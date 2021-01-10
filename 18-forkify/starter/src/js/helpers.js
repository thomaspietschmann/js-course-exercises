import { TIMEOUT_SEC } from './config.js';

// contains functions that are being reused over all the project

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]); // race: whatever function finishes first!
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data; // resolved value of promise
  } catch (err) {
    throw err; // Promise will be REJECT, error can be handled in next function
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]); // race: whatever function finishes first!
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data; // resolved value of promise
  } catch (err) {
    throw err; // Promise will be REJECT, error can be handled in next function
  }
};
