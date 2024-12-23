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
      return <FaGoogle className="text-[20px]" />;
    case "facebook":
      return <FaFacebook className="text-[20px]" />;
    case "github":
      return <FaGithub className="text-[20px]" />;
    case "amazon":
      return <FaAmazon className="text-[20px]" />;
    case "twitter":
      return <FaTwitter className="text-[20px]" />;
    case "linkedin":
      return <FaLinkedin className="text-[20px]" />;
    case "instagram":
      return <FaInstagram className="text-[20px]" />;
    case "youtube":
      return <FaYoutube className="text-[20px]" />;
    case "pinterest":
      return <FaPinterest className="text-[20px]" />;
    case "snapchat":
      return <FaSnapchat className="text-[20px]" />;
    case "reddit":
      return <FaReddit className="text-[20px]" />;
    case "tiktok":
      return <FaTiktok className="text-[20px]" />;
    case "whatsapp":
      return <FaWhatsapp className="text-[20px]" />;
    case "telegram":
      return <FaTelegram className="text-[20px]" />;
    case "discord":
      return <FaDiscord className="text-[20px]" />;
    default:
      return null;
  }
};

export default getIcon;
