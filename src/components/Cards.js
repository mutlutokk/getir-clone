export default function Cards() {
  return (
    <div className="container mx-auto w-full h-[353px] mt-14 flex justify-between">
      <div className="bg-white h-[353px] w-[400px] rounded-lg flex items-center text-center">
        <div className="w-full p-7">
          <div className="flex justify-center">
            <img
              src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
              alt=""
            />
          </div>
          <h3 className="text-lg mt-6 font-semibold  text-primary-brand-color">
            Her siparişinize bir kampanya
          </h3>
          <p className="text-base mt-2 text-gray-500">
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
      </div>

      <div className="bg-white h-[353px] w-[400px] rounded-lg flex items-center text-center">
        <div className="w-full p-7">
          <div className="flex justify-center">
            <img
              src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
              alt=""
            />
          </div>
          <h3 className="text-lg mt-6 font-semibold  text-primary-brand-color">
            Dakikalar içinde kapınızda
          </h3>
          <p className="text-base mt-2 text-gray-500">
            Getir’le siparişiniz dakikalar içinde kapınıza gelir.
          </p>
        </div>
      </div>

      <div className="bg-white h-[353px] w-[400px] rounded-lg flex items-center text-center">
        <div className="w-full p-7">
          <div className="flex justify-center">
            <img
              src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
              alt=""
            />
          </div>
          <h3 className="text-lg mt-6 font-semibold  text-primary-brand-color">
            Binlerce çeşit mutluluk
          </h3>
          <p className="text-base mt-2 text-gray-500">
            Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
