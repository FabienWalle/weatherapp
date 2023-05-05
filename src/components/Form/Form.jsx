// eslint-disable-next-line react/prop-types
const Form = ({ title, addUser, newEmail, addEmail, newPassword, addPassword }) => {
    return (
        <div className="container flex justify-center mx-auto">
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-nonev">
                <h3 className="pt-4 text-2xl text-center">{title}</h3>
                <form
                    onSubmit={addUser}
                    className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" label="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={newEmail}
                            onChange={addEmail}
                        />
                    </div>
                    <div className="mb-4">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" label="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                value={newPassword}
                                onChange={addPassword}
                            />
                            <p className="text-xs italic text-red-500">Please choose a password.</p>
                        </div>
                    </div>
                    <div className="mb-6 text-center">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register Account
                        </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                        <a
                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="text-center">
                        <a
                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            href="./index.html"
                        >
                            Already have an account? Login!
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Form