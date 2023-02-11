import Card from "./Card"
import Logos from "./Logos"

const AboutMe = () => {
    return (

        <div className='p-10'> 
            <div className="font-serif font-medium text-2xl">Who Am I?</div>
            <div className="font-serif w-full mt-5 font-thin text-lg">
                I am a highly motivated and passionate web developer with a
                strong background in the MERN stack, Next.js, Tailwind CSS, Android development,
                Flutter, and Unity 2D. I have a deep understanding of these technologies and how to
                use them to build high-quality, scalable, and user-friendly applications.
            </div>
            <div className="flex flex-wrap w-full mt-10">
                <Card imgSrc="/android_icon.png" borderColor="border-android" title="Android Development" />
                <Card imgSrc="/flutter_icon.png" borderColor="border-flutter" title="Flutter Development" />
                <Card imgSrc="/react_icon.png" borderColor="border-react" title="MERN Stack" />
                <Card imgSrc="/unity_icon.png" borderColor="border-unity" title="Unity2D Development" />
                <Card imgSrc="/figma.png" borderColor="border-figma" title="UI Design" />
            </div>
            <div className="font-serif mt-20 mb-10 font-medium text-2xl">Languages</div>
            <Logos />
        </div>
    )
}

export default AboutMe