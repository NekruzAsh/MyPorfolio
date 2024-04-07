"use client";
import React from "react";
import "../projects.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";


const testProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: "20px 40px 100px 60px",
  });

  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  return (
    <div id="projects" className="project-container">
      <motion.div
        className="max-w-3xl mt-44"
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={textVariants}
      >
        <h2 className="text-[#e8ddff] pl-7 pr-7 md:pl-6 md:pr-0 py-4 mt-8 flex items-center">
          <span className=" text-[#64feda]">02.&nbsp;</span> My Work
          <hr className="border-[#251f41] border-t-1 ml-4 flex-grow" />
        </h2>
        <p className="mb-16 text-[#aba6c4] text-[17px] pl-7 pr-7 md:pl-6 md:pr-0 max-w-3xl leading-[30px] z-10 relative">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </motion.div>

      {/* Chat Application */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">Most recent project</div>
          <h4 className="project-title font-medium">
            <a
              href="https://chatapp-3a0e9.web.app/"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              Chat Application
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Simple chat application that allows users to signin with their
              Google account and send messages. Developed a{" "}
              <span className="text-[#64feda]">Firebase server</span> to store
              user data, messages, and to retrieve chat messages in real-time.
              Implemented{" "}
              <span className="text-[#64feda]">Firebase Authentication</span> to
              authenticate users through Google accounts.
            </p>
            <ul className="font-[15px]">
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Firebase</li>
            </ul>
            <div className="space-x-2 flex justify-end mt-4">
                  <a
                    href="https://github.com/NekruzAsh/Chat-app.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://chatapp-3a0e9.web.app/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
          </div>
        </div>

        <div className="project-img">
          <img src="/images/chat.png" alt="chat application image" />
        </div>
      </div>

      {/* QuizGen AI */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">Hackathon Project</div>
          <h4 className="project-title font-medium">
            <a
              href="https://nekruzash.github.io/QuizGenAI/"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              QuizGenAI
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Tool built for teachers and students to generate quiz questions
              using AI and user text input. Developed with{" "}
              <span className="text-[#64feda]">Cohere AI API</span> and
              JavaScript to fetch data from the API, read user input and
              generate questions based on the content.
            </p>
            <ul className="font-[15px]">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Cohere AI</li>
            </ul>
            <div className="space-x-2 flex justify-start mt-4">
                  <a
                    href="https://github.com/NekruzAsh/QuizGen.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://nekruzash.github.io/QuizGenAI/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
          </div>
        </div>

        <div className="project-img">
          <img src="/images/quizgenn.png" alt="QuizGenAI image" />
        </div>
      </div>

      {/* Todo APP */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">CRUD Operations Project</div>
          <h4 className="project-title font-medium">
            <a
              href="https://to-do-app-weld-seven.vercel.app/"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              To-do Notes App
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Single page to-do notes web application with CRUD operations that
              allow users to create, delete and mark completed tasks. Developed
              with <span className="text-[#64feda]">NextJS and JavaScript</span>{" "}
              using ternary operators and event handlers.
            </p>
            <ul className="font-[15px]">
              <li>Next.js</li>
              <li>React.js</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
            </ul>
            <div className="space-x-2 flex justify-end mt-4">
                  <a
                    href="https://github.com/NekruzAsh/To-Do-App.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://to-do-app-weld-seven.vercel.app/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
          </div>
        </div>

        <div className="project-img">
          <img src="/images/todoapp.png" alt="chat application image" />
        </div>
      </div>

      {/* Forum Website */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">Full-Stack Project</div>
          <h4 className="project-title font-medium">
            <a
              href="https://forumwebsite.onrender.com"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              Forum Website
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Forum website clone similar to{" "}
              <a
                className="text-[#64feda] hover:text-[#aba6c4] duration-500 transition"
                target="_blank"
                href="https://www.reddit.com/"
              >
                Reddit.com
              </a>{" "}
              where users can signup and login using existing accounts.
              Implemented{" "}
              <span className="text-[#64feda]">Bcrypt algorithm</span> to hash
              passwords and store them in the{" "}
              <span className="text-[#64feda]">MongoDB</span>.
              <br />
              <span className="text-[#64feda]"> Try it out:</span>
              <br />
              Username: username
              <br />
              Password: 1234
            </p>
            <ul className="font-[15px]">
              <li>Express</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>MongoDB</li>
            </ul>
            <div className="space-x-2 flex justify-start mt-4">
                  <a
                    href="https://github.com/NekruzAsh/forumwebsite.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://forumwebsite.onrender.com"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
          </div>
        </div>

        <div className="project-img">
          <img src="/images/forum.png" alt="forum website image" />
        </div>
      </div>

      {/* Tic Tac Toe */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">First Python Project</div>
          <h4 className="project-title font-medium">
            <a
              href="https://github.com/NekruzAsh/TicTacToeAI.git"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              TicTacToe AI
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Tic-Tac-Toe game with two different game modes: Player Vs. Player
              and Player Vs. AI. Developed with Python's{" "}
              <span className="text-[#64feda]">Tkinter GUI</span> library and{" "}
              <span className="text-[#64feda]">Minimax algorithm</span> to make
              an unbeatable AI opponent. Researched the Minimax algorithm for AI
              decision-making, considering different possible outcomes.
            </p>
            <ul className="font-[15px]">
              <li>Python</li>
              <li>Minimax</li>
            </ul>
            <div className="space-x-2 flex justify-end mt-4">
                  <a
                    href="https://github.com/NekruzAsh/TicTacToeAI.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                </div>
          </div>
        </div>

        <div className="project-img">
          <img src="/images/tictactoe.png" alt="Amazon Affiliate image" />
        </div>
      </div>

      {/* Amazon Affiliate */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">Marketing and Affiliate Project</div>
          <h4 className="project-title font-medium">
            <a
              href="https://nekruzash.github.io/amazonaffiliate/"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              Amazon Affiliate
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Article website used to promote Amazon products specifically
              technology category and earn commission from{" "}
              <span className="text-[#64feda]">Amazon Affiliate</span> marketing
              program. Integrated different{" "}
              <span className="text-[#64feda]">SEO techniques</span> to rank
              higher in search results.
            </p>
            <ul className="font-[15px]">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="space-x-2 flex justify-start mt-4">
                  <a
                    href="https://github.com/NekruzAsh/amazonaffiliate.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://nekruzash.github.io/amazonaffiliate/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
          </div>
        </div>

        <div className="project-img">
          <img src="/images/amazon.png" alt="chat application image" />
        </div>
      </div>
    </div>
  );
};

export default testProjects;