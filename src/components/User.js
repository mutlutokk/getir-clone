import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function User() {
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
      <div className="w-[400px] rounded-lg bg-gray-50 p-6">
        <h4 className="text-primary-brand-color text-center font-semibold mb-4">
          Giriş yap veya kayıt ol
        </h4>
        <div className="flex gap-x-2">
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
        <button
          className="h-12 flex items-center
           justify-center w-full mt-4 rounded-md text-sm font-semibold bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow "
        >
          Telefon numarası ile devam et
        </button>
      </div>
    </div>
  );
}
