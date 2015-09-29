
module.exports = function () {
  var config = {
    ts: {
      files: [
       "app/**/*.ts",
       "scripts/typings/**/*.ts"
      ],
      options: {
        noImplicitAny: false,
        module: "amd"
      },
      dest: "app"
    }
  };
  return config;
};