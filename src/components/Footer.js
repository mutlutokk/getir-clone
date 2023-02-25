import { useEffect, useState } from "react";
import footerData from "../api/footer.json";
import Foot from "./ui/Foot";
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { BiGlobe } from "react-icons/bi";

export default function Footer() {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    setFooter(footerData);
  }, []);

  return (
    <div className="bg-white">
      <div className="flex container mx-auto mt-16 h-[278px] pt-10 mb-5">
        <div className="w-[258px] h-[218px] mr-4">
          <span className="text-primary-brand-color text-lg">
            Getir'i indirin!
          </span>
          <img
            className="mt-4"
            src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
            alt=""
          />
          <img
            className="mt-4"
            src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            alt=""
          />
          <img
            className="mt-4"
            src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
            alt=""
          />
        </div>
        <div className="flex">
          {footer && footer.map((foot) => <Foot foot={foot} key={foot.id} />)}
        </div>
        <div className="w-[104px] h-[218px]">
          <div className="bg-white w-[104px] h-[116px] drop-shadow-md rounded-lg flex items-center justify-center">
            <img
              className="w-[72px] h-[84px]"
              src="https://cdn.getir.com/getirweb-images/common/etbis.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full border-t"></div>
      <div className="container mx-auto flex justify-between p-6 text-sm text-secondary-brand-gray">
        <div className="flex">
          <span className="mr-3">© 2023 Getir</span>
          <div className="ml-3">
            <ul className="list-disc">
              <li>
                <a href="sirket">Bilgi Toplumu Hizmetleri</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <a
            className="flex items-center justify-center w-6 h-8 mr-3 rounded-lg  hover:bg-gray-100"
            href="facebook"
          >
            <MdFacebook className="w-5 h-5 hover:text-primary-brand-color" />
          </a>
          <a
            className="flex items-center justify-center w-6 h-8 mr-3 rounded-lg  hover:bg-gray-100"
            href="twitter"
          >
            <BsTwitter className="w-5 h-5 hover:text-primary-brand-color" />
          </a>
          <a
            className="flex items-center justify-center w-6 h-8 mr-3 rounded-lg  hover:bg-gray-100"
            href="instagram"
          >
            <SiInstagram className="w-5 h-5 hover:text-primary-brand-color" />
          </a>
          <button className="flex items-center justify-center border rounded-lg p-1 hover:text-primary-brand-color hover:bg-gray-100 hover:border-none">
            <div>
              <BiGlobe className="w-5 h-5 mr-2" />
            </div>
            <span>Türkçe(TR)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
