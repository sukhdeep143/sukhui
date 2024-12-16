import Image from 'next/image';
import Link from 'next/link';

export default function SocialIcons() {
  const socialLinks = [
    {
      src: "https://img.icons8.com/?size=100&id=44019&format=png&color=000000",
      alt: "LinkedIn icon",
      url: "https://www.linkedin.com/in/sukhdeep-singh-417a98184", // Replace with your LinkedIn URL
     
    },
    {
      src: "https://img.icons8.com/?size=100&id=43677&format=png&color=000000",
      alt: "whatsapp icon",
      url: "https://whatsapp.com/yourprofile", // Replace with your Twitter URL
    },
    {
      src: "https://img.icons8.com/?size=100&id=bYzsf9Bmocst&format=png&color=000000",
      alt: "x, Twitter  icon",
      url: "https://x.com/ManiBhagat3", // Replace with your Instagram URL
    },
    {
      src: "https://img.icons8.com/?size=100&id=118501&format=png&color=000000",
      alt: "Facebook icon",
      url: "https://www.facebook.com/mani.bhagat.5623", // Replace with your Facebook URL
    },
    {
      src: "https://img.icons8.com/?size=100&id=43625&format=png&color=000000",
      alt: "Instagram icon",
      url: "https://www.instagram.com/sukhdeep_singh_bhagat/", // Replace with your YouTube URL
    },
    {
      src: "https://img.icons8.com/?size=100&id=114954&format=png&color=000000",
      alt: "telegram icon",
      url: "https://web.telegram.org/@king_of_noting", // Replace with your Snapchat URL
    },
  ];

  return (
    <div className="">
      <div className="grid gap-16 cursor-pointer items-center">
        {socialLinks.map((icon, index) => (
          <Link href={icon.url} key={index} target="_blank" rel="noopener noreferrer">
            <div className="hover:scale-150 transition-transform duration-200">
              <Image src={icon.src} width={35} height={35} alt={icon.alt} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
