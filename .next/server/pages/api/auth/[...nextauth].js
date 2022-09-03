"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Q0FDaEU7QUFFRCxNQUFNQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1HLE9BQU8sR0FBRyxFQUFFO0FBRWxCLElBQUlDLE1BQU07QUFDVixJQUFJQyxhQUFhO0FBRWpCLElBQUksQ0FBQ1AsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0NBQzVEO0FBRUQsSUFBSUgsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkgsTUFBTSxHQUFHLElBQUlQLGdEQUFXLENBQUNLLEdBQUcsRUFBRUMsT0FBTyxDQUFDLENBQUM7UUFDdkNHLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdILE1BQU0sQ0FBQ0ksT0FBTyxFQUFFLENBQUM7S0FDL0M7SUFDREgsYUFBYSxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0NBQzVDLE1BQU0sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVGLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U7XG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsXCIpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        async signIn ({ user , account , profile , email , credentials  }) {\n            return _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"].then(async (client)=>{\n                let return_value = true;\n                try {\n                    const db = await client.db(\"ACPUB\");\n                    const ud = await db.collection(\"profiles\").find({\n                        email: user.email\n                    }).toArray();\n                    return_value = ud.length > 0;\n                } catch (err) {\n                    return_value = false;\n                }\n                return return_value;\n            });\n        },\n        async session ({ session , user  }) {\n            return _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"].then(async (client)=>{\n                try {\n                    const db = await client.db(\"ACPUB\");\n                    const ud = await db.collection(\"profiles\").find({\n                        email: user.email\n                    }).toArray();\n                    session.user = {\n                        ...session.user,\n                        ...ud[0]\n                    };\n                } catch (err) {\n                    return Promise.reject(session);\n                }\n                return Promise.resolve(session);\n            });\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ0k7QUFDWDtBQUVqRCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QkksU0FBUyxFQUFFO1FBQ1RILGlFQUFjLENBQUM7WUFDYkksUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7U0FDL0MsQ0FBQztLQUNIO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxNQUFNLEVBQUUsY0FBYztLQUN2QjtJQUNEQyxPQUFPLEVBQUVYLDBFQUFjLENBQUNDLG9EQUFhLENBQUM7SUFDdENXLFNBQVMsRUFBRTtRQUNULE1BQU1GLE1BQU0sRUFBQyxFQUFFRyxJQUFJLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLFdBQVcsR0FBRSxFQUFFO1lBQzNELE9BQU9oQix5REFBa0IsQ0FBQyxPQUFPa0IsTUFBTSxHQUFLO2dCQUMxQyxJQUFJQyxZQUFZLEdBQUcsSUFBSTtnQkFDdkIsSUFBSTtvQkFDRixNQUFNQyxFQUFFLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNuQyxNQUFNQyxFQUFFLEdBQUcsTUFBTUQsRUFBRSxDQUNoQkUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUN0QkMsSUFBSSxDQUFDO3dCQUFFUixLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FBSztxQkFBRSxDQUFDLENBQzNCUyxPQUFPLEVBQUU7b0JBQ1pMLFlBQVksR0FBR0UsRUFBRSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUM5QixDQUFDLE9BQU9DLEdBQUcsRUFBRTtvQkFDWlAsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBT0EsWUFBWSxDQUFDO2FBQ3JCLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTVEsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRWYsSUFBSSxHQUFFLEVBQUU7WUFDL0IsT0FBT1oseURBQWtCLENBQUMsT0FBT2tCLE1BQU0sR0FBSztnQkFDMUMsSUFBSTtvQkFDRixNQUFNRSxFQUFFLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNuQyxNQUFNQyxFQUFFLEdBQUcsTUFBTUQsRUFBRSxDQUNoQkUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUN0QkMsSUFBSSxDQUFDO3dCQUFFUixLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FBSztxQkFBRSxDQUFDLENBQzNCUyxPQUFPLEVBQUU7b0JBQ1pHLE9BQU8sQ0FBQ2YsSUFBSSxHQUFHO3dCQUFFLEdBQUdlLE9BQU8sQ0FBQ2YsSUFBSTt3QkFBRSxHQUFHUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUFFLENBQUM7aUJBQzlDLENBQUMsT0FBT0ssR0FBRyxFQUFFO29CQUNaLE9BQU9FLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUMsQ0FBQztpQkFDaEM7Z0JBRUQsT0FBT0MsT0FBTyxDQUFDRSxPQUFPLENBQUNILE9BQU8sQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxuICB9LFxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzIH0pIHtcbiAgICAgIHJldHVybiBjbGllbnRQcm9taXNlLnRoZW4oYXN5bmMgKGNsaWVudCkgPT4ge1xuICAgICAgICBsZXQgcmV0dXJuX3ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBkYiA9IGF3YWl0IGNsaWVudC5kYihcIkFDUFVCXCIpO1xuICAgICAgICAgIGNvbnN0IHVkID0gYXdhaXQgZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwicHJvZmlsZXNcIilcbiAgICAgICAgICAgIC5maW5kKHsgZW1haWw6IHVzZXIuZW1haWwgfSlcbiAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgICAgcmV0dXJuX3ZhbHVlID0gdWQubGVuZ3RoID4gMDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuX3ZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybl92YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHVzZXIgfSkge1xuICAgICAgcmV0dXJuIGNsaWVudFByb21pc2UudGhlbihhc3luYyAoY2xpZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBjbGllbnQuZGIoXCJBQ1BVQlwiKTtcbiAgICAgICAgICBjb25zdCB1ZCA9IGF3YWl0IGRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInByb2ZpbGVzXCIpXG4gICAgICAgICAgICAuZmluZCh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pXG4gICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICAgIHNlc3Npb24udXNlciA9IHsgLi4uc2Vzc2lvbi51c2VyLCAuLi51ZFswXSB9O1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2Vzc2lvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlc3Npb24pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJNb25nb0RCQWRhcHRlciIsImNsaWVudFByb21pc2UiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsImFkYXB0ZXIiLCJjYWxsYmFja3MiLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsImNyZWRlbnRpYWxzIiwidGhlbiIsImNsaWVudCIsInJldHVybl92YWx1ZSIsImRiIiwidWQiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJsZW5ndGgiLCJlcnIiLCJzZXNzaW9uIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();