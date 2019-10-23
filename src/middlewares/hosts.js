import hostValidation from 'host-validation';

const hosts = [
  'localhost:3030',
  '127.0.0.1:3030',
  'stayology.com',
  /(.*\.)?stayology.com/gi,
];
const hostConfig = () => {
  return hostValidation({
    hosts,
  })
};

export default hostConfig;
