import * as React from "react";

const App: React.FunctionComponent = () => (
  <div className="flex flex-col sm:flex-row w-full h-full">
    {/* Team Selector  */}
    <nav className="team-selector bg-indigo-900 border-indigo-900 border-r-2 pt-2 text-purple-300 flex-none block">
      <a
        href="/li"
        data-team-id="li"
        className="team-selector__team-button cursor-pointer rounded-lg p-2 pl-4 inline-block sm:block no-underline opacity-25 opacity-100"
      >
        <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
          <img
            className="team-selector__team-logo"
            src="https://gravatar.com/avatar/0ca1be2eaded508606982feb9fea8a2b?s=200&amp;d=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"
            alt="Join the LinkedIn chat"
          />
        </div>
      </a>
      <a
        href="/ms"
        data-team-id="ms"
        className="team-selector__team-button cursor-pointer rounded-lg p-2 pl-4 inline-block sm:block no-underline opacity-25"
      >
        <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
          <img
            className="team-selector__team-logo"
            src="https://gravatar.com/avatar/0ca1be2eaded508606982feb9fea8a2b?s=200&amp;d=https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png"
            alt="Join the Microsoft chat"
          />
        </div>
      </a>
      <div className="team-selector__add-team-button cursor-pointer p-4 inline-block sm:block">
        <div className="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
          <svg
            aria-hidden="true"
            className="fill-current h-10 w-10 block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"></path>
          </svg>
        </div>
      </div>
    </nav>

    {/* Team Sidebar  */}
    <section className="team-sidebar bg-indigo-800 text-purple-300 flex-none md:w-64 sm:w-48 pb-6 flex flex-col">
      <header className="team-sidebar__header text-white mb-2 mt-3 px-4 flex justify-between">
        <div className="flex-auto">
          <h1 className="team-sidebar__team-name font-semibold text-xl leading-tight mb-1 truncate">
            LinkedIn
          </h1>

          <div className="team-sidebar__current-user-indicator flex items-center mb-6">
            <svg
              aria-hidden="true"
              className="h-2 w-2 fill-current text-green-500 mr-2"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10"></circle>
            </svg>
            <span className="team-sidebar__current-user-name text-white opacity-75 text-sm">
              Mike North
            </span>
          </div>
        </div>

        <button disabled>
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-current text-white opacity-25 hidden sm:block"
            viewBox="0 0 20 20"
          >
            <path
              d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </header>

      <nav className="mb-4 flex-1 team-sidebar__channels-list">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <h2 className="opacity-75 text-lg">Channels</h2>

          <button
            className="team-sidebar__join-channel-button text-white"
            aria-label="join a new channel"
            role="button"
          >
            <svg
              aria-hidden="true"
              className="fill-current h-4 w-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
            </svg>
          </button>
        </div>

        <a
          href="/li/general"
          data-channel-id="general"
          className="team-sidebar__channel-link py-1 px-4 font-bold text-gray-200 no-underline block bg-teal-700"
        >
          <span aria-hidden="true">#</span>
          general
        </a>
      </nav>
      <footer className="mx-4 text-white">
        <button className="text-white rounded bg-gray-500 hover:bg-red-800 p-2 team-sidebar__logout-button">
          Logout
        </button>
      </footer>
    </section>

    {/* Channel  */}
    <main className="flex-1 flex flex-col bg-white overflow-hidden channel">
      {/* Channel Header  */}
      <header className="border-b flex px-6 py-2 items-center flex-row channel-header">
        <div className="flex-1">
          <h3 className="text-gray-800 mb-1 font-extrabold channel-header__title">
            <span aria-hidden="true">#</span>
            general
          </h3>

          <h4 className="text-gray-600 text-sm truncate channel-header__description">
            Just some general people generally chatting about general things
          </h4>
        </div>
      </header>

      {/* Channel Message List  */}
      <div
        className="py-4 flex-1 overflow-y-scroll channel-messages-list"
        role="list"
      >
        {/* Message  */}
        <div
          className="flex items-start px-6 py-2 text-sm hover-target hover:bg-gray-100 message"
          role="listitem"
        >
          <figure className="w-10 h-10 rounded overflow-hidden mr-3">
            <img
              className="message__user-avatar"
              src="https://gravatar.com/avatar/96c332a96737c6668906232e39cb16ef?s=200"
              alt=""
            />
          </figure>

          <div className="flex-1">
            <h5 className="text-sm">
              <a
                href="#"
                className="message__user-name text-black font-bold no-underline hover:underline"
              >
                Lisa Huang-North
              </a>
              <span className="sr-only">at</span>
              <time className="message__timestamp text-gray-500 text-xs font-normal">
                Apr 21, 2019 12:21:38 PM
              </time>
            </h5>

            <p className="message__body text-black leading-normal">
              Would you like to join my professional network?
            </p>
          </div>

          <button
            className="message__delete-button border-transparent hover:border-red-400 show-on-hover hover:bg-red-100 border-1 rounded mb-1 pl-3 pr-2 py-1"
            aria-label="permanently delete this message"
          >
            🗑
          </button>
        </div>

        {/* Message  */}
        <div
          className="flex items-start px-6 py-2 text-sm hover-target hover:bg-gray-100 message"
          role="listitem"
        >
          <figure className="w-10 h-10 rounded overflow-hidden mr-3">
            <img
              className="message__user-avatar"
              src="https://en.gravatar.com/userimage/4584631/86f74019598950f6efd7b1b8e493259a.jpeg"
              alt=""
            />
          </figure>

          <div className="flex-1">
            <h5 className="text-sm">
              <a
                href="#"
                className="message__user-name text-black font-bold no-underline hover:underline"
              >
                Mike North
              </a>
              <span className="sr-only">at</span>
              <time className="message__timestamp text-gray-500 text-xs font-normal">
                Apr 21, 2019 12:23:4 PM
              </time>
            </h5>

            <p className="message__body text-black leading-normal">
              Hello developer, I looked at your profile and am impressed by your
              14 years of COBOL experience. Are you happy in your current role?
            </p>
          </div>

          <button
            className="message__delete-button border-transparent hover:border-red-400 show-on-hover hover:bg-red-100 border-1 rounded mb-1 pl-3 pr-2 py-1"
            aria-label="permanently delete this message"
          >
            🗑
          </button>
        </div>
      </div>

      {/* Channel Footer  */}
      <footer className="pb-6 px-4 flex-none channel-footer">
        <form
          className="flex w-full rounded-lg border-2 border-gray overflow-hidden"
          aria-labelledby="message-label"
        >
          <p id="message-label" className="sr-only">
            Message Input
          </p>

          <button
            className="text-3xl text-gray border-r-2 border-gray p-2"
            aria-label="add a file to this message"
          >
            <svg
              aria-hidden="true"
              className="fill-current h-6 w-6 block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"></path>
            </svg>
          </button>

          <label htmlFor="message-input" className="sr-only">
            Type a message to this channel
          </label>

          <input
            id="message-input"
            className="channel-footer__message-input w-full px-4"
            placeholder="Message #general"
            type="text"
          />

          <button
            disabled
            className="channel-footer__message-send-button font-bold uppercase opacity-50 bg-gray-600 text-white border-teal-600 p-2"
          >
            SEND
          </button>
        </form>
      </footer>
    </main>
  </div>
);

export default App;
