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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Q0FDaEU7QUFFRCxNQUFNQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1HLE9BQU8sR0FBRyxFQUFFO0FBRWxCLElBQUlDLE1BQU07QUFDVixJQUFJQyxhQUFhO0FBRWpCLElBQUksQ0FBQ1AsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0NBQzVEO0FBRUQsSUFBSUgsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkgsTUFBTSxHQUFHLElBQUlQLGdEQUFXLENBQUNLLEdBQUcsRUFBRUMsT0FBTyxDQUFDLENBQUM7UUFDdkNHLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdILE1BQU0sQ0FBQ0ksT0FBTyxFQUFFLENBQUM7S0FDL0M7SUFDREgsYUFBYSxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0NBQzVDLE1BQU0sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVGLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U7XG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsXCIpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/mongodb.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/mongodb */ \"./lib/mongodb.ts\");\n\n\n\n\nconst IndexPage = ({ user , ud  })=>{\n    const { 0: questionData , 1: setQuestionData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const fetchData = async (type)=>{\n        const req = await fetch(`/api/type?type=${type}`);\n        const newData = await req.json();\n        console.log({\n            newData\n        });\n        setQuestionData(newData);\n    };\n    const handleClick = (e, type)=>{\n        e.preventDefault();\n        fetchData(type);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex bg-skin-app-fill flex-col h-[calc(100vh-3.5rem)] overflow-y-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:flex lg:flex-wrap g-0\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-2/5 px-4 md:px-0 my-2 items-center justify-between flex flex-col\",\n                    children: ud.map((type, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleClick(e, type),\n                            children: type\n                        }, index, false, {\n                            fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-2/5 px-4 md:px-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: questionData.length > 0 && questionData.map((question, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: question.question\n                                        }, void 0, false, {\n                                            fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            autoComplete: \"off\",\n                                            required: true,\n                                            className: \"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none\",\n                                            placeholder: question.question\n                                        }, void 0, false, {\n                                            fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/surya/Projects/final/ACPUB_V2.0/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                permanent: false,\n                destination: \"/auth/signin\"\n            },\n            props: {}\n        };\n    }\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        const db = await client.db(\"ACPUB\");\n        const ud = await db.collection(\"types\").find().toArray();\n        return {\n            props: {\n                user: session.user,\n                ud: ud.map((x)=>x.type)\n            }\n        };\n    } catch (err) {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLE9BQU8sRUFBRTtRQUN4RCxPQUFPO1lBQ0xMLEtBQUssRUFBRTtnQkFDTHBDLElBQUksRUFBRWdDLE9BQU8sQ0FBQ2hDLElBQUk7Z0JBQ2xCQyxFQUFFLEVBQUVBLEVBQUUsQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDd0IsQ0FBQyxHQUFLQSxDQUFDLENBQUNyQyxJQUFJLENBQUM7YUFDMUI7U0FDRixDQUFDO0tBQ0gsQ0FBQyxPQUFPc0MsR0FBRyxFQUFFLEVBQUU7Q0FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi9saWIvbW9uZ29kYlwiO1xuY29uc3QgSW5kZXhQYWdlID0gKHsgdXNlciwgdWQgfSkgPT4ge1xuICBjb25zdCBbcXVlc3Rpb25EYXRhLCBzZXRRdWVzdGlvbkRhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAodHlwZSkgPT4ge1xuICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGAvYXBpL3R5cGU/dHlwZT0ke3R5cGV9YCk7XG4gICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coeyBuZXdEYXRhIH0pO1xuICAgIHNldFF1ZXN0aW9uRGF0YShuZXdEYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCB0eXBlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoRGF0YSh0eXBlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGJnLXNraW4tYXBwLWZpbGxcbiAgICAgZmxleC1jb2wgaC1bY2FsYygxMDB2aC0zLjVyZW0pXSBvdmVyZmxvdy15LWF1dG9cIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleCBsZzpmbGV4LXdyYXAgZy0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzUgcHgtNCBtZDpweC0wIG15LTIgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAge3VkLm1hcCgodHlwZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIHR5cGUpfT5cbiAgICAgICAgICAgICAge3R5cGV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzUgcHgtNCBtZDpweC0wXCI+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICB7cXVlc3Rpb25EYXRhLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgcXVlc3Rpb25EYXRhLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+e3F1ZXN0aW9uLnF1ZXN0aW9ufTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmxvY2sgdy1mdWxsIHB4LTMgcHktMS41IHRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGJnLXdoaXRlIGJnLWNsaXAtcGFkZGluZyBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgbS0wIGZvY3VzOnRleHQtZ3JheS03MDAgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtxdWVzdGlvbi5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2F1dGgvc2lnbmluXCIsXG4gICAgICB9LFxuICAgICAgcHJvcHM6IHt9LFxuICAgIH07XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiID0gYXdhaXQgY2xpZW50LmRiKFwiQUNQVUJcIik7XG4gICAgY29uc3QgdWQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidHlwZXNcIikuZmluZCgpLnRvQXJyYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLFxuICAgICAgICB1ZDogdWQubWFwKCh4KSA9PiB4LnR5cGUpLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnIpIHt9XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInVzZVN0YXRlIiwiY2xpZW50UHJvbWlzZSIsIkluZGV4UGFnZSIsInVzZXIiLCJ1ZCIsInF1ZXN0aW9uRGF0YSIsInNldFF1ZXN0aW9uRGF0YSIsImZldGNoRGF0YSIsInR5cGUiLCJyZXEiLCJmZXRjaCIsIm5ld0RhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJsZW5ndGgiLCJxdWVzdGlvbiIsImxhYmVsIiwiaW5wdXQiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJyZWRpcmVjdCIsInBlcm1hbmVudCIsImRlc3RpbmF0aW9uIiwicHJvcHMiLCJjbGllbnQiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsIngiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();