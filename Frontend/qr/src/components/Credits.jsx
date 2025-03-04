import React, { useState } from "react";

function Credits() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-gray-400 text-sm hover:text-white transition-all duration-200"
        onClick={() => setIsOpen(true)}
      >
        Credits
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg max-w-2xl w-full relative">
            <h2 className="text-xl bg-gray-700 p-2 rounded-lg font-semibold mb-4">
              Credits & Attributions
            </h2>
            <div className="text-sm max-h-60 overflow-y-auto">
              <p>
                <strong>Image and Icon Credits:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Image by{" "}
                  <a
                    href="https://pixabay.com/users/jensenartofficial-31380959/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7819654"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Jensen Art Co
                  </a>{" "}
                  from{" "}
                  <a
                    href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7819654"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Pixabay
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freepik.com/icon/hearts_470366#fromView=family&page=1&position=52&uuid=adbbdbb7-5daa-4b7e-a2fd-e7de49f1d181"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Love Icon by Freepik
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freepik.com/icon/friendship_2058258#fromView=family&page=1&position=1&uuid=c5e3443e-fdbf-4973-a435-11579911041f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Friends Icon by Freepik
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freepik.com/icon/giftbox_1140033#fromView=family&page=1&position=0&uuid=b936cc1f-27c0-4978-893c-74f7f0fb19d7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Gift Icon by Freepik
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freepik.com/icon/detective-story_5318971#fromView=family&page=1&position=57&uuid=b942e053-1c0f-478d-a878-67a808dfac60"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Secret Icon by Freepik
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freepik.com/icon/multitasking_5759337#fromView=family&page=1&position=4&uuid=fb224def-9175-42d7-9d60-a4d2c3f443bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Professional Icon by Freepik
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freepik.com/icon/masquerade_9305788#fromView=family&page=1&position=31&uuid=63754ecc-d765-43de-89bf-537889b6c2cf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Fun Icon by Freepik
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freepik.com/icon/smile_2341813#fromView=family&page=1&position=3&uuid=b1b5c962-a4b4-4655-b02d-49288c73aa2e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Icon by Freepik
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Credits;