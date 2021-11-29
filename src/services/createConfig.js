export default function createConfig(token) {
  const config = {
      headers: {
          "Authorization": "Bearer " + token
      }
  };
  return config;
}
