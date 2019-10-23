import rateLimit from 'express-rate-limit';

const limiter = () => rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
});

export default limiter;
