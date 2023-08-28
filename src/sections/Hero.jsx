import { InputNumber } from "./InputNumber";

export default function Hero() {
  return (
    <section className="min-h-[25rem] flex justify-center items-center w-full bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-400">
      <content className="max-w-[100rem] flex ">
        <div className="w-3/5">
          <h1 className="text-3xl text-white font-bold">
            Bimbel Online & Offline Terbesar, Terlengkap, dan Terbukti di
            Indonesia
          </h1>
          <p className="text-lg font-medium text-slate-200">
            Diskon spesial untukmu dengan isi nomor HP sekarang
          </p>
          <InputNumber />
        </div>
        <div title="Hero Image" className="w-2/5">
          <div className="bg-slate-200 animate-pulse w-full h-48"></div>
        </div>
      </content>
    </section>
  );
}
