import React, { Suspense } from 'react';
import { ReactComponent as SignInSvg } from '@assets/signIn.svg';
import { ReactComponent as GoogleSvg } from '@assets/google.svg';
import { ReactComponent as GithubSvg } from '@assets/github.svg';
import { ReactComponent as AnilistSvg } from '@assets/anilist.svg';
import Spinner from 'src/components/spinner/Spinner';
import { GITHUB_LOGIN_URL, REST_API_URL } from '@config/constants';

const COMMON_CLASSNAMES =
  'px-7 py-3 mb-4 font-bold text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-evenly items-center';

function SignIn() {
  return (
    <section className="h-screen">
      <div className="h-full px-6 py-12">
        <div className="g-6 flex h-1/2 flex-wrap items-center justify-center text-gray-800 sm:h-full">
          <div className="mb-12 md:mb-0 md:w-1/2 lg:w-1/2">
            <Suspense fallback={<Spinner />}>
              <SignInSvg width={400} />
            </Suspense>
          </div>
          <div className="md:w-1/2 lg:ml-20 lg:w-1/3">
            <form>
              <a
                className={`bg-blue-500 text-white ${COMMON_CLASSNAMES}`}
                href={`${REST_API_URL}/login`}
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <Suspense fallback={<Spinner />}>
                  <AnilistSvg width={20} />
                </Suspense>
                <label>Continue with AniList</label>
              </a>
              <a
                className={`bg-blue-700 text-white ${COMMON_CLASSNAMES}`}
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href={GITHUB_LOGIN_URL}
              >
                <Suspense fallback={<Spinner />}>
                  <GithubSvg width={30} />
                </Suspense>
                <label> Continue with Github</label>
              </a>
              <a
                className={`cursor-not-allowed text-gray-300 hover:text-gray-300 ${COMMON_CLASSNAMES}`}
                href="#!"
                style={{ backgroundColor: 'mintcream' }}
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                aria-disabled="true"
              >
                <Suspense fallback={<Spinner />}>
                  <GoogleSvg width={30} height={30} color="gray" />
                </Suspense>
                <label> Continue with Google</label>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
