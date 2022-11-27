const router = require("express").Router();

router.get("/hello", async (req, res) => {
  try {
    return res.json({ message: "hello from otp router" });
  } catch (error) {
    return res.json(400).json({ success: false, error: error.message });
  }
});

// api for requesting otp to phone number coming from frontend
router.post("/requestotp", async (req, res) => {
  try {
    const { phonenumber, channel } = req.body; // this line is used to accept frontend data

    console.log(`Otp sent on ${phonenumber} through ${channel}`);

    return res.json({
      success: true,
      message: `Otp sent on ${phonenumber} through ${channel}`,
    });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

// api for verifying otp to phone number coming from frontend, otp also comes
router.post("/verifyotp", async (req, res) => {
  try {
    const { phonenumber, otp } = req.body;
    console.log(phonenumber, otp);
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
module.exports = router;