import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { MdClose } from "react-icons/md";

export default function Login() {
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
    <div>
      <div className="w-[446px] h-[338px] rounded-lg bg-white relative">
        <h1 className="text-primary-brand-color text-base font-semibold text-center pt-9">
          Giriş yap veya kayıt ol
        </h1>
        <button className="bg-brand-gray rounded-lg text-lg w-8 h-8 absolute top-8 right-8 flex justify-center items-center">
          <MdClose />
        </button>
        <div className="flex gap-x-2 pt-9 pl-6 pr-6">
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
              className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
            />
            <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">
              Telefon Numarası
            </span>
          </label>
        </div>
        <div className="pl-6 pr-6">
          <button
            className="h-12 flex items-center
           justify-center w-full mt-2 mb-2 rounded-md text-sm font-semibold bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow "
          >
            Telefon numarası ile devam et
          </button>
        </div>
        <div className="flex text-xs text-gray-400 pr-6 pl-6">
          Kişisel verilerinize dair Aydınlatma Metni için
          <div>
            <a
              className="underline text-primary-brand-color pl-1"
              href="https://agreements.getir.com/privacy_notice18112022_100_TR_tr_2.html"
            >
              tıklayınız.
            </a>
          </div>
        </div>
        <div className="flex mt-12 rounded-b-lg w-full bg-gray-100 h-14 justify-center items-center text-gray-400 text-sm">
          Hala kayıt olmadınız mı?
          <div>
            <a
              className="pl-1 text-primary-brand-color  font-semibold"
              href="Kayıt Ol"
            >
              Kayıt Ol
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
