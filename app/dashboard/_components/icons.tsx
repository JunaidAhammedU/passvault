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
  FaApple,
  FaMicrosoft,
  FaSpotify,
  FaSlack,
  FaDropbox,
  FaTwitch,
  FaVimeo,
  FaFlickr,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { RiDoorLockLine } from "react-icons/ri";

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
  | "discord"
  | "apple"
  | "microsoft"
  | "spotify"
  | "slack"
  | "dropbox"
  | "twitch"
  | "vimeo"
  | "flickr"
  | "dribbble"
  | "behance";

const getIcon = (iconName: IconName | any, size: string = "text-4xl") => {
  switch (iconName) {
    case "google":
      return <FaGoogle className={`text-[#4285F4] ${size}`} />;
    case "facebook":
      return <FaFacebook className={`text-[#1877F2] ${size}`} />;
    case "github":
      return <FaGithub className={`text-[#181717] ${size}`} />;
    case "amazon":
      return <FaAmazon className={`text-[#FF9900] ${size}`} />;
    case "twitter":
      return <FaTwitter className={`text-[#1DA1F2] ${size}`} />;
    case "linkedin":
      return <FaLinkedin className={`text-[#0077B5] ${size}`} />;
    case "instagram":
      return <FaInstagram className={`text-[#E4405F] ${size}`} />;
    case "youtube":
      return <FaYoutube className={`text-[#FF0000] ${size}`} />;
    case "pinterest":
      return <FaPinterest className={`text-[#E60023] ${size}`} />;
    case "snapchat":
      return <FaSnapchat className={`text-[#FFFC00] ${size}`} />;
    case "reddit":
      return <FaReddit className={`text-[#FF4500] ${size}`} />;
    case "tiktok":
      return <FaTiktok className={`text-[#000000] ${size}`} />;
    case "whatsapp":
      return <FaWhatsapp className={`text-[#25D366] ${size}`} />;
    case "telegram":
      return <FaTelegram className={`text-[#0088CC] ${size}`} />;
    case "discord":
      return <FaDiscord className={`text-[#7289DA] ${size}`} />;
    case "apple":
      return <FaApple className={`text-[#000000] ${size}`} />;
    case "microsoft":
      return <FaMicrosoft className={`text-[#F25022] ${size}`} />;
    case "spotify":
      return <FaSpotify className={`text-[#1DB954] ${size}`} />;
    case "slack":
      return <FaSlack className={`text-[#4A154B] ${size}`} />;
    case "dropbox":
      return <FaDropbox className={`text-[#0061FF] ${size}`} />;
    case "twitch":
      return <FaTwitch className={`text-[#9146FF] ${size}`} />;
    case "vimeo":
      return <FaVimeo className={`text-[#1AB7EA] ${size}`} />;
    case "flickr":
      return <FaFlickr className={`text-[#FF0084] ${size}`} />;
    case "dribbble":
      return <FaDribbble className={`text-[#EA4C89] ${size}`} />;
    case "behance":
      return <FaBehance className={`text-[#1769FF] ${size}`} />;
    default:
      return <RiDoorLockLine className={size} />;
  }
};

export default getIcon;
