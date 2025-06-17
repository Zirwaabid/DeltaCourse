export default function Card() {
    return <>
        <div className="flex text-center border-indigo-600 w-1/2 ">
            <div className="">
                {/* quote */}
                <div>
                    <p>News you can Trust.</p>
                </div>
                {/* main */}
                <div>
                    <p>Stay up to date with the Latest!</p>
                    <p>Subscribe to our newsletter for the latest news straight into your inbox.</p>

                    <input type="text" placeholder="your@email.com" />
                    <br />
                    <button>Subscribe Now</button>

                    <p>We value your privacy</p>
                </div>
            </div>
        </div>


    </>
}