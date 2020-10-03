import * as React from 'react';

const Message: React.FunctionComponent = () => (
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
        <time className="message__timestamp text-gray-500 text-xs font-normal ml-1">
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
);

export default Message;
