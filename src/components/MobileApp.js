export default function MobileApp() {
  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-3  text-brand-primary-gray pt-8">
        Kampanyalar
      </h3>
      <div className="bg-mobile-app-image bg-primary-brand-color w-full h-[312px] rounded-lg mt-8 flex justify-between ">
        <div className="pl-12 pt-16">
          <h3 className="text-white font-bold text-2xl">Getir'i indirin!</h3>
          <p className="text-white max-w-sm mt-3 font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
          </p>
          <div href="mobile-app" className="flex gap-2 mt-8">
            <img
              onClick={() => {
                window.location.href = "https://apps.apple.com/app/id995280265";
              }}
              className="cursor-pointer"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="app store"
            />
            <img
              onClick={() => {
                window.location.href =
                  "https://play.google.com/store/apps/details?id=com.getir&pli=1";
              }}
              className="cursor-pointer"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="google play"
            />
            <img
              onClick={() => {
                window.location.href =
                  "https://appgallery.huawei.com/#/app/C100954039";
              }}
              className="cursor-pointer"
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="app gallery"
            />
          </div>
        </div>
        <div className="flex items-end">
          <img
            className="rounded-br-lg"
            src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
