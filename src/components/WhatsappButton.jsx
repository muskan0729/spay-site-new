import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=918450007614&text=Hello!%20I%20want%20to%20know%20more%20about%20your%20payment%20gateway%20services."
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp_icon" />
    </a>
  );
};

export default WhatsappButton;