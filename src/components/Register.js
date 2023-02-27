import { useState } from "react";
import { MdClose } from "react-icons/md";
import ReactFlagsSelect from "react-flags-select";

export default function Register() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    TR: "+90",
    US: "+1",
    GB: "+44",
    FR: "+33",
    DE: "+49",
    IT: "+39",
  };

  return (
    <div className="bg-white h-[569px] w-[446px] rounded-lg relative">
      <button className="absolute right-8 top-8 bg-brand-gray w-8 h-8 rounded-lg text-lg flex justify-center items-center">
        <MdClose />
      </button>
      <div>
        <div className="pt-9 text-primary-brand-color font-semibold text-center">
          Kayıt Ol
        </div>
        <div className="grid grid-rows-3 gap-4 px-4 mt-3">
          <div className="flex gap-2">
            <div>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
            </div>
            <label className="flex-1 relative block">
              <input
                required
                className="h-14 px-4 border-2 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                required
                className="w-full border-2 h-14 rounded px-4 transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Ad Soyad
              </span>
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                required
                className="w-full border-2 h-14 rounded px-4 transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">
                E-Posta
              </span>
            </label>
          </div>
          <div>
            <label className="flex items-center justify-center">
              <input className="w-[22px] h-[22px] border-2 rounded" />
              <span className="text-xs text-gray-500 px-3 ">
                Getir’in bana özel kampanya, tanıtım ve fırsatlarından haberdar
                olmak istiyorum.
              </span>
            </label>
          </div>
          <div className="text-gray-500 pr-3">
            <span className="text-xs">
              Kişisel verilerinize dair Aydınlatma Metni için{" "}
              <a
                className="underline text-primary-brand-color"
                href="https://agreements.getir.com/privacy_notice18112022_100_TR_tr_2.html"
              >
                tıklayınız
              </a>
              . Üye olmakla,{" "}
              <a
                className="underline text-primary-brand-color"
                href="https://agreements.getir.com/tcs2282022_200_TR_tr_4.html"
              >
                Kullanım Koşulları
              </a>{" "}
              hükümlerini kabul etmektesiniz.
            </span>
          </div>
          <div className="mt-14">
            <button className="bg-primary-brand-color hover:bg-secondary-brand-color w-full h-11 rounded-lg text-white text-sm font-semibold">
              Kayıt Ol
            </button>
          </div>
        </div>
        <div className="h-14 bg-brand-gray rounded-b-lg flex justify-center items-center text-sm text-gray-500 mt-3">
          Getir'e üyeyseniz{" "}
          <button className="pl-1 text-primary-brand-color font-semibold">
            Giriş yap
          </button>
        </div>
      </div>
    </div>
  );
}
