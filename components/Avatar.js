import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
  <Image
    src={'/WhatsApp_Image_2024-02-15_at_20.11.45_9d78e99f-removebg-preview.png'}
    width={737}
    height={678}
    alt=""
    className="translate-z-0 w-full h-full"

  />
  </div>;
};

export default Avatar;
