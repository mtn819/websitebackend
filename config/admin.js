module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4d3d70de921f63c92e6ec0f7d1b69b9'),
  },
});
