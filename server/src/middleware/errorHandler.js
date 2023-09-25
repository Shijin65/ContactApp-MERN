const {constants} = require("../constance")
const errorHandler = (err, req, res, next) => {
  const statucode = res.statucode ? req.statucode : 500;
  switch (statucode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION_ERROR",
        message: err.message,
        stacktrace: err.stackt,
      });


    case constants.UNAUTHORIZED:
      res.json({
        title: "AUTHORIZATION FAILED",
        message: err.message,
        stacktrace: err.stackt,
      });

     

      case constants.FORBITTEN:
      res.json({
        title: "forbitten",
        message: err.message,
        stacktrace: err.stackt,
      });

      break;
      case constants.NOT_FOUND:
        res.json({
            title: "SOME THING WENT WRONG",
            message: err.message,
            stacktrace: err.stackt,
        });

        case constants.SERVER_ERRROR:
        res.json({
            title: "BAD REQUEST",
            message: err.message,
            stacktrace: err.stackt,
        });


        break;
    default:
      break;
  }
  
};
module.exports = errorHandler;
