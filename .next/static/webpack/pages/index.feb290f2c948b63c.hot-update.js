"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_statements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/statements */ \"./data/statements.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction getRandomSets(correct, incorrect) {\n    const shuffledCorrect = [\n        ...correct\n    ].sort(()=>0.5 - Math.random());\n    const shuffledIncorrect = [\n        ...incorrect\n    ].sort(()=>0.5 - Math.random());\n    const sets = [];\n    for(let i = 0; i < 3; i++){\n        const twoCorrect = shuffledCorrect.slice(i * 2, i * 2 + 2);\n        const oneIncorrect = shuffledIncorrect[i];\n        const combined = [\n            ...twoCorrect,\n            oneIncorrect\n        ].sort(()=>0.5 - Math.random());\n        sets.push(combined);\n    }\n    return sets;\n}\nfunction QuizCarousel() {\n    _s();\n    const [quizSets, setQuizSets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // { setIndex: chosenStatement }\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const sets = getRandomSets(_data_statements__WEBPACK_IMPORTED_MODULE_2__.correctStatements, _data_statements__WEBPACK_IMPORTED_MODULE_2__.incorrectStatements);\n        setQuizSets(sets);\n    }, []);\n    const sliderSettings = {\n        dots: false,\n        arrows: false,\n        infinite: false,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        swipe: false,\n        beforeChange: (oldIndex, newIndex)=>setCurrentSlide(newIndex)\n    };\n    const handleChange = (setIndex, statement)=>{\n        setAnswers((prev)=>({\n                ...prev,\n                [setIndex]: statement\n            }));\n    };\n    const handleNext = ()=>{\n        if (answers[currentSlide]) {\n            sliderRef.current.slickNext();\n        }\n    };\n    const handlePrev = ()=>{\n        sliderRef.current.slickPrev();\n    };\n    const handleDone = ()=>{\n        if (answers[currentSlide]) {\n            let newScore = 0;\n            quizSets.forEach((set, index)=>{\n                const userChoice = answers[index];\n                if (userChoice && _data_statements__WEBPACK_IMPORTED_MODULE_2__.incorrectStatements.includes(userChoice)) {\n                    newScore++;\n                }\n            });\n            setScore(newScore);\n        }\n    };\n    const resetQuiz = ()=>{\n        const newSets = getRandomSets(_data_statements__WEBPACK_IMPORTED_MODULE_2__.correctStatements, _data_statements__WEBPACK_IMPORTED_MODULE_2__.incorrectStatements);\n        setQuizSets(newSets);\n        setAnswers({});\n        setScore(null);\n        setCurrentSlide(0);\n        sliderRef.current.slickGoTo(0);\n    };\n    const getStatementClass = (statement, setIndex)=>{\n        if (score === null) return (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().defaultOption);\n        const userChoice = answers[setIndex];\n        const isIncorrectStmt = _data_statements__WEBPACK_IMPORTED_MODULE_2__.incorrectStatements.includes(statement);\n        const isChosen = userChoice === statement;\n        if (isChosen && isIncorrectStmt) {\n            return (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().correctChoice);\n        }\n        if (isChosen && !isIncorrectStmt) {\n            return (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrongChoice);\n        }\n        if (!isChosen && isIncorrectStmt) {\n            return (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().correctChoice);\n        }\n        return (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().defaultOption);\n    };\n    if (quizSets.length === 0) return null;\n    const totalSets = quizSets.length;\n    const isLastSlide = currentSlide === totalSets - 1;\n    const userHasAnsweredCurrent = !!answers[currentSlide];\n    // Create the slides for answering\n    const quizSlides = quizSets.map((set, setIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        \"Set \",\n                        setIndex + 1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                    lineNumber: 110,\n                    columnNumber: 7\n                }, this),\n                set.map((statement, stmtIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().radioOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: getStatementClass(statement, setIndex),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    name: \"set-\".concat(setIndex),\n                                    value: statement,\n                                    checked: answers[setIndex] === statement,\n                                    onChange: ()=>handleChange(setIndex, statement),\n                                    disabled: score !== null,\n                                    style: {\n                                        marginRight: 8\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this),\n                                statement\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this)\n                    }, stmtIndex, false, {\n                        fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this))\n            ]\n        }, setIndex, true, {\n            fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n            lineNumber: 109,\n            columnNumber: 5\n        }, this));\n    // Quiz in-progress (slide-based) view\n    const quizInProgress = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                ref: sliderRef,\n                ...sliderSettings,\n                children: quizSlides\n            }, void 0, false, {\n                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrev,\n                        disabled: currentSlide === 0,\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, this),\n                    !isLastSlide ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNext,\n                        disabled: !userHasAnsweredCurrent,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleDone,\n                        disabled: !userHasAnsweredCurrent,\n                        children: \"Done\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    // Final results view (show all sets at once)\n    const finalResults = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().resultContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your score: \",\n                    score,\n                    \" / \",\n                    totalSets\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Below are all the sets with correct/incorrect highlights:\"\n            }, void 0, false, {\n                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this),\n            quizSets.map((set, setIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginBottom: \"1rem\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \"Set \",\n                                setIndex + 1\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                            lineNumber: 165,\n                            columnNumber: 11\n                        }, this),\n                        set.map((statement, stmtIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().radioOption),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: getStatementClass(statement, setIndex),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"radio\",\n                                            name: \"results-set-\".concat(setIndex),\n                                            checked: answers[setIndex] === statement,\n                                            readOnly: true,\n                                            style: {\n                                                marginRight: 8\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                                            lineNumber: 169,\n                                            columnNumber: 17\n                                        }, this),\n                                        statement\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                                    lineNumber: 168,\n                                    columnNumber: 15\n                                }, this)\n                            }, stmtIndex, false, {\n                                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                                lineNumber: 167,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, setIndex, true, {\n                    fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                    lineNumber: 164,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: resetQuiz,\n                style: {\n                    marginTop: 20\n                },\n                children: \"Try Again\"\n            }, void 0, false, {\n                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n        lineNumber: 157,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_4___default().quizContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Health Quiz\"\n            }, void 0, false, {\n                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Identify the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"incorrect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                        lineNumber: 194,\n                        columnNumber: 22\n                    }, this),\n                    \" statement in each set.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n                lineNumber: 193,\n                columnNumber: 7\n            }, this),\n            score === null ? quizInProgress : finalResults\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nidhi/healthquiz/components/Quiz.js\",\n        lineNumber: 190,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizCarousel, \"u7xGsV/ZlWs2rtdPOrjtmUDBAzM=\");\n_c = QuizCarousel;\nvar _c;\n$RefreshReg$(_c, \"QuizCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO29CQUFFWSxXQUFXO2dCQUFHOzBCQUFHOzs7Ozs7Ozs7Ozs7SUFNMUQscUJBQ0UsOERBQUN6QjtRQUFJRyxXQUFXdkUsOEVBQW9COzswQkFFbEMsOERBQUMrRjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDTDs7b0JBQUU7a0NBQ1ksOERBQUNNO2tDQUFPOzs7Ozs7b0JBQWtCOzs7Ozs7O1lBR3hDM0UsVUFBVSxPQUFPOEQsaUJBQWlCSzs7Ozs7OztBQUd6QztHQXBMd0J4RTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1aXouanM/NGFlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb3JyZWN0U3RhdGVtZW50cywgaW5jb3JyZWN0U3RhdGVtZW50cyB9IGZyb20gXCIuLi9kYXRhL3N0YXRlbWVudHNcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUXVpei5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbVNldHMoY29ycmVjdCwgaW5jb3JyZWN0KSB7XG4gIGNvbnN0IHNodWZmbGVkQ29ycmVjdCA9IFsuLi5jb3JyZWN0XS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuICBjb25zdCBzaHVmZmxlZEluY29ycmVjdCA9IFsuLi5pbmNvcnJlY3RdLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XG5cbiAgY29uc3Qgc2V0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IHR3b0NvcnJlY3QgPSBzaHVmZmxlZENvcnJlY3Quc2xpY2UoaSAqIDIsIGkgKiAyICsgMik7XG4gICAgY29uc3Qgb25lSW5jb3JyZWN0ID0gc2h1ZmZsZWRJbmNvcnJlY3RbaV07XG4gICAgY29uc3QgY29tYmluZWQgPSBbLi4udHdvQ29ycmVjdCwgb25lSW5jb3JyZWN0XS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuICAgIHNldHMucHVzaChjb21iaW5lZCk7XG4gIH1cbiAgcmV0dXJuIHNldHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpDYXJvdXNlbCgpIHtcbiAgY29uc3QgW3F1aXpTZXRzLCBzZXRRdWl6U2V0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKHt9KTsgLy8geyBzZXRJbmRleDogY2hvc2VuU3RhdGVtZW50IH1cbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzbGlkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZXRzID0gZ2V0UmFuZG9tU2V0cyhjb3JyZWN0U3RhdGVtZW50cywgaW5jb3JyZWN0U3RhdGVtZW50cyk7XG4gICAgc2V0UXVpelNldHMoc2V0cyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzbGlkZXJTZXR0aW5ncyA9IHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzd2lwZTogZmFsc2UsXG4gICAgYmVmb3JlQ2hhbmdlOiAob2xkSW5kZXgsIG5ld0luZGV4KSA9PiBzZXRDdXJyZW50U2xpZGUobmV3SW5kZXgpXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNldEluZGV4LCBzdGF0ZW1lbnQpID0+IHtcbiAgICBzZXRBbnN3ZXJzKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtzZXRJbmRleF06IHN0YXRlbWVudFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGlmIChhbnN3ZXJzW2N1cnJlbnRTbGlkZV0pIHtcbiAgICAgIHNsaWRlclJlZi5jdXJyZW50LnNsaWNrTmV4dCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgIHNsaWRlclJlZi5jdXJyZW50LnNsaWNrUHJldigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvbmUgPSAoKSA9PiB7XG4gICAgaWYgKGFuc3dlcnNbY3VycmVudFNsaWRlXSkge1xuICAgICAgbGV0IG5ld1Njb3JlID0gMDtcbiAgICAgIHF1aXpTZXRzLmZvckVhY2goKHNldCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckNob2ljZSA9IGFuc3dlcnNbaW5kZXhdO1xuICAgICAgICBpZiAodXNlckNob2ljZSAmJiBpbmNvcnJlY3RTdGF0ZW1lbnRzLmluY2x1ZGVzKHVzZXJDaG9pY2UpKSB7XG4gICAgICAgICAgbmV3U2NvcmUrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRTY29yZShuZXdTY29yZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0UXVpeiA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdTZXRzID0gZ2V0UmFuZG9tU2V0cyhjb3JyZWN0U3RhdGVtZW50cywgaW5jb3JyZWN0U3RhdGVtZW50cyk7XG4gICAgc2V0UXVpelNldHMobmV3U2V0cyk7XG4gICAgc2V0QW5zd2Vycyh7fSk7XG4gICAgc2V0U2NvcmUobnVsbCk7XG4gICAgc2V0Q3VycmVudFNsaWRlKDApO1xuICAgIHNsaWRlclJlZi5jdXJyZW50LnNsaWNrR29UbygwKTtcbiAgfTtcblxuICBjb25zdCBnZXRTdGF0ZW1lbnRDbGFzcyA9IChzdGF0ZW1lbnQsIHNldEluZGV4KSA9PiB7XG4gICAgaWYgKHNjb3JlID09PSBudWxsKSByZXR1cm4gc3R5bGVzLmRlZmF1bHRPcHRpb247XG5cbiAgICBjb25zdCB1c2VyQ2hvaWNlID0gYW5zd2Vyc1tzZXRJbmRleF07XG4gICAgY29uc3QgaXNJbmNvcnJlY3RTdG10ID0gaW5jb3JyZWN0U3RhdGVtZW50cy5pbmNsdWRlcyhzdGF0ZW1lbnQpO1xuICAgIGNvbnN0IGlzQ2hvc2VuID0gdXNlckNob2ljZSA9PT0gc3RhdGVtZW50O1xuXG4gICAgaWYgKGlzQ2hvc2VuICYmIGlzSW5jb3JyZWN0U3RtdCkge1xuICAgICAgcmV0dXJuIHN0eWxlcy5jb3JyZWN0Q2hvaWNlO1xuICAgIH1cbiAgICBpZiAoaXNDaG9zZW4gJiYgIWlzSW5jb3JyZWN0U3RtdCkge1xuICAgICAgcmV0dXJuIHN0eWxlcy53cm9uZ0Nob2ljZTtcbiAgICB9XG4gICAgaWYgKCFpc0Nob3NlbiAmJiBpc0luY29ycmVjdFN0bXQpIHtcbiAgICAgIHJldHVybiBzdHlsZXMuY29ycmVjdENob2ljZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcy5kZWZhdWx0T3B0aW9uO1xuICB9O1xuXG4gIGlmIChxdWl6U2V0cy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHRvdGFsU2V0cyA9IHF1aXpTZXRzLmxlbmd0aDtcbiAgY29uc3QgaXNMYXN0U2xpZGUgPSBjdXJyZW50U2xpZGUgPT09IHRvdGFsU2V0cyAtIDE7XG4gIGNvbnN0IHVzZXJIYXNBbnN3ZXJlZEN1cnJlbnQgPSAhIWFuc3dlcnNbY3VycmVudFNsaWRlXTtcblxuICAvLyBDcmVhdGUgdGhlIHNsaWRlcyBmb3IgYW5zd2VyaW5nXG4gIGNvbnN0IHF1aXpTbGlkZXMgPSBxdWl6U2V0cy5tYXAoKHNldCwgc2V0SW5kZXgpID0+IChcbiAgICA8ZGl2IGtleT17c2V0SW5kZXh9PlxuICAgICAgPGgzPlNldCB7c2V0SW5kZXggKyAxfTwvaDM+XG4gICAgICB7c2V0Lm1hcCgoc3RhdGVtZW50LCBzdG10SW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3N0bXRJbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucmFkaW9PcHRpb259PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2dldFN0YXRlbWVudENsYXNzKHN0YXRlbWVudCwgc2V0SW5kZXgpfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPXtgc2V0LSR7c2V0SW5kZXh9YH1cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlbWVudH1cbiAgICAgICAgICAgICAgY2hlY2tlZD17YW5zd2Vyc1tzZXRJbmRleF0gPT09IHN0YXRlbWVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShzZXRJbmRleCwgc3RhdGVtZW50KX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Njb3JlICE9PSBudWxsfVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogOCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtzdGF0ZW1lbnR9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgLy8gUXVpeiBpbi1wcm9ncmVzcyAoc2xpZGUtYmFzZWQpIHZpZXdcbiAgY29uc3QgcXVpekluUHJvZ3Jlc3MgPSAoXG4gICAgPD5cbiAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXJSZWZ9IHsuLi5zbGlkZXJTZXR0aW5nc30+XG4gICAgICAgIHtxdWl6U2xpZGVzfVxuICAgICAgPC9TbGlkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByZXZ9IGRpc2FibGVkPXtjdXJyZW50U2xpZGUgPT09IDB9PlxuICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHshaXNMYXN0U2xpZGUgPyAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fSBkaXNhYmxlZD17IXVzZXJIYXNBbnN3ZXJlZEN1cnJlbnR9PlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRG9uZX0gZGlzYWJsZWQ9eyF1c2VySGFzQW5zd2VyZWRDdXJyZW50fT5cbiAgICAgICAgICAgIERvbmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xuXG4gIC8vIEZpbmFsIHJlc3VsdHMgdmlldyAoc2hvdyBhbGwgc2V0cyBhdCBvbmNlKVxuICBjb25zdCBmaW5hbFJlc3VsdHMgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHRDb250YWluZXJ9PlxuICAgICAgPHA+XG4gICAgICAgIFlvdXIgc2NvcmU6IHtzY29yZX0gLyB7dG90YWxTZXRzfVxuICAgICAgPC9wPlxuICAgICAgPHA+QmVsb3cgYXJlIGFsbCB0aGUgc2V0cyB3aXRoIGNvcnJlY3QvaW5jb3JyZWN0IGhpZ2hsaWdodHM6PC9wPlxuXG4gICAgICB7cXVpelNldHMubWFwKChzZXQsIHNldEluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzZXRJbmRleH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICA8aDM+U2V0IHtzZXRJbmRleCArIDF9PC9oMz5cbiAgICAgICAgICB7c2V0Lm1hcCgoc3RhdGVtZW50LCBzdG10SW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtzdG10SW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnJhZGlvT3B0aW9ufT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Z2V0U3RhdGVtZW50Q2xhc3Moc3RhdGVtZW50LCBzZXRJbmRleCl9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2ByZXN1bHRzLXNldC0ke3NldEluZGV4fWB9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthbnN3ZXJzW3NldEluZGV4XSA9PT0gc3RhdGVtZW50fVxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4IH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7c3RhdGVtZW50fVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRRdWl6fSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICBUcnkgQWdhaW5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWl6Q29udGFpbmVyfT5cbiAgICAgIHsvKiBVcGRhdGVkIEhlYWRpbmcgYW5kIFN1YmhlYWRpbmcgKi99XG4gICAgICA8aDE+SGVhbHRoIFF1aXo8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIElkZW50aWZ5IHRoZSA8c3Ryb25nPmluY29ycmVjdDwvc3Ryb25nPiBzdGF0ZW1lbnQgaW4gZWFjaCBzZXQuXG4gICAgICA8L3A+XG5cbiAgICAgIHtzY29yZSA9PT0gbnVsbCA/IHF1aXpJblByb2dyZXNzIDogZmluYWxSZXN1bHRzfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiY29ycmVjdFN0YXRlbWVudHMiLCJpbmNvcnJlY3RTdGF0ZW1lbnRzIiwiU2xpZGVyIiwic3R5bGVzIiwiZ2V0UmFuZG9tU2V0cyIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJzaHVmZmxlZENvcnJlY3QiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNodWZmbGVkSW5jb3JyZWN0Iiwic2V0cyIsImkiLCJ0d29Db3JyZWN0Iiwic2xpY2UiLCJvbmVJbmNvcnJlY3QiLCJjb21iaW5lZCIsInB1c2giLCJRdWl6Q2Fyb3VzZWwiLCJxdWl6U2V0cyIsInNldFF1aXpTZXRzIiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJzY29yZSIsInNldFNjb3JlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVyUmVmIiwic2xpZGVyU2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3dpcGUiLCJiZWZvcmVDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiaGFuZGxlQ2hhbmdlIiwic2V0SW5kZXgiLCJzdGF0ZW1lbnQiLCJwcmV2IiwiaGFuZGxlTmV4dCIsImN1cnJlbnQiLCJzbGlja05leHQiLCJoYW5kbGVQcmV2Iiwic2xpY2tQcmV2IiwiaGFuZGxlRG9uZSIsIm5ld1Njb3JlIiwiZm9yRWFjaCIsInNldCIsImluZGV4IiwidXNlckNob2ljZSIsImluY2x1ZGVzIiwicmVzZXRRdWl6IiwibmV3U2V0cyIsInNsaWNrR29UbyIsImdldFN0YXRlbWVudENsYXNzIiwiZGVmYXVsdE9wdGlvbiIsImlzSW5jb3JyZWN0U3RtdCIsImlzQ2hvc2VuIiwiY29ycmVjdENob2ljZSIsIndyb25nQ2hvaWNlIiwibGVuZ3RoIiwidG90YWxTZXRzIiwiaXNMYXN0U2xpZGUiLCJ1c2VySGFzQW5zd2VyZWRDdXJyZW50IiwicXVpelNsaWRlcyIsIm1hcCIsImRpdiIsImgzIiwic3RtdEluZGV4IiwiY2xhc3NOYW1lIiwicmFkaW9PcHRpb24iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInF1aXpJblByb2dyZXNzIiwicmVmIiwiYnV0dG9uR3JvdXAiLCJidXR0b24iLCJvbkNsaWNrIiwiZmluYWxSZXN1bHRzIiwicmVzdWx0Q29udGFpbmVyIiwicCIsIm1hcmdpbkJvdHRvbSIsInJlYWRPbmx5IiwibWFyZ2luVG9wIiwicXVpekNvbnRhaW5lciIsImgxIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Quiz.js\n"));

/***/ })

});