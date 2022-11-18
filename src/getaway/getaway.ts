const baseUrl =
  'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export const getJobsList = () => {
  return fetch(`${baseUrl}`).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Proccess server errors.');
    }
  });
};
