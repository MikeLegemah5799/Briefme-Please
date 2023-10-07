import { logo } from '../assets';

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <div className="flex justify-between items-center">
                    <img src={logo} alt="Brief Me Please Logo" className="w-14 object-contain" />
                    <span className="font-bold text-3xl ml-1">Brief Me Please</span>
                </div>
            </nav>
            <h1 className="head_text">
                Revolutionize Your Reading: <br />
                <span className="blue_gradient">Introducing The Best Article Summarization App!</span>
            </h1>
            <h2 className="desc">
                Experience the future of efficient reading with our groundbreaking app powered by GPT-4, the latest in artificial intelligence technology. Say goodbye to information overload and lengthy articles; our app simplifies your reading process by summarizing complex content into concise, easy-to-understand paragraphs.<br /> Whether you're a student looking to grasp key concepts quickly or a professional trying to stay informed in a fast-paced world, our app provides you with comprehensive, coherent, and accurate summaries of articles across various topics. Embrace the future of knowledge consumption and make informed decisions faster than ever before with our GPT-4-powered article summarization app.
            </h2>
        </header>
    )
}

export default Hero;