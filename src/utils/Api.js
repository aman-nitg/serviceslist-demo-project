const headers = {
  'Accept': 'application/json'
};

export const getSp = () => (
  fetch('https://s3-ap-southeast-1.amazonaws.com/letsventure/public/service_provider/service_providers.json', headers)
    .then(res => res.json())
);
