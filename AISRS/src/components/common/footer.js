import React from "react";
import "../../css/footer.css";

export default function footer() {
  return (
    <div className="footerContainer">
      <footer>
        <div className="footerbox">
            <div><a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank">© Intel Corporation</a></div>
            <div><a href="https://www.intel.com/content/www/us/en/legal/terms-of-use.html" target="_blank">Terms Of  Use</a></div>
            <div><a href="https://www.intel.com/content/www/us/en/legal/trademarks.html" target="_blank">*Trademarks</a></div>
            <div><a href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html" target="_blank">Privacy</a></div>
            <div><a href="https://www.intel.com/content/www/us/en/privacy/intel-cookie-notice.html" target="_blank">Cookies</a></div>
          </div>
      </footer>
    </div>
  );
}
