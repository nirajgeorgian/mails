import cors from 'cors';

const corsOptions = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTION',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
  allowHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

const corsApp = () => cors(corsOptions)
export default corsApp
