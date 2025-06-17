
export default function Typography() {
    return <>
        <div>
            <h1 className="text-6xl italic text-center font-bold">this is h1</h1>
            <h2 className="text-3xl font-light">This is h2</h2>
            <h3 className="text-2xl font-thin border border-indigo-600 ">This is h3</h3>
            <p className="font-sans ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quidem temporibus laborum minima officiis repellat vero alias voluptatum recusandae iusto inventore maxime quasi, voluptatem eveniet perferendis blanditiis beatae omnis.</p>

            <p className="font-serif bg-orange-300 w-sm h-30">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quidem temporibus laborum minima officiis repellat vero alias voluptatum recusandae iusto inventore maxime quasi, voluptatem eveniet perferendis blanditiis beatae omnis.</p>

            <p className="font-mono text-white bg-purple-700 h-50 w-1/2 ml-4 p-8 md:bg-red-500 lg:bg-purple-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quidem temporibus laborum minima officiis repellat vero alias voluptatum recusandae iusto inventore maxime quasi, voluptatem eveniet perferendis blanditiis beatae omnis.</p>
            <div className="border rounded-tl-lg w-9 bg-pink-500">one</div>

        </div>
        <div>
            {/* Apply directive */}
            <div className="box border-red-600">one</div>
            <div className="box border-green-600">two</div>
            <div className="box border-purple-600">three</div>
        </div>
    </>
}