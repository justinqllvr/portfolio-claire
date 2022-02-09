module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cff4cbae0403faaa094fa3dd0a053f00'),
  },
});
