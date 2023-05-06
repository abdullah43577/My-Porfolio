import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from './helper';

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

    const isFilledCorrectly = Object.values(form);

    if (isFilledCorrectly.includes('')) {
      alert('please make sure you filled all required inputs correctly');
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
      (response) => {
        alert('Thanks for getting in touch');
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  const [date, setDate] = useState(new Date());

  return (
    <footer id="contact-me" className="relative">
      <div className="innerContainer mx-auto mb-16 max-w-[1300px] p-8">
        <h2 className="my-8 text-center text-4xl font-bold text-darkBlue"> Contact Me</h2>

        <div className="footerContainer flex flex-col-reverse items-center justify-between gap-16 md:flex-row">
          <div className="myInfo flex flex-col gap-8">
            <div className="info1 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-user"></i> <span>Name</span>
              </h3>
              <p className="text-veryDarkBlue">Abdullah Ayoola</p>
            </div>

            <div className="info3 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-envelope"></i> <span>Email</span>
              </h3>
              <p className="text-veryDarkBlue">officialayo540@gmail.com</p>
            </div>

            <div className="info4 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-phone"></i> <span>Phone No</span>
              </h3>
              <p className="text-veryDarkBlue">+234-7089111679</p>
            </div>

            <div className="info2 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-location-dot"></i> <span>Location</span>
              </h3>
              <p className="text-veryDarkBlue">Lagos, Nigeria</p>
            </div>

            <div className="info5 flex items-center gap-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-darkBlue">
                <i className="fa-solid fa-share-from-square"></i> <span>Social</span>
              </h3>
              <div className="socialIconContainer flex items-center gap-3">
                <a href="https://twitter.com/officialayo540" target="_blank">
                  <div className="circle flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-navBar text-background hover:border-2 hover:border-dashed hover:border-navBar hover:bg-transparent hover:text-navBar">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                </a>

                <a href="https://github.com/abdullah43577" target="_blank">
                  <div className="circle flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-navBar text-background hover:border-2 hover:border-dashed hover:border-navBar hover:bg-transparent hover:text-navBar">
                    <i className="fa-brands fa-github"></i>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/ayo540/" target="_blank">
                  <div className="circle flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-navBar text-background hover:border-2 hover:border-dashed hover:border-navBar hover:bg-transparent hover:text-navBar">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <form action="" className="flex w-full max-w-[700px] flex-col gap-[1.5rem] rounded-lg bg-white p-10 md:ml-auto md:grid" onSubmit={handleForm}>
            <div className="firstName flex flex-col items-start">
              <label htmlFor="firstName" className="mb-2 font-medium text-veryDarkBlue">
                First Name
              </label>
              <input type="text" name="firstName" value={form.firstName} placeholder="First Name" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="lastName flex flex-col items-start">
              <label htmlFor="lastName" className="mb-2 font-medium text-veryDarkBlue">
                Last Name
              </label>
              <input type="text" name="lastName" value={form.lastName} placeholder="Last Name" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="email flex flex-col items-start">
              <label htmlFor="email" className="mb-2 font-medium text-veryDarkBlue">
                Email
              </label>
              <input type="email" name="email" value={form.email} placeholder="example@example.com" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="subject flex flex-col items-start">
              <label htmlFor="subject" className="mb-2 font-medium text-veryDarkBlue">
                Subject
              </label>
              <input type="text" name="subject" value={form.subject} placeholder="Subject" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange} />
            </div>

            <div className="message flex flex-col items-start">
              <label htmlFor="message" className="mb-2 font-medium text-veryDarkBlue">
                Message
              </label>
              <textarea name="message" id="message" value={form.message} placeholder="message" className="border-gray w-full border-2 px-4 py-3 outline-none" onChange={handleFormChange}></textarea>
            </div>

            <div className="flex items-center">
              <button className="mt-4 w-full rounded-md border-2 bg-cta px-4 py-3 font-bold text-background hover:border-dashed hover:border-cta hover:bg-transparent hover:text-cta">
                <i className="fa-solid fa-envelope"></i> Get In Touch
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

      <div className="copyright--sect w-full bg-navBar p-4 text-center text-background">Copyright &copy; {date.getFullYear()}. Built using TailwindCSS and React. All rights reserved</div>
    </footer>
  );
}
