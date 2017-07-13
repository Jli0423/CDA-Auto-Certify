var env = process.env.NODE_ENV || 'development';

if (env === 'development'){
  process.env.PORT= 3000;
  process.env.MONGODB_URI= 'mongodb://jli0423:Justin_199898li@ds064299.mlab.com:64299/heroku';
}else if (env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI= 'mongodb://jli0423:Justin_199898li@ds064299.mlab.com:64299/heroku';
}
