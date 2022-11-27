const router = require("express").Router();

router.get("/hello", async (req, res) => {
  try {
    return res.json({ message: "hello from user router" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;