import React, { Suspense } from 'react';
import { ReactComponent as SignInSvg } from '../../assets/signIn.svg';
import { ReactComponent as GoogleSvg } from '../../assets/google.svg';
import { ReactComponent as TwitterSvg } from '../../assets/twitter.svg';
import { ReactComponent as FacebookSvg } from '../../assets/facebook.svg';
import Spinner from '../../components/spinner/Spinner';

function SignIn() {
    const linkClass = 'px-7 py-3 mb-4 font-bold text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-evenly items-center';
    return (
        <section className="h-screen">
            <div className="px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-1/2 sm:h-full g-6 text-gray-800">
                    <div className="md:w-1/2 lg:w-1/2 mb-12 md:mb-0">
                        <Suspense fallback={<Spinner />}>
                            <SignInSvg width={400} />
                        </Suspense>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 lg:ml-20">
                        <form>
                            <a
                                className={`text-black ${linkClass}`}
                                href="#!"
                                style={{ backgroundColor: 'mintcream', }}
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <Suspense fallback={<Spinner />}>
                                    <GoogleSvg width={30} height={30} />
                                </Suspense>
                                <label>  Continue with Google</label>
                            </a>
                            <a
                                className={`text-white ${linkClass}`}
                                href={`http://localhost:3001/login`}
                                style={{ backgroundColor: '#3b5998' }}
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <Suspense fallback={<Spinner />}>
                                    <FacebookSvg width={20} />
                                </Suspense>
                                <label>Continue with AniList</label>
                            </a>
                            <a
                                className={`text-white ${linkClass}`}
                                style={{ backgroundColor: '#55acee' }}
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                href={`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GITHUB_REDIRECT_URL}`}
                            >
                                <Suspense fallback={<Spinner />}>
                                    <TwitterSvg width={30} />
                                </Suspense>
                                <label>   Continue with Github</label>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
