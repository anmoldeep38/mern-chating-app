const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, renameGroup, createGroupChat, addToGroup, removeFromGroup } = require("../comtrollers/chatControllers");

const router = express.Router();

router.route("/").post(protect,accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").get(protect, createGroupChat);
router.route("/rename").get(protect, renameGroup);
router.route("/groupadd").get(protect, addToGroup);
router.route("/groupremove").get(protect, removeFromGroup);

module.exports = router;