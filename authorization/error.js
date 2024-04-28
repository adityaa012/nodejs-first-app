// const errormiddleware =  (err , req, res, next) => {

//     err.message = err.message || "page is not found";
//     err.statuscode = err.statuscode || 500; 

//     res.status(200).json({
//         success : "false",
//         message: err.message
//     })

    
// }

// module.exports = errormiddleware


const errormiddleware = (err, req, res, next) => {
    err.message = err.message || "Page is not found";
    err.statuscode = err.statuscode || 500; 

    res.status(err.statuscode).json({
        success: false,
        message: err.message
    });
};

module.exports = errormiddleware;
