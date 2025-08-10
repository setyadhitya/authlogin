"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(middleware)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst JWT_SECRET = 'rahasia_super_aman';\nfunction middleware(req) {\n    const token = req.cookies.get('token')?.value;\n    if (!token) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL('/login', req.url));\n    }\n    try {\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, JWT_SECRET);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL('/login', req.url));\n    }\n}\nconst config = {\n    matcher: [\n        '/dashboard/:path*'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNaO0FBRS9CLE1BQU1FLGFBQWE7QUFFWixTQUFTQyxXQUFXQyxHQUFHO0lBQzVCLE1BQU1DLFFBQVFELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDO0lBRXhDLElBQUksQ0FBQ0gsT0FBTztRQUNWLE9BQU9MLHFEQUFZQSxDQUFDUyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVTixJQUFJTyxHQUFHO0lBQ3hEO0lBRUEsSUFBSTtRQUNGViwwREFBVSxDQUFDSSxPQUFPSDtRQUNsQixPQUFPRixxREFBWUEsQ0FBQ2EsSUFBSTtJQUMxQixFQUFFLE9BQU07UUFDTixPQUFPYixxREFBWUEsQ0FBQ1MsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVU4sSUFBSU8sR0FBRztJQUN4RDtBQUNGO0FBRU8sTUFBTUcsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQW9CO0FBQ2hDLEVBQUUiLCJzb3VyY2VzIjpbIkQ6XFxLb21wZXRlbnNpXFxuZXh0XFxhdXRobG9naW5cXG1pZGRsZXdhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gJ3JhaGFzaWFfc3VwZXJfYW1hbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcclxuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWU7XHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxLnVybCkpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcS51cmwpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvZGFzaGJvYXJkLzpwYXRoKiddLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiand0IiwiSldUX1NFQ1JFVCIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwidmVyaWZ5IiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});