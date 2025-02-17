import React from 'react'
import Image from "next/image";

const Namespace = () => {
  return (
    <div className='text-black-100 dark:text-white'>
        <div className="flex justify-center items-center">
            <Image 
                src="/projects/name-space/name-space-mockup2.png" 
                alt="meu-content1"
                width={600}
                height={500}
                className="mt-16 object-cover mb-20 md:mb-0 h-auto"
            />
        </div>
        <h3 className="text-lg font-semibold mt-20 mb-4">Genealogy Visualization</h3>
        <ul className="list-disc pl-8">
            <li>
                <strong className="font-medium text-md">Data Generation</strong>
                <p className="text-sm mt-2 mb-4 leading-6">
                Data generated by user interactions is systematically appended to the respective family name tree, with entries gradually diminishing in size over a 30-second period. This thoughtful design choice ensures user-friendly data inspection.
                </p>
            </li>
            <li>
                <strong className="font-medium text-md">Genealogy Information Structure</strong>
                <p className="text-sm mt-2 mb-4 leading-6">
                All names have been meticulously cataloged in a CSV file, enabling the visualization of over 300 genealogies. The connections between generations are represented by solid lines, facilitating a comprehensive understanding of each heritage. This design concept is employed at a rate of 0.3 times per minute, akin to the cosmic rhythm.
                </p>
            </li>
            <li>
                <strong className="font-medium text-md">User Input Interface</strong>
                <p className="text-sm mt-2 leading-6">
                Through the iPad interface, users input their first and last names. The algorithm employed distinguishes between these names, and subsequently, the first name is visually positioned within the family tree as a particle.
                </p>
            </li>
        </ul> 
        <div className="flex flex-row justify-center items-center">
            <Image 
                src="/projects/name-space/name-space-1.gif" 
                alt="meu-content1"
                width={600}
                height={500}
                className="mt-16 object-cover mb-20 md:mb-0 h-auto"
            />
        </div>
        <p className="text-sm mt-12 mb-4 leading-6">
        Within the &quot;Name Space&quot; project, we have designed an algorithm that utilizes the last name to pinpoint the corresponding family tree. Following this, the user&apos;s first name undergoes a transformation into a particle and navigates a randomized path to arrive at its designated location within the family tree. This culminates in a visually captivating and interactive experience, providing users with a unique and engaging method to explore their family heritage. In terms of front-end development, we harnessed P5.JS as our chosen framework.
        </p>



<h3 className="text-lg font-semibold mt-24 mb-10">Data Processing</h3>
        <div className="pl-8">
            <strong className="font-semibold text-md">Raw Data</strong>
            <div className="flex flex-row justify-center items-center">
                <Image 
                    src="/projects/name-space/name-space-rawdata.png" 
                    alt="meu-content1"
                    width={600}
                    height={500}
                    className="mt-10 object-cover mb-20 md:mb-0 h-auto"
                />
            </div>
            <p className="text-sm mt-10 mb-24 leading-6">
            This is one of the genealogies within the NAME SPACE dataset. It is presented in a radial format, and it would be beneficial to display it as an expandable visualization.
            </p>

            <strong className="font-semibold text-md ">Data Processing</strong>
            <div className="flex flex-row justify-center items-center">
                <Image 
                    src="/projects/name-space/name-space-method.png" 
                    alt="namespace-content1"
                    width={600}
                    height={500}
                    className="mt-10 object-cover mb-20 md:mb-0 h-auto"
                />
            </div>
            <p className="text-sm mt-10 mb-20 leading-6">
            Family trees typically depict the oldest generation at the top and the most recent generation at the bottom, portraying the passage of time from top to bottom and from left to right. As the family tree expands from older to newer generations, the number of members increases, resulting in a vertical and radial structure that is difficult to reverse. This radial structure allows for a clear understanding of the flow of data, with movement from the center to the outside. Therefore, to display all family tree members effectively, the best approach is to arrange them in a circular format with the father positioned at the center of the circle.
            <br/><br/><br/>
            Typically, family trees display the oldest generation at the top and the most recent generation at the bottom. The layout of the family tree represents the flow of time from top to bottom and from left to right. As the number of family members increases from older to newer generations, family trees tend to take on a vertical and radial structure that cannot be easily reversed. This radial structure, with movement from the center to the outside, facilitates a clear understanding of the data flow. Thus, the most effective way to showcase all family tree members is by arranging them in a circular format with the father positioned at the center of the circle.
            <br/><br/><br/>
            To effectively organize genealogy data, a male-oriented approach is typically used, prioritizing the father figure and identifying family members and their steps in the family tree. With over 300 genealogies to manage, each genealogy is given a unique three-digit code. For instance, Park&apos;s genealogy is assigned 001, Lee is 002, and Kim is 003. The first family member to start the family tree is assigned the unique number 01, and subsequent family members are assigned a code that comprises the father&apos;s Individuala_Id and the order in which they were born. For example, if Park-Sijo has two children, his first son&apos;s code would be &quot;00101 + 01=0010101&quot;, and his second son&apos;s code would be &quot;00101 + 02=0010102&quot;. By using this method, not only can we determine the family_step from the length of Individuala_Id, but we can also identify the number of descendants in the same generation and their father&apos;s information through the unique Individuala_Id.
            </p>

            <strong className="font-semibold text-md">Exhibition</strong>
            <div className="flex flex-row justify-center items-center">
            <Image 
                src="/projects/name-space/name-space-exhibition.png" 
                alt="namespace-content1"
                width={600}
                height={500}
                className="mt-16 object-cover mb-20 md:mb-0 h-auto"
            />
            </div>
        </div> 
    </div>
  )
}

export default Namespace