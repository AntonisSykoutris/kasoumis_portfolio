import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialIcons = [
  {
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/giannis-kasoumis/',
    label: 'Linkedin',
  },
  {
    Icon: FaFacebook,
    link: '',
    label: 'Facebook',
  },
  {
    Icon: FaFacebookMessenger,
    link: '',
    label: 'Messanger',
  },
  {
    Icon: FaTwitter,
    link: '',
    label: 'Messanger',
  },
  {
    Icon: FaInstagram,
    link: '',
    label: 'Instagram',
  },
  {
    Icon: MdEmail,
    link: 'mailto:johnkasoumi@gmail.com',
    label: 'Mail',
  },
];

export default socialIcons;
