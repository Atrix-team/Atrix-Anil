import React from 'react'

const Testing = () => {
    return (
        <div className="container mx-auto p-4 space-y-8">
            {/* Row 1 - Normal */}
            <div className="flex flex-col md:flex-row items-center border">
                <div className="w-full md:w-1/2 p-4">
                    <img src="https://via.placeholder.com/300" alt="Image 1" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-xl font-bold">Section 1</h2>
                    <p>Some content goes here.</p>
                </div>
            </div>

            {/* Row 2 - Reversed */}
            <div className="flex flex-col md:flex-row-reverse items-center border">
                <div className="w-full md:w-1/2 p-4">
                    <img src="https://via.placeholder.com/300" alt="Image 2" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-xl font-bold">Section 2</h2>
                    <p>Some content goes here.</p>
                </div>
            </div>

            {/* Row 3 - Normal */}
            <div className="flex flex-col md:flex-row items-center border">
                <div className="w-full md:w-1/2 p-4">
                    <img src="https://via.placeholder.com/300" alt="Image 3 " className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-xl font-bold">Section 3</h2>
                    <p>Some content goes here.</p>
                </div>
            </div>
        </div>




    )
}

export default Testing