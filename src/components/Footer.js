import { useEffect, useState } from "react";
import footerData from "../api/footer.json";
import Foot from "./ui/Foot";
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { BiGlobe } from "react-icons/bi";

export default function Footer({ handleClickLaguage }) {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    setFooter(footerData);
  }, []);

  const handleClickButton = (e) => {
    handleClickLaguage(e);
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex container mx-auto mt-16 h-[278px] pt-10 mb-5">
          <div className="w-[258px] h-[218px] mr-4">
            <span className="text-primary-brand-color text-lg">
              Getir'i indirin!
            </span>
            <img
              onClick={() => {
                window.location.href = "https://apps.apple.com/app/id995280265";
              }}
              className="mt-4 cursor-pointer"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="app store"
            />
            <img
              onClick={() => {
                window.location.href =
                  "https://play.google.com/store/apps/details?id=com.getir&pli=1";
              }}
              className="mt-4 cursor-pointer"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="google play"
            />
            <img
              onClick={() => {
                window.location.href =
                  "https://appgallery.huawei.com/#/app/C100954039";
              }}
              className="mt-4 cursor-pointer"
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="app gallery"
            />
          </div>
          <div className="flex">
            {footer && footer.map((foot) => <Foot foot={foot} key={foot.id} />)}
          </div>
          <div className="w-[104px] h-[218px]">
            <div className="bg-white w-[104px] h-[116px] drop-shadow-md rounded-lg flex items-center justify-center">
              <img
                onClick={() => {
                  window.location.href =
                    "https://www.eticaret.gov.tr/siteprofil/A8C52359B2F14075B6829557FC4306B1/getircom";
                }}
                className="w-[72px] h-[84px] cursor-pointer"
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt="karekod"
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
                  <a
                    className="text-primary-brand-color"
                    href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806"
                  >
                    Bilgi Toplumu Hizmetleri
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <a
              className="flex items-center justify-center w-6 h-8 mr-3 rounded-lg  hover:bg-gray-100"
              href="https://www.facebook.com/getir"
            >
              <MdFacebook className="w-5 h-5 hover:text-primary-brand-color" />
            </a>
            <a
              className="flex items-center justify-center w-6 h-8 mr-3 rounded-lg  hover:bg-gray-100"
              href="https://twitter.com/getir"
            >
              <BsTwitter className="w-5 h-5 hover:text-primary-brand-color" />
            </a>
            <a
              className="flex items-center justify-center w-6 h-8 mr-3 rounded-lg  hover:bg-gray-100"
              href="https://www.instagram.com/getir/"
            >
              <SiInstagram className="w-5 h-5 hover:text-primary-brand-color" />
            </a>
            <button
              onClick={(e) => handleClickButton(e)}
              className="flex items-center justify-center border rounded-lg p-1 hover:text-primary-brand-color hover:bg-gray-100 hover:border-none"
            >
              <div>
                <BiGlobe className="w-5 h-5 mr-2" />
              </div>
              <span>Türkçe(TR)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
