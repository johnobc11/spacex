import axios from 'axios';

// Change below function to API call
export const GetLaunchesAPI = async () => {
  let url = 'https://api.spacexdata.com/v3/launches/'
  return await axios.get(url)
};
