import DataImage from "./data";
import { listTools } from "./data";
import resume from "./assets/CV_Steven_Jonathan_IT.pdf";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2 pt-15 pl-6">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-5 rounded-md"
            />
            <q>Welcome to my Portofolio Web</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Steven</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Seorang Web Developer yang memiliki passion dibidang UI UX Design
            dan Web Development, saya memperoleh pengalaman seputar Web
            Development melalui Online Course seperti Coursera, DQLab,
            Buildwithangga, dan lainnya, serta dari pengalaman saya memanage
            Website-Website di pekerjaan saya sebelumnya.
          </p>
          <div className="flex gap-4 items-center ">
            <a
              href={resume}
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
              download="resume"
            >
              Download CV <i class="ri-download-line"></i>
            </a>
            <a
              href="https://drive.google.com/drive/u/2/folders/18rs82MJ50q7
W4_UhZktWoOkbAIo2x7mM"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i class="ri-eye-line"></i>
            </a>
            <a
              href="https://github.com/StevenJonathann"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Github Saya
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[400px] ml-auto mr-5 rounded-lg"
        />
      </div>

      {/*About*/}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Saya memiliki pengalaman kerja sebagai Web Developer di PT. Elite
            International selama kurang lebih 2 tahun, selama di perusahaan ini
            saya memanage dan mendesain beberapa website untuk perusahaan
            tersebut, saya juga memastikan website dapat berjalan dengan lancar
            dan dapat diakses dengan mudah oleh para customer.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Website yang saya manage</p>
              </div>

              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32 ml-4">
          <h1 className="text-4xl/snug font-black mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Berikut beberapa tools yang saya gunakan untuk mendesain dan
            mengembangkan Website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-800"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          Silahkan hubungi saya
        </p>
        <form
          action="https://formsubmit.co/stevenjonathannliee24@gmail.com"
          method="POST"
          className="bg-zinc-700 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="40"
                rows="7"
                placeholder="Masukan Pesan"
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
    </>
  );
}

export default App;
