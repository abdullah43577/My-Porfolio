import { useState } from 'react';

export default function Footer() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormChange = function (e) {
    const { name, value } = e.target;

    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleForm = function (e) {
    e.preventDefault();
  };

  return (
    <footer id="contact-me" className="relative">
      <div className="innerContainer mb-16 p-8">
        <h2 className="my-8 text-center text-4xl font-bold text-darkBlue"> Contact Me</h2>

        <div className="footerContainer flex flex-col-reverse items-start justify-between gap-16 md:flex-row">
          <div className="myInfo">
            <div className="info1 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-location-dot"></i> <span>Location</span>
              </h3>
              <p>18, HSE ATANDA Badmus Street, Owode Labora, Ajah Lagos, Nigeria</p>
            </div>

            <div className="info2 my-8 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-envelope"></i> <span>Email</span>
              </h3>
              <p>officialayo540@gmail.com</p>
            </div>

            <div className="info3 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-phone"></i> <span>Phone No</span>
              </h3>
              <p>+234-7089111679</p>
            </div>
          </div>

          <form action="" className="flex w-full max-w-[700px] flex-col gap-[1.5rem] rounded-lg bg-white p-10 md:ml-auto md:grid" onClick={handleForm}>
            <div className="firstName flex flex-col items-start">
              <label htmlFor="firstName" className="mb-2 font-medium">
                FirstName
              </label>
              <input type="text" name="firstName" value={form.firstName} placeholder="First Name" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="lastName flex flex-col items-start">
              <label htmlFor="lastName" className="mb-2 font-medium">
                LastName
              </label>
              <input type="text" name="lastName" value={form.lastName} placeholder="Last Name" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="email flex flex-col items-start">
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <input type="email" name="email" value={form.email} placeholder="Email" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="subject flex flex-col items-start">
              <label htmlFor="subject" className="mb-2 font-medium">
                Subject
              </label>
              <input type="text" name="subject" value={form.subject} placeholder="Subject" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="message flex flex-col items-start">
              <label htmlFor="message" className="mb-2">
                Message
              </label>
              <textarea name="message" id="message" value={form.message} placeholder="message" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange}></textarea>
            </div>

            <div className="btn-sect flex flex-col gap-[0.5rem]">
              <button className="mt-4 rounded-md bg-cta px-4 py-3 font-bold text-background hover:border-2 hover:border-dashed hover:border-cta hover:bg-transparent hover:text-cta">
                <i className="fa-solid fa-message"></i> Send Message
              </button>

              <button className="mt-4 rounded-md bg-cta px-4 py-3 font-bold text-background hover:border-2 hover:border-dashed hover:border-cta hover:bg-transparent hover:text-cta">
                <i className="fa-solid fa-envelope"></i> Send an Email Instead!
              </button>
            </div>
          </form>
        </div>
      </div>

      <a href="#home">
        <div className="scroll-to-top absolute bottom-16 right-8 flex h-16 w-16 translate-y-[-40%] items-center justify-center rounded-full bg-navBar sm:translate-y-[-80%] md:translate-y-[0%]">
          <i className="fa-solid fa-angle-up fa-2xl text-background"></i>
        </div>
      </a>

      <div className="copyright--sect w-full bg-navBar p-4 text-center text-background">Built with love using TailwindCSS and React. Copyright ©️ 2023. All rights reserved</div>
    </footer>
  );
}
