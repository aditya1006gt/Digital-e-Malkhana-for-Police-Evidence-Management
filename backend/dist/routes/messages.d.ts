declare const router: import("express-serve-static-core").Router;
/** This is your get route for messages
  where: {
  conversationId, // (only in Route 2)
  // REMOVED: deletedForAll: false
  NOT: {
    deletedFor: { has: userId } // Keep this! It hides "Delete for Me" messages
  },
  ...(before && { createdAt: { lt: new Date(before) } })
},
*/
export default router;
//# sourceMappingURL=messages.d.ts.map