
import React from 'react';
import Image from 'next/image';

const Camera = () => {
    const cameraData = [
        {id: 1, name: "Canon Eos M50 kit Mark", price: 215000, image: '/canon.png', description: "This is a Canon camera"},
        {id: 2, name: "Sony Alpha A7", price: 570000, image: '/sony.png', description: "This is a Sony camera"},
        {id: 3, name: "GoPro Hero 11", price: 122000, image: '/GoPro.png', description: "This is a GoPro camera"},
        {id: 4, name: "Dji Mini 3 Pro", price: 154999, image: '/Dji Mini.png', description: "This is a DJI Mini camera"},
        {id: 5, name: "Nikon D5600 Kit", price: 179999, image: '/Nikon.png', description: "This is a Nikon camera"},
        {id: 6, name: "Fujifilm X-S10", price: 257000, image: '/Fujifilm.png', description: "This is a Fujifilm camera"}
    ];

    return (
        <div className="cameras grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
            {cameraData.map(camera => (
                <div key={camera.id} className="camera-card bg-white p-5 rounded-md shadow-md text-center">
                    <Image 
                        src={camera.image} 
                        alt={camera.name} 
                        width={200} 
                        height={200} 
                        className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" 
                    />
                    <h3 className="mt-4 text-2xl font-bold">{camera.name}</h3>
                    <p className="text-gray-500">{camera.description}</p>
                    <div className="price text-blue-500 text-xl font-semibold mt-2">${camera.price}</div>
                    <button className="mt-7 px-4 py-2 text-sm bg-blue-500 text-white rounded-md">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Camera;
