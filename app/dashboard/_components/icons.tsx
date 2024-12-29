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
    case "apple":
      return <FaApple className="text-[#000000] text-4xl" />;
    case "microsoft":
      return <FaMicrosoft className="text-[#F25022] text-4xl" />;
    case "spotify":
      return <FaSpotify className="text-[#1DB954] text-4xl" />;
    case "slack":
      return <FaSlack className="text-[#4A154B] text-4xl" />;
    case "dropbox":
      return <FaDropbox className="text-[#0061FF] text-4xl" />;
    case "twitch":
      return <FaTwitch className="text-[#9146FF] text-4xl" />;
    case "vimeo":
      return <FaVimeo className="text-[#1AB7EA] text-4xl" />;
    case "flickr":
      return <FaFlickr className="text-[#FF0084] text-4xl" />;
    case "dribbble":
      return <FaDribbble className="text-[#EA4C89] text-4xl" />;
    case "behance":
      return <FaBehance className="text-[#1769FF] text-4xl" />;
    default:
      return <RiDoorLockLine className="text-4xl" />;
  }
};

export default getIcon;
