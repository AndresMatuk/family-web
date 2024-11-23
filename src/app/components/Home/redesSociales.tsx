import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface SocialLinksProps {
  iconColor?: string; 
  hoverColor?: string; 
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  iconColor = "text-white",
  hoverColor = "hover:text-pink-500",
}) => {
  return (
    <div className="flex justify-center mb-4 space-x-4">
      <a
        href="https://www.facebook.com/share/19x45j3aVw/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className={`text-2xl ${iconColor} ${hoverColor}`} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className={`text-2xl ${iconColor} ${hoverColor}`} />
      </a>
      <a
        href="https://www.instagram.com/family_w3b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={`text-2xl ${iconColor} ${hoverColor}`} />
      </a>
    </div>
  );
};

export default SocialLinks;
