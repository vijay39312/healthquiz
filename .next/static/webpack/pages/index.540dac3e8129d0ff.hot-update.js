/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./styles/Quiz.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./styles/Quiz.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Header styles */\\n.Quiz_header___3jbL {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    padding: 0.75rem 1rem;\\n    background-color: #fff;  /* White header */\\n    border-bottom: 1px solid #eee;\\n  }\\n  \\n  .Quiz_headerLeft__FFSOT {\\n    display: flex;\\n    align-items: center;\\n  }\\n  \\n  .Quiz_headerRight__PauwC {}\\n  \\n  .Quiz_hamburgerBtn__XotA3 {\\n    background: none;\\n    border: none;\\n    cursor: pointer;\\n  }\\n  \\n  .Quiz_hamburgerIcon___X9wd {\\n    font-size: 1.5rem; \\n  }\\n  \\n  /* Overall quiz wrapper */\\n  .Quiz_quizWrapper__0f2dB {\\n    max-width: 600px;\\n    margin: 2rem auto;\\n    padding: 0 0rem;\\n    font-family: \\\"Arial\\\", sans-serif;\\n    color: #333;\\n  }\\n  \\n  /* Title / Subtitle */\\n  .Quiz_quizTitle__4bzWq {\\n    font-size: 1.4rem;\\n    text-align: center;\\n    margin: 0 0 0.25rem 0;\\n    color: #2f2f2f; /* Dark heading text */\\n  }\\n  \\n  .Quiz_quizSubtitle__F3ZXy {\\n    font-size: 1rem;\\n    text-align: center;\\n    margin: 0 0 1.5rem 0;\\n    font-weight: bold;\\n    color: #555;\\n  }\\n  \\n  /* The slider area */\\n  .Quiz_quizSlider__KvfDS {\\n    margin-bottom: 1rem;\\n  }\\n  \\n  /* Option label row */\\n  /*.quizOption {\\n    display: flex;\\n    align-items: center;\\n    padding: 1rem 1rem;\\n    border-top: 1px solid #f1f1f1;\\n    cursor: pointer;\\n    transition: background-color 0.2s ease;\\n  }*/\\n\\n  /* 1. Ensure the label can accommodate background highlights */\\n.Quiz_quizOption__IiBi0 {\\n    position: relative;     /* For potential background / border layering */\\n    display: flex;\\n    align-items: center;\\n    padding: 1rem;\\n    border-top: 1px solid #f1f1f1;\\n    cursor: pointer;\\n    transition: background-color 0.2s ease;\\n  }\\n  \\n  /* 2. Make the badge distinctly colored when selected */\\n  .Quiz_quizOption__IiBi0 input[type=\\\"radio\\\"]:checked + .Quiz_quizBadge__DyJW7 {\\n    background-color: #6b4ee2; /* Purple */\\n    color: #fff;              /* White text on purple */\\n  }\\n  \\n  /* Remove default radio appearance */\\n  .Quiz_quizOption__IiBi0 input[type=\\\"radio\\\"] {\\n    display: none;\\n  }\\n  \\n  /* Hover effect for quiz option */\\n  .Quiz_quizOption__IiBi0:hover {\\n    background-color: #f9f9f9;\\n  }\\n  \\n  /* A/B/C badge */\\n  .Quiz_quizBadge__DyJW7 {\\n    min-width: 32px;\\n    min-height: 32px;\\n    border-radius: 50%;\\n    background-color: #e9e4fa; /* Light purple background */\\n    color: #6b4ee2;           /* Medium purple text */\\n    font-weight: bold;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-right: 0.75rem;\\n  }\\n  \\n  /* Option text styling */\\n  .Quiz_quizText__83Im4 {\\n    font-size: 1rem;\\n    line-height: 1.4;\\n    color: #333;\\n    flex: 1 1;\\n    word-wrap: break-word; \\n  }\\n  \\n  /* Button row at the bottom of the card */\\n  .Quiz_buttonGroup__aiB5I {\\n    display: flex;\\n    justify-content: space-between;\\n    margin-top: 1rem;\\n    padding: 1rem;\\n  }\\n  \\n  .Quiz_buttonGroup__aiB5I button {\\n    background-color: #6b4ee2; /* Purple */\\n    color: #fff;\\n    border: none;\\n    border-radius: 24px;\\n    padding: 0.5rem 1rem;\\n    cursor: pointer;\\n    font-size: 1rem;\\n  }\\n  \\n  .Quiz_buttonGroup__aiB5I button:disabled {\\n    opacity: 0.6;\\n    cursor: not-allowed;\\n  }\\n  \\n  .Quiz_buttonGroup__aiB5I button:hover:enabled {\\n    background-color: #563dc1; /* Darken on hover */\\n  }\\n  \\n  /* Final results container */\\n  .Quiz_resultContainer__oqLLg {\\n    margin-top: 1rem;\\n    padding: 1rem;\\n  }\\n  \\n  /* Correct / Wrong text color after submission */\\n  .Quiz_defaultOption__wxt5l {\\n    /* No highlight */\\n  }\\n  /*.correctChoice {\\n    color: green;\\n    font-weight: bold;\\n  }\\n  .wrongChoice {\\n    color: red;\\n    font-weight: bold;\\n  }*/\\n  \\n/* The main card container with full rounded corners */\\n.Quiz_quizCard__a1nXx {\\n    background-color: #fff;\\n    border-radius: 16px; /* Round all corners */\\n    box-shadow: 0 4px 8px rgba(0,0,0,0.08);\\n    overflow: hidden;  /* Ensures the header’s corners follow the card */\\n    margin: 0 auto;\\n    max-width: 600px; /* or whatever width you prefer */\\n  }\\n  \\n  /* The top \\\"What's the lie?\\\" section \\n     - Purple gradient (left→right)\\n     - White text\\n     - Matches the card's top corners\\n  */\\n  .Quiz_quizCardHeader__VErON {\\n    background: linear-gradient(to right, #6b4ee2, #9f80f8);\\n    color: #fff;\\n    text-align: center;\\n    padding: 2rem 1rem;\\n  \\n    /* Because .quizCard has border-radius:16px, \\n       we do NOT re-round here, to keep it seamlessly flush. */\\n    border-top-left-radius: 0;\\n    border-top-right-radius: 0;\\n    /* margin-bottom: 1rem;  <-- optional if you want space after the header */\\n  }\\n  \\n  .Quiz_quizCardHeaderText__ShRFZ {\\n    margin: 0;\\n    font-weight: 600;\\n    font-size: 1rem;  /* Adjust as needed */\\n  }\\n  \\n  /* Example: If you want a light dividing line below the header,\\n     you can add it to the quizCardHeader, or here:\\n  */\\n  .Quiz_quizDivider__AO553 {\\n    border-bottom: 1px solid #eee;\\n  }\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Quiz.module.css\"],\"names\":[],\"mappings\":\"AAAA,kBAAkB;AAClB;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;IACrB,sBAAsB,GAAG,iBAAiB;IAC1C,6BAA6B;EAC/B;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA,0BAAc;;EAEd;IACE,gBAAgB;IAChB,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA,yBAAyB;EACzB;IACE,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,gCAAgC;IAChC,WAAW;EACb;;EAEA,qBAAqB;EACrB;IACE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,cAAc,EAAE,sBAAsB;EACxC;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,WAAW;EACb;;EAEA,oBAAoB;EACpB;IACE,mBAAmB;EACrB;;EAEA,qBAAqB;EACrB;;;;;;;IAOE;;EAEF,8DAA8D;AAChE;IACI,kBAAkB,MAAM,+CAA+C;IACvE,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,sCAAsC;EACxC;;EAEA,uDAAuD;EACvD;IACE,yBAAyB,EAAE,WAAW;IACtC,WAAW,eAAe,yBAAyB;EACrD;;EAEA,oCAAoC;EACpC;IACE,aAAa;EACf;;EAEA,iCAAiC;EACjC;IACE,yBAAyB;EAC3B;;EAEA,gBAAgB;EAChB;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB,EAAE,4BAA4B;IACvD,cAAc,YAAY,uBAAuB;IACjD,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;EACvB;;EAEA,wBAAwB;EACxB;IACE,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,SAAO;IACP,qBAAqB;EACvB;;EAEA,yCAAyC;EACzC;IACE,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,yBAAyB,EAAE,WAAW;IACtC,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,yBAAyB,EAAE,oBAAoB;EACjD;;EAEA,4BAA4B;EAC5B;IACE,gBAAgB;IAChB,aAAa;EACf;;EAEA,gDAAgD;EAChD;IACE,iBAAiB;EACnB;EACA;;;;;;;IAOE;;AAEJ,sDAAsD;AACtD;IACI,sBAAsB;IACtB,mBAAmB,EAAE,sBAAsB;IAC3C,sCAAsC;IACtC,gBAAgB,GAAG,iDAAiD;IACpE,cAAc;IACd,gBAAgB,EAAE,iCAAiC;EACrD;;EAEA;;;;GAIC;EACD;IACE,uDAAuD;IACvD,WAAW;IACX,kBAAkB;IAClB,kBAAkB;;IAElB;8DAC0D;IAC1D,yBAAyB;IACzB,0BAA0B;IAC1B,0EAA0E;EAC5E;;EAEA;IACE,SAAS;IACT,gBAAgB;IAChB,eAAe,GAAG,qBAAqB;EACzC;;EAEA;;GAEC;EACD;IACE,6BAA6B;EAC/B\",\"sourcesContent\":[\"/* Header styles */\\n.header {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    padding: 0.75rem 1rem;\\n    background-color: #fff;  /* White header */\\n    border-bottom: 1px solid #eee;\\n  }\\n  \\n  .headerLeft {\\n    display: flex;\\n    align-items: center;\\n  }\\n  \\n  .headerRight {}\\n  \\n  .hamburgerBtn {\\n    background: none;\\n    border: none;\\n    cursor: pointer;\\n  }\\n  \\n  .hamburgerIcon {\\n    font-size: 1.5rem; \\n  }\\n  \\n  /* Overall quiz wrapper */\\n  .quizWrapper {\\n    max-width: 600px;\\n    margin: 2rem auto;\\n    padding: 0 0rem;\\n    font-family: \\\"Arial\\\", sans-serif;\\n    color: #333;\\n  }\\n  \\n  /* Title / Subtitle */\\n  .quizTitle {\\n    font-size: 1.4rem;\\n    text-align: center;\\n    margin: 0 0 0.25rem 0;\\n    color: #2f2f2f; /* Dark heading text */\\n  }\\n  \\n  .quizSubtitle {\\n    font-size: 1rem;\\n    text-align: center;\\n    margin: 0 0 1.5rem 0;\\n    font-weight: bold;\\n    color: #555;\\n  }\\n  \\n  /* The slider area */\\n  .quizSlider {\\n    margin-bottom: 1rem;\\n  }\\n  \\n  /* Option label row */\\n  /*.quizOption {\\n    display: flex;\\n    align-items: center;\\n    padding: 1rem 1rem;\\n    border-top: 1px solid #f1f1f1;\\n    cursor: pointer;\\n    transition: background-color 0.2s ease;\\n  }*/\\n\\n  /* 1. Ensure the label can accommodate background highlights */\\n.quizOption {\\n    position: relative;     /* For potential background / border layering */\\n    display: flex;\\n    align-items: center;\\n    padding: 1rem;\\n    border-top: 1px solid #f1f1f1;\\n    cursor: pointer;\\n    transition: background-color 0.2s ease;\\n  }\\n  \\n  /* 2. Make the badge distinctly colored when selected */\\n  .quizOption input[type=\\\"radio\\\"]:checked + .quizBadge {\\n    background-color: #6b4ee2; /* Purple */\\n    color: #fff;              /* White text on purple */\\n  }\\n  \\n  /* Remove default radio appearance */\\n  .quizOption input[type=\\\"radio\\\"] {\\n    display: none;\\n  }\\n  \\n  /* Hover effect for quiz option */\\n  .quizOption:hover {\\n    background-color: #f9f9f9;\\n  }\\n  \\n  /* A/B/C badge */\\n  .quizBadge {\\n    min-width: 32px;\\n    min-height: 32px;\\n    border-radius: 50%;\\n    background-color: #e9e4fa; /* Light purple background */\\n    color: #6b4ee2;           /* Medium purple text */\\n    font-weight: bold;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-right: 0.75rem;\\n  }\\n  \\n  /* Option text styling */\\n  .quizText {\\n    font-size: 1rem;\\n    line-height: 1.4;\\n    color: #333;\\n    flex: 1;\\n    word-wrap: break-word; \\n  }\\n  \\n  /* Button row at the bottom of the card */\\n  .buttonGroup {\\n    display: flex;\\n    justify-content: space-between;\\n    margin-top: 1rem;\\n    padding: 1rem;\\n  }\\n  \\n  .buttonGroup button {\\n    background-color: #6b4ee2; /* Purple */\\n    color: #fff;\\n    border: none;\\n    border-radius: 24px;\\n    padding: 0.5rem 1rem;\\n    cursor: pointer;\\n    font-size: 1rem;\\n  }\\n  \\n  .buttonGroup button:disabled {\\n    opacity: 0.6;\\n    cursor: not-allowed;\\n  }\\n  \\n  .buttonGroup button:hover:enabled {\\n    background-color: #563dc1; /* Darken on hover */\\n  }\\n  \\n  /* Final results container */\\n  .resultContainer {\\n    margin-top: 1rem;\\n    padding: 1rem;\\n  }\\n  \\n  /* Correct / Wrong text color after submission */\\n  .defaultOption {\\n    /* No highlight */\\n  }\\n  /*.correctChoice {\\n    color: green;\\n    font-weight: bold;\\n  }\\n  .wrongChoice {\\n    color: red;\\n    font-weight: bold;\\n  }*/\\n  \\n/* The main card container with full rounded corners */\\n.quizCard {\\n    background-color: #fff;\\n    border-radius: 16px; /* Round all corners */\\n    box-shadow: 0 4px 8px rgba(0,0,0,0.08);\\n    overflow: hidden;  /* Ensures the header’s corners follow the card */\\n    margin: 0 auto;\\n    max-width: 600px; /* or whatever width you prefer */\\n  }\\n  \\n  /* The top \\\"What's the lie?\\\" section \\n     - Purple gradient (left→right)\\n     - White text\\n     - Matches the card's top corners\\n  */\\n  .quizCardHeader {\\n    background: linear-gradient(to right, #6b4ee2, #9f80f8);\\n    color: #fff;\\n    text-align: center;\\n    padding: 2rem 1rem;\\n  \\n    /* Because .quizCard has border-radius:16px, \\n       we do NOT re-round here, to keep it seamlessly flush. */\\n    border-top-left-radius: 0;\\n    border-top-right-radius: 0;\\n    /* margin-bottom: 1rem;  <-- optional if you want space after the header */\\n  }\\n  \\n  .quizCardHeaderText {\\n    margin: 0;\\n    font-weight: 600;\\n    font-size: 1rem;  /* Adjust as needed */\\n  }\\n  \\n  /* Example: If you want a light dividing line below the header,\\n     you can add it to the quizCardHeader, or here:\\n  */\\n  .quizDivider {\\n    border-bottom: 1px solid #eee;\\n  }\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"Quiz_header___3jbL\",\n\t\"headerLeft\": \"Quiz_headerLeft__FFSOT\",\n\t\"headerRight\": \"Quiz_headerRight__PauwC\",\n\t\"hamburgerBtn\": \"Quiz_hamburgerBtn__XotA3\",\n\t\"hamburgerIcon\": \"Quiz_hamburgerIcon___X9wd\",\n\t\"quizWrapper\": \"Quiz_quizWrapper__0f2dB\",\n\t\"quizTitle\": \"Quiz_quizTitle__4bzWq\",\n\t\"quizSubtitle\": \"Quiz_quizSubtitle__F3ZXy\",\n\t\"quizSlider\": \"Quiz_quizSlider__KvfDS\",\n\t\"quizOption\": \"Quiz_quizOption__IiBi0\",\n\t\"quizBadge\": \"Quiz_quizBadge__DyJW7\",\n\t\"quizText\": \"Quiz_quizText__83Im4\",\n\t\"buttonGroup\": \"Quiz_buttonGroup__aiB5I\",\n\t\"resultContainer\": \"Quiz_resultContainer__oqLLg\",\n\t\"defaultOption\": \"Quiz_defaultOption__wxt5l\",\n\t\"quizCard\": \"Quiz_quizCard__a1nXx\",\n\t\"quizCardHeader\": \"Quiz_quizCardHeader__VErON\",\n\t\"quizCardHeaderText\": \"Quiz_quizCardHeaderText__ShRFZ\",\n\t\"quizDivider\": \"Quiz_quizDivider__AO553\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL1F1aXoubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esb0ZBQW9GLG9CQUFvQiwwQkFBMEIscUNBQXFDLDRCQUE0QiwrQkFBK0Isc0RBQXNELEtBQUssaUNBQWlDLG9CQUFvQiwwQkFBMEIsS0FBSyxtQ0FBbUMsbUNBQW1DLHVCQUF1QixtQkFBbUIsc0JBQXNCLEtBQUssb0NBQW9DLHlCQUF5QixLQUFLLGdFQUFnRSx1QkFBdUIsd0JBQXdCLHNCQUFzQix5Q0FBeUMsa0JBQWtCLEtBQUssMERBQTBELHdCQUF3Qix5QkFBeUIsNEJBQTRCLHNCQUFzQiw0QkFBNEIsbUNBQW1DLHNCQUFzQix5QkFBeUIsMkJBQTJCLHdCQUF3QixrQkFBa0IsS0FBSywwREFBMEQsMEJBQTBCLEtBQUssaURBQWlELG9CQUFvQiwwQkFBMEIseUJBQXlCLG9DQUFvQyxzQkFBc0IsNkNBQTZDLEtBQUssa0dBQWtHLDhCQUE4QixvRUFBb0UsMEJBQTBCLG9CQUFvQixvQ0FBb0Msc0JBQXNCLDZDQUE2QyxLQUFLLG9KQUFvSixpQ0FBaUMsNENBQTRDLCtCQUErQixnR0FBZ0csb0JBQW9CLEtBQUssNkVBQTZFLGdDQUFnQyxLQUFLLHFEQUFxRCxzQkFBc0IsdUJBQXVCLHlCQUF5QixpQ0FBaUMsNkRBQTZELGdEQUFnRCxvQkFBb0IsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsS0FBSyw0REFBNEQsc0JBQXNC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QWdELG9CQUFvQiwwQkFBMEIsOEJBQThCLDRCQUE0QixLQUFLLGdEQUFnRCxzQkFBc0IsdUJBQXVCLGtCQUFrQixjQUFjLDZCQUE2QixLQUFLLG9FQUFvRSxvQkFBb0IscUNBQXFDLHVCQUF1QixvQkFBb0IsS0FBSyw2QkFBNkIsaUNBQWlDLDhCQUE4QixtQkFBbUIsMEJBQTBCLDJCQUEyQixzQkFBc0Isc0JBQXNCLEtBQUssc0NBQXNDLG1CQUFtQiwwQkFBMEIsS0FBSywyQ0FBMkMsaUNBQWlDLDBCQUEwQiwyREFBMkQsdUJBQXVCLG9CQUFvQixLQUFLLDZFQUE2RSw2QkFBNkIsc0JBQXNCLG1CQUFtQix3QkFBd0IsS0FBSyxrQkFBa0IsaUJBQWlCLHdCQUF3QixLQUFLLDRFQUE0RSw2QkFBNkIsMkJBQTJCLG9FQUFvRSx5QkFBeUIsdUVBQXVFLHdCQUF3Qix1Q0FBdUMseUtBQXlLLDhEQUE4RCxrQkFBa0IseUJBQXlCLHlCQUF5Qix3SkFBd0osaUNBQWlDLCtCQUErQix1REFBdUQsNkJBQTZCLGdCQUFnQix1QkFBdUIsd0JBQXdCLDJCQUEyQixvSkFBb0osb0NBQW9DLEtBQUssdUJBQXVCO0FBQzU3VztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9RdWl6Lm1vZHVsZS5jc3M/MmZjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSGVhZGVyIHN0eWxlcyAqL1xcbi5RdWl6X2hlYWRlcl9fXzNqYkwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgIC8qIFdoaXRlIGhlYWRlciAqL1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIH1cXG4gIFxcbiAgLlF1aXpfaGVhZGVyTGVmdF9fRkZTT1Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuUXVpel9oZWFkZXJSaWdodF9fUGF1d0Mge31cXG4gIFxcbiAgLlF1aXpfaGFtYnVyZ2VyQnRuX19Yb3RBMyB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuUXVpel9oYW1idXJnZXJJY29uX19fWDl3ZCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIH1cXG4gIFxcbiAgLyogT3ZlcmFsbCBxdWl6IHdyYXBwZXIgKi9cXG4gIC5RdWl6X3F1aXpXcmFwcGVyX18wZjJkQiB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDByZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzMzMztcXG4gIH1cXG4gIFxcbiAgLyogVGl0bGUgLyBTdWJ0aXRsZSAqL1xcbiAgLlF1aXpfcXVpelRpdGxlX180YnpXcSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcXG4gICAgY29sb3I6ICMyZjJmMmY7IC8qIERhcmsgaGVhZGluZyB0ZXh0ICovXFxuICB9XFxuICBcXG4gIC5RdWl6X3F1aXpTdWJ0aXRsZV9fRjNaWHkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzU1NTtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciBhcmVhICovXFxuICAuUXVpel9xdWl6U2xpZGVyX19LdmZEUyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuICBcXG4gIC8qIE9wdGlvbiBsYWJlbCByb3cgKi9cXG4gIC8qLnF1aXpPcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbiAgfSovXFxuXFxuICAvKiAxLiBFbnN1cmUgdGhlIGxhYmVsIGNhbiBhY2NvbW1vZGF0ZSBiYWNrZ3JvdW5kIGhpZ2hsaWdodHMgKi9cXG4uUXVpel9xdWl6T3B0aW9uX19JaUJpMCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgIC8qIEZvciBwb3RlbnRpYWwgYmFja2dyb3VuZCAvIGJvcmRlciBsYXllcmluZyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG4gIH1cXG4gIFxcbiAgLyogMi4gTWFrZSB0aGUgYmFkZ2UgZGlzdGluY3RseSBjb2xvcmVkIHdoZW4gc2VsZWN0ZWQgKi9cXG4gIC5RdWl6X3F1aXpPcHRpb25fX0lpQmkwIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIC5RdWl6X3F1aXpCYWRnZV9fRHlKVzcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI0ZWUyOyAvKiBQdXJwbGUgKi9cXG4gICAgY29sb3I6ICNmZmY7ICAgICAgICAgICAgICAvKiBXaGl0ZSB0ZXh0IG9uIHB1cnBsZSAqL1xcbiAgfVxcbiAgXFxuICAvKiBSZW1vdmUgZGVmYXVsdCByYWRpbyBhcHBlYXJhbmNlICovXFxuICAuUXVpel9xdWl6T3B0aW9uX19JaUJpMCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogSG92ZXIgZWZmZWN0IGZvciBxdWl6IG9wdGlvbiAqL1xcbiAgLlF1aXpfcXVpek9wdGlvbl9fSWlCaTA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgfVxcbiAgXFxuICAvKiBBL0IvQyBiYWRnZSAqL1xcbiAgLlF1aXpfcXVpekJhZGdlX19EeUpXNyB7XFxuICAgIG1pbi13aWR0aDogMzJweDtcXG4gICAgbWluLWhlaWdodDogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllNGZhOyAvKiBMaWdodCBwdXJwbGUgYmFja2dyb3VuZCAqL1xcbiAgICBjb2xvcjogIzZiNGVlMjsgICAgICAgICAgIC8qIE1lZGl1bSBwdXJwbGUgdGV4dCAqL1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG4gIH1cXG4gIFxcbiAgLyogT3B0aW9uIHRleHQgc3R5bGluZyAqL1xcbiAgLlF1aXpfcXVpelRleHRfXzgzSW00IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZmxleDogMSAxO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IFxcbiAgfVxcbiAgXFxuICAvKiBCdXR0b24gcm93IGF0IHRoZSBib3R0b20gb2YgdGhlIGNhcmQgKi9cXG4gIC5RdWl6X2J1dHRvbkdyb3VwX19haUI1SSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLlF1aXpfYnV0dG9uR3JvdXBfX2FpQjVJIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjRlZTI7IC8qIFB1cnBsZSAqL1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICBcXG4gIC5RdWl6X2J1dHRvbkdyb3VwX19haUI1SSBidXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuICBcXG4gIC5RdWl6X2J1dHRvbkdyb3VwX19haUI1SSBidXR0b246aG92ZXI6ZW5hYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjNkYzE7IC8qIERhcmtlbiBvbiBob3ZlciAqL1xcbiAgfVxcbiAgXFxuICAvKiBGaW5hbCByZXN1bHRzIGNvbnRhaW5lciAqL1xcbiAgLlF1aXpfcmVzdWx0Q29udGFpbmVyX19vcUxMZyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICBcXG4gIC8qIENvcnJlY3QgLyBXcm9uZyB0ZXh0IGNvbG9yIGFmdGVyIHN1Ym1pc3Npb24gKi9cXG4gIC5RdWl6X2RlZmF1bHRPcHRpb25fX3d4dDVsIHtcXG4gICAgLyogTm8gaGlnaGxpZ2h0ICovXFxuICB9XFxuICAvKi5jb3JyZWN0Q2hvaWNlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC53cm9uZ0Nob2ljZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfSovXFxuICBcXG4vKiBUaGUgbWFpbiBjYXJkIGNvbnRhaW5lciB3aXRoIGZ1bGwgcm91bmRlZCBjb3JuZXJzICovXFxuLlF1aXpfcXVpekNhcmRfX2Exblh4IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDsgLyogUm91bmQgYWxsIGNvcm5lcnMgKi9cXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47ICAvKiBFbnN1cmVzIHRoZSBoZWFkZXLigJlzIGNvcm5lcnMgZm9sbG93IHRoZSBjYXJkICovXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4OyAvKiBvciB3aGF0ZXZlciB3aWR0aCB5b3UgcHJlZmVyICovXFxuICB9XFxuICBcXG4gIC8qIFRoZSB0b3AgXFxcIldoYXQncyB0aGUgbGllP1xcXCIgc2VjdGlvbiBcXG4gICAgIC0gUHVycGxlIGdyYWRpZW50IChsZWZ04oaScmlnaHQpXFxuICAgICAtIFdoaXRlIHRleHRcXG4gICAgIC0gTWF0Y2hlcyB0aGUgY2FyZCdzIHRvcCBjb3JuZXJzXFxuICAqL1xcbiAgLlF1aXpfcXVpekNhcmRIZWFkZXJfX1ZFck9OIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmI0ZWUyLCAjOWY4MGY4KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgXFxuICAgIC8qIEJlY2F1c2UgLnF1aXpDYXJkIGhhcyBib3JkZXItcmFkaXVzOjE2cHgsIFxcbiAgICAgICB3ZSBkbyBOT1QgcmUtcm91bmQgaGVyZSwgdG8ga2VlcCBpdCBzZWFtbGVzc2x5IGZsdXNoLiAqL1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMXJlbTsgIDwtLSBvcHRpb25hbCBpZiB5b3Ugd2FudCBzcGFjZSBhZnRlciB0aGUgaGVhZGVyICovXFxuICB9XFxuICBcXG4gIC5RdWl6X3F1aXpDYXJkSGVhZGVyVGV4dF9fU2hSRloge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTsgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cXG4gIH1cXG4gIFxcbiAgLyogRXhhbXBsZTogSWYgeW91IHdhbnQgYSBsaWdodCBkaXZpZGluZyBsaW5lIGJlbG93IHRoZSBoZWFkZXIsXFxuICAgICB5b3UgY2FuIGFkZCBpdCB0byB0aGUgcXVpekNhcmRIZWFkZXIsIG9yIGhlcmU6XFxuICAqL1xcbiAgLlF1aXpfcXVpekRpdmlkZXJfX0FPNTUzIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICB9XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1F1aXou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LyogSGVhZGVyIHN0eWxlcyAqL1xcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgIC8qIFdoaXRlIGhlYWRlciAqL1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRlckxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuaGVhZGVyUmlnaHQge31cXG4gIFxcbiAgLmhhbWJ1cmdlckJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuaGFtYnVyZ2VySWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIH1cXG4gIFxcbiAgLyogT3ZlcmFsbCBxdWl6IHdyYXBwZXIgKi9cXG4gIC5xdWl6V3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDByZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzMzMztcXG4gIH1cXG4gIFxcbiAgLyogVGl0bGUgLyBTdWJ0aXRsZSAqL1xcbiAgLnF1aXpUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcXG4gICAgY29sb3I6ICMyZjJmMmY7IC8qIERhcmsgaGVhZGluZyB0ZXh0ICovXFxuICB9XFxuICBcXG4gIC5xdWl6U3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzU1NTtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciBhcmVhICovXFxuICAucXVpelNsaWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuICBcXG4gIC8qIE9wdGlvbiBsYWJlbCByb3cgKi9cXG4gIC8qLnF1aXpPcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbiAgfSovXFxuXFxuICAvKiAxLiBFbnN1cmUgdGhlIGxhYmVsIGNhbiBhY2NvbW1vZGF0ZSBiYWNrZ3JvdW5kIGhpZ2hsaWdodHMgKi9cXG4ucXVpek9wdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgIC8qIEZvciBwb3RlbnRpYWwgYmFja2dyb3VuZCAvIGJvcmRlciBsYXllcmluZyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG4gIH1cXG4gIFxcbiAgLyogMi4gTWFrZSB0aGUgYmFkZ2UgZGlzdGluY3RseSBjb2xvcmVkIHdoZW4gc2VsZWN0ZWQgKi9cXG4gIC5xdWl6T3B0aW9uIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIC5xdWl6QmFkZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI0ZWUyOyAvKiBQdXJwbGUgKi9cXG4gICAgY29sb3I6ICNmZmY7ICAgICAgICAgICAgICAvKiBXaGl0ZSB0ZXh0IG9uIHB1cnBsZSAqL1xcbiAgfVxcbiAgXFxuICAvKiBSZW1vdmUgZGVmYXVsdCByYWRpbyBhcHBlYXJhbmNlICovXFxuICAucXVpek9wdGlvbiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogSG92ZXIgZWZmZWN0IGZvciBxdWl6IG9wdGlvbiAqL1xcbiAgLnF1aXpPcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgfVxcbiAgXFxuICAvKiBBL0IvQyBiYWRnZSAqL1xcbiAgLnF1aXpCYWRnZSB7XFxuICAgIG1pbi13aWR0aDogMzJweDtcXG4gICAgbWluLWhlaWdodDogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllNGZhOyAvKiBMaWdodCBwdXJwbGUgYmFja2dyb3VuZCAqL1xcbiAgICBjb2xvcjogIzZiNGVlMjsgICAgICAgICAgIC8qIE1lZGl1bSBwdXJwbGUgdGV4dCAqL1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG4gIH1cXG4gIFxcbiAgLyogT3B0aW9uIHRleHQgc3R5bGluZyAqL1xcbiAgLnF1aXpUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZmxleDogMTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyBcXG4gIH1cXG4gIFxcbiAgLyogQnV0dG9uIHJvdyBhdCB0aGUgYm90dG9tIG9mIHRoZSBjYXJkICovXFxuICAuYnV0dG9uR3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICBcXG4gIC5idXR0b25Hcm91cCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI0ZWUyOyAvKiBQdXJwbGUgKi9cXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uR3JvdXAgYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uR3JvdXAgYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzZGMxOyAvKiBEYXJrZW4gb24gaG92ZXIgKi9cXG4gIH1cXG4gIFxcbiAgLyogRmluYWwgcmVzdWx0cyBjb250YWluZXIgKi9cXG4gIC5yZXN1bHRDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbiAgXFxuICAvKiBDb3JyZWN0IC8gV3JvbmcgdGV4dCBjb2xvciBhZnRlciBzdWJtaXNzaW9uICovXFxuICAuZGVmYXVsdE9wdGlvbiB7XFxuICAgIC8qIE5vIGhpZ2hsaWdodCAqL1xcbiAgfVxcbiAgLyouY29ycmVjdENob2ljZSB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICAud3JvbmdDaG9pY2Uge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH0qL1xcbiAgXFxuLyogVGhlIG1haW4gY2FyZCBjb250YWluZXIgd2l0aCBmdWxsIHJvdW5kZWQgY29ybmVycyAqL1xcbi5xdWl6Q2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7IC8qIFJvdW5kIGFsbCBjb3JuZXJzICovXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgLyogRW5zdXJlcyB0aGUgaGVhZGVy4oCZcyBjb3JuZXJzIGZvbGxvdyB0aGUgY2FyZCAqL1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHByZWZlciAqL1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgdG9wIFxcXCJXaGF0J3MgdGhlIGxpZT9cXFwiIHNlY3Rpb24gXFxuICAgICAtIFB1cnBsZSBncmFkaWVudCAobGVmdOKGknJpZ2h0KVxcbiAgICAgLSBXaGl0ZSB0ZXh0XFxuICAgICAtIE1hdGNoZXMgdGhlIGNhcmQncyB0b3AgY29ybmVyc1xcbiAgKi9cXG4gIC5xdWl6Q2FyZEhlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiNGVlMiwgIzlmODBmOCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIFxcbiAgICAvKiBCZWNhdXNlIC5xdWl6Q2FyZCBoYXMgYm9yZGVyLXJhZGl1czoxNnB4LCBcXG4gICAgICAgd2UgZG8gTk9UIHJlLXJvdW5kIGhlcmUsIHRvIGtlZXAgaXQgc2VhbWxlc3NseSBmbHVzaC4gKi9cXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICA8LS0gb3B0aW9uYWwgaWYgeW91IHdhbnQgc3BhY2UgYWZ0ZXIgdGhlIGhlYWRlciAqL1xcbiAgfVxcbiAgXFxuICAucXVpekNhcmRIZWFkZXJUZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07ICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXFxuICB9XFxuICBcXG4gIC8qIEV4YW1wbGU6IElmIHlvdSB3YW50IGEgbGlnaHQgZGl2aWRpbmcgbGluZSBiZWxvdyB0aGUgaGVhZGVyLFxcbiAgICAgeW91IGNhbiBhZGQgaXQgdG8gdGhlIHF1aXpDYXJkSGVhZGVyLCBvciBoZXJlOlxcbiAgKi9cXG4gIC5xdWl6RGl2aWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiUXVpel9oZWFkZXJfX18zamJMXCIsXG5cdFwiaGVhZGVyTGVmdFwiOiBcIlF1aXpfaGVhZGVyTGVmdF9fRkZTT1RcIixcblx0XCJoZWFkZXJSaWdodFwiOiBcIlF1aXpfaGVhZGVyUmlnaHRfX1BhdXdDXCIsXG5cdFwiaGFtYnVyZ2VyQnRuXCI6IFwiUXVpel9oYW1idXJnZXJCdG5fX1hvdEEzXCIsXG5cdFwiaGFtYnVyZ2VySWNvblwiOiBcIlF1aXpfaGFtYnVyZ2VySWNvbl9fX1g5d2RcIixcblx0XCJxdWl6V3JhcHBlclwiOiBcIlF1aXpfcXVpeldyYXBwZXJfXzBmMmRCXCIsXG5cdFwicXVpelRpdGxlXCI6IFwiUXVpel9xdWl6VGl0bGVfXzRieldxXCIsXG5cdFwicXVpelN1YnRpdGxlXCI6IFwiUXVpel9xdWl6U3VidGl0bGVfX0YzWlh5XCIsXG5cdFwicXVpelNsaWRlclwiOiBcIlF1aXpfcXVpelNsaWRlcl9fS3ZmRFNcIixcblx0XCJxdWl6T3B0aW9uXCI6IFwiUXVpel9xdWl6T3B0aW9uX19JaUJpMFwiLFxuXHRcInF1aXpCYWRnZVwiOiBcIlF1aXpfcXVpekJhZGdlX19EeUpXN1wiLFxuXHRcInF1aXpUZXh0XCI6IFwiUXVpel9xdWl6VGV4dF9fODNJbTRcIixcblx0XCJidXR0b25Hcm91cFwiOiBcIlF1aXpfYnV0dG9uR3JvdXBfX2FpQjVJXCIsXG5cdFwicmVzdWx0Q29udGFpbmVyXCI6IFwiUXVpel9yZXN1bHRDb250YWluZXJfX29xTExnXCIsXG5cdFwiZGVmYXVsdE9wdGlvblwiOiBcIlF1aXpfZGVmYXVsdE9wdGlvbl9fd3h0NWxcIixcblx0XCJxdWl6Q2FyZFwiOiBcIlF1aXpfcXVpekNhcmRfX2Exblh4XCIsXG5cdFwicXVpekNhcmRIZWFkZXJcIjogXCJRdWl6X3F1aXpDYXJkSGVhZGVyX19WRXJPTlwiLFxuXHRcInF1aXpDYXJkSGVhZGVyVGV4dFwiOiBcIlF1aXpfcXVpekNhcmRIZWFkZXJUZXh0X19TaFJGWlwiLFxuXHRcInF1aXpEaXZpZGVyXCI6IFwiUXVpel9xdWl6RGl2aWRlcl9fQU81NTNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./styles/Quiz.module.css\n"));

/***/ })

});