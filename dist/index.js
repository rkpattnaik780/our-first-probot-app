/******/ var __webpack_modules__ = ({

/***/ 843:
/***/ ((module) => {

module.exports = eval("require")("@probot/adapter-github-actions");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../../../.npm/_npx/7a71fb44c9115061/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@probot/adapter-github-actions
var adapter_github_actions = __nccwpck_require__(843);
;// CONCATENATED MODULE: ./app.js
/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
/* harmony default export */ const app = ((app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });

    app.log.info(context);

    return context.octokit.issues.createComment(issueComment);
  });

  app.on("pull_request.opened", async (context) => {
    let { reviewers } = await context.config('auto_assign.yml')
    reviewers = reviewers.filter(reviewer => reviewer !== "rkpattnaik780")

    const params = context.pullRequest({ reviewers });

    return context.octokit.pulls.requestReviewers(params);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
});

;// CONCATENATED MODULE: ./index.js



(0,adapter_github_actions.run)(app).catch((error) => {
  console.error(error);
  process.exit(1);
});
})();

