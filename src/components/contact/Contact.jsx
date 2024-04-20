import React from "react";

const Contact = () => {
  return (
    <div>
      <h5 className="text-7xl text-bold">
        Contact<span className="text-cyan-300 text-9xl ml-2">.</span>
      </h5>
      <div className="sm:w-1/2 mt-8">
        <p className="text-cyan-100 text-xl text-semibold">
          Feel free to email me if you'd like to connect! Alternatively, you can
          reach out via{" "}
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 text-cyan-300  text-2xl text-bold transition duration-250"
          >
            LinkedIn
          </a>{" "}
          or <span className="text-cyan-300 text-2xl text-bold">WhatsApp</span>{" "}
          if you prefer.
        </p>
        <div className="my-20 flex flex-col sm:flex-row gap-20">
          <div>
            <h5 className="text-cyan-300 text-3xl mb-4">
              Email
              <span className="text-cyan-300 text-6xl ml-2 opacity-0">@</span>
            </h5>
            <a
              href="mailto:doulsonhwang@gmail.com"
              className="text-cyan-500 hover:text-cyan-600 font-semibold"
            >
              doulsonhwang@gmail.com
            </a>
          </div>
          <div>
            <h5 className="text-cyan-300  text-3xl mb-4">
              Phone no<span className="text-cyan-300 text-6xl ml-2">.</span>
            </h5>
            <div className="text-cyan-500 flex justify-between">
              <div>
                {" "}
                <div>
                  <a
                    href="https://wa.me/+60123480753"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +6012 3480 753
                  </a>
                </div>
              </div>
              <div className="ml-5">(MY)</div>
            </div>
            <div className="text-cyan-600 flex justify-between">
              <div>
                <a
                  href="https://wa.me/+6586199926"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +65 8619 9926
                </a>
              </div>
              <div>(SG)</div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="mt-10 text-cyan-900 font-semibold"> © Doulson 2024</div>
    </div>
  );
};

export default Contact;
