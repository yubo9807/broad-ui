
const NODE_ENV = process.env.NODE_ENV as 'development' | 'production';

export default Object.freeze({

  BASE_URL: '/broad-ui',

  NODE_ENV,

  PROJECT_NAME: 'Broad-UI',

  CLASS_PREFIX: 'br-',

})
