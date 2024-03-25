
// promise is invoked and resolved  or also we took an catch for the error
// Promise.resolve() to handle both synchronous and asynchronous requestHandler functions.
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler()).catch((err) => next(err))
    }
}


export { asyncHandler }


// hoc receives functions as a parameter or also return functions as a parameter

// wrapper function
// ek function liya or usko further another function mai pass kiya

// this was the try catch function
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message : error.message
//         })
//     }
// }