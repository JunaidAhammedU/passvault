import {
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaAmazon,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
  FaReddit,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

type IconName =
  | "google"
  | "facebook"
  | "github"
  | "amazon"
  | "twitter"
  | "linkedin"
  | "instagram"
  | "youtube"
  | "pinterest"
  | "snapchat"
  | "reddit"
  | "tiktok"
  | "whatsapp"
  | "telegram"
  | "discord";

const getIcon = (iconName: IconName | any) => {
  switch (iconName) {
    case "google":
      return <FaGoogle className="text-[#4285F4] text-4xl" />;
    case "facebook":
      return <FaFacebook className="text-[#1877F2] text-4xl" />;
    case "github":
      return <FaGithub className="text-[#181717] text-4xl" />;
    case "amazon":
      return <FaAmazon className="text-[#FF9900] text-4xl" />;
    case "twitter":
      return <FaTwitter className="text-[#1DA1F2] text-4xl" />;
    case "linkedin":
      return <FaLinkedin className="text-[#0077B5] text-4xl" />;
    case "instagram":
      return <FaInstagram className="text-[#E4405F] text-4xl" />;
    case "youtube":
      return <FaYoutube className="text-[#FF0000] text-4xl" />;
    case "pinterest":
      return <FaPinterest className="text-[#E60023] text-4xl" />;
    case "snapchat":
      return <FaSnapchat className="text-[#FFFC00] text-4xl" />;
    case "reddit":
      return <FaReddit className="text-[#FF4500] text-4xl" />;
    case "tiktok":
      return <FaTiktok className="text-[#000000] text-4xl" />;
    case "whatsapp":
      return <FaWhatsapp className="text-[#25D366] text-4xl" />;
    case "telegram":
      return <FaTelegram className="text-[#0088CC] text-4xl" />;
    case "discord":
      return <FaDiscord className="text-[#7289DA] text-4xl" />;
    default:
      return null;
  }
};

export default getIcon;
