import Image from "next/image";

export default function Footer() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', marginBottom: '20px'}}>
      <span className="text-xs lg:text-sm">©2023 Moshop. All rights reserved.</span>
      <div className="icons" style={{display: 'flex'}}>
      <Image src='/images/icons/facebook.png' alt="Photo" height={20} width={20}/>
      <Image src='/images/icons/twitter.png' alt="Photo" height={20} width={20}/>
      <Image src='/images/icons/instagram.png' alt="Photo" height={20} width={20}/>
      <Image src='/images/icons/youtube.png' alt="Photo" height={20} width={20}/>
      <Image src='/images/icons/telegram.png' alt="Photo" height={20} width={20}/>
      </div>
    </div>
  )
}
