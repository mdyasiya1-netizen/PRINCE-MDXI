const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkrRnTEItqKggLe3ZiHkiqwFLlUFQhM9L9P0Jfpedid7eWpyMo4eTLPyfoBkpQwvMA1GP4AGSUl5Lg98jrDYAhGRRhiCroAQQ7BEEiroP9YzavN4X6fbBQ/rGAzx4fb9bYVe9nFv/iT3qm/TG6J8QReuiArzjEJ/gC42USN1UheYaH8EqDdXp3WS3fQO1yt1J7LXtOJrI2di7FpPYGXFhESSpJokl3wHVMYL3DtQkK/SN8Ry0iQZr6WWrmHRUNpYklV4p6FM7mYy1PvlEz9/JqKwdfor4xBLicVG5tltqcjmNoNmunTHG7tbN8p/ZW9m2h3I9vsgzf6jEQJRhbCCSe8/vLc63GlTzq7foDSCmFenaRl75rNNYmtY8GsZ9pZWS8xLlfC42vEe6dSiJLNoyG54PiD/kF+1DZx5/EVOlGjLSxVHo0LGXJP+J24Sz+8cvs/c9/bHf2Ayrlrm6Z4jktFEPektsUO1OJF3tRV4/W4M3YW2+MX6euat+donF6XPhLvhPiH/DyKlc4l9Xbz/vrQiUejhYUHO+OTPuQF/RNL52ImAaOTJBJI3aDC1qamfTieZnc+Xesdx1YjwTDzpLKIvLm6O0Z8dtvt8tliL5w2I0GrnUzbFvh6Pthr5yaz2fxuGE+vHd1wbSEwFF+6gOKIME4hJ2nSxjS1CyAq1zigmL9OF2zpuVC2+dnvUNXoP2/OiXOgK+u613x7q5kG3j97jliVimI9gS7IaBpgxjCaEcZTWjuYMRhhBoZ/f++CBFf8Tbe2mix1QUgo49ukyOIUog9RPy5hEKRFwtd1EpjtAVMwFD7DmHOSRKwdY5FAGlxIic0L5AwMQxgz/KtBTDECQ04L/GtpzRS1c5fd/nq73LmgC+6vehAEhkCXZEXWBpo8kOWhov7Fvj1aWJhl3xLMQRfEb2mDvtBXJVXVdUkV2sQ23gUJbLHAjSRRO+93ui06whySmIEhMBebMXGZObGSk8DYdGpMIsOMDPDZ3odN3nSoi6qYVuLFiKQ9VwXvECvm9rQN+5E+sxvJvuzG5U5pxJH0ePoHEDAEZ7NTeGWtudfjSVuY42DpqAsy3z0WRt9XBOi6q20eTqSD1shkcVRCY61fDHQNYBWWq8wMdUdWZ/PmNkO3rFqu+2IRjb2nthrCJQnw78VGYtMhDAv5WMvcZTWP5NHmSJLjdaq5J83aopFqW1NXWQaOcq2j0C6n5/AmRXVClCyvlnV9QeNsu6ePVR7EAyHb2xvz3cCvCxS/P1zk1VutcO1vSPDrO/AuwX8K+Ua89Zvw0v0N4/1l+ZftHAWUnS8MHT1rGVOMJs8qNuLpbtZRXL8e6ETZeX0RO7qHGHh5+d4FWQx5mNI7GAKYIJq++oSmRWtgKwnTPxQzR5ZlGtFz23kMGTc+l2JD7phxeM/AUOxruqQqQrs2bZZL02wG2aX1uK+fZL11eG1k2ZpD/rFjwGi/6d0DLz8BAoJ6XH4HAAA=', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
