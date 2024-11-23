import Stars from "/assets/images/illustration-five-stars.webp";
import CreatePost from "/assets/images/illustration-create-post.webp";
import ContentAI from "/assets/images/illustration-ai-content.webp";
import MultiplePlatforms from "/assets/images/illustration-multiple-platforms.webp";
import ScheduleCalendar from "/assets/images/illustration-schedule-posts.webp";
import ConsistantSchedule from "/assets/images/illustration-consistent-schedule.webp";
import GrowthAudiance from "/assets/images/illustration-audience-growth.webp";
import GrowChart from "/assets/images/illustration-grow-followers.webp";
export default function App() {
    return (
        <div
            data-testid="test-app"
            className="w-full flex items-center justify-center py-12 px-4 font-DM"
        >
            {/* gap-6 */}
            <main className="flex flex-col md:flex-row-reverse gap-6 h-[42rem]">
                {/* main */}
                <div className="md:grid flex flex-col grid-rows-3 grid-cols-3 max-w-[42rem] gap-6">
                    <TenX />
                    <Schedule />
                    <Manage />
                    <Maintain />
                    <Faster />
                    <Grow />
                </div>
                {/* left */}
                <div className="md:grid flex flex-col grid-rows-2 gap-6 md:max-w-[13rem] w-full rounded-md">
                    <Create />
                    <AI />
                </div>
            </main>
        </div>
    );
}

function Create() {
    return (
        <div className="bg-c_Yellow_100 flex flex-col justify-center px-6 py-8 gap-6">
            <h2 className="font-medium text-3xl leading-7 tracking-tight">
                Create and schedule content{" "}
                <span className="text-c_Purple_500 italic">quicker.</span>
            </h2>
            <div>
                <img
                    src={CreatePost}
                    alt="create-post"
                    className="md:h-auto h-24"
                />
            </div>
        </div>
    );
}

function AI() {
    return (
        <div className="bg-c_Yellow_500 rounded-md px-6 py-6 gap-6 flex flex-col justify-between  md:m-0 mb-12">
            <h2 className="font-medium text-3xl tracking-tighter leading-7">
                Write your content using AI.
            </h2>
            <div>
                <img
                    src={ContentAI}
                    alt="ai content"
                    className="md:h-auto h-52"
                />
            </div>
        </div>
    );
}

function TenX() {
    return (
        <div className="col-span-2 row-span-1 rounded-md bg-c_Purple_500 px-4 py-8 flex justify-center items-center flex-col gap-4">
            <h1 className="text-white text-[2.75rem] font-medium text-center leading-[3rem]">
                Social Media <span className="text-c_Yellow_500">10x</span>{" "}
                <span className="italic">Faster</span> with AI
            </h1>
            <div>
                <div className="flex justify-center text-c_Yellow_500 gap-2 text-lg">
                    <img src={Stars} alt="stars" className="h-5" />
                </div>
                <span className="text-white text-xs">
                    Over 4,000 5-star reviews
                </span>
            </div>
        </div>
    );
}

function Manage() {
    return (
        <div className="bg-white rounded-md relative flex flex-col justify-between p-6">
            <div className="overflow-hidden max-w-full z-10">
                <div className="aspect-[633/164] md:h-14">
                    <img
                        src={MultiplePlatforms}
                        alt="multiple platforms"
                        className=""
                    />
                </div>
            </div>
            <div className="">
                <h3 className="font-medium text-2xl leading-6">
                    Manage multiple accounts and platforms.
                </h3>
            </div>
        </div>
    );
}

function Maintain() {
    return (
        <div className="bg-c_Yellow_500 rounded-md flex flex-col px-6 pt-6 overflow-hidden gap-4 md:h-auto h-52">
            <h3 className="text-2xl font-medium tracking-tighter leading-6">
                Maintain a consistent posting schedule.
            </h3>
            <div>
                <img src={ConsistantSchedule} alt="consistent schedule" className="md:h-auto h-36" />
            </div>
        </div>
    );
}

function Faster() {
    return (
        <div className="bg-white rounded-md flex flex-col p-6 gap-4">
            <span className="text-[3rem] font-medium leading-[3rem]">
                {">"}56%
            </span>
            <p className="md:text-sm text-lg">faster audience growth</p>
            <div className="flex-grow"></div>
            <div>
                <img
                    src={GrowthAudiance}
                    alt="growht audiance"
                    className="md:h-12 h-16"
                />
            </div>
        </div>
    );
}

function Grow() {
    return (
        <div className="col-span-2 bg-c_Purple_500 rounded-md text-white flex md:flex-row flex-col p-6 md:gap-2 gap-8 items-center">
            <img src={GrowChart} alt="grow chart" className="md:h-full h-auto md:w-auto w-4/5" />
            <div className="flex items-center text-3xl font-medium leading-6">
                <h2 className="md:text-left text-center md:px-0 px-6">Grow followers with non-stop content.</h2>
            </div>
        </div>
    );
}

function Schedule() {
    return (
        <div className="row-span-2 rounded-md bg-c_Purple_100 py-8 md:gap-4 gap-6 flex flex-col">
            <h3 className="px-6 font-medium text-2xl leading-5">
                Schedule to social media.
            </h3>
            <div className="md:h-4/6  relative overflow-hidden md:pl-6 md:pr-0 px-6">
                <div className="md:absolute h-full aspect-[715/638]">
                    <img
                        src={ScheduleCalendar}
                        alt="calendar"
                        className="h-full"
                    />
                </div>
            </div>
            <div className="px-6">
                <p className="md:leading-4 md:text-sm md:pr-1 md:text-left text-center text-lg leading-6">
                    Optimize post timings to publish content at the perfect time
                    for your audience.
                </p>
            </div>
        </div>
    );
}
