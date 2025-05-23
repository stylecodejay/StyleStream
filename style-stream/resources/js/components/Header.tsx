import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">StyleStream</div>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:underline">Dashboard</a>
          </li>
          <li>
            <a href="/send-sms" className="hover:underline">Send SMS</a>
          </li>
          <li>
            <a href="/history" className="hover:underline">Message History</a>
          </li>
          <li>
            <a href="/settings" className="hover:underline">Settings</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
