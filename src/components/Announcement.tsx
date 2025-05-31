import EventsCard from "./cards/EventsCard";
import SButton from "./ui/SButton";
const events = [
  {
    id: 1,
    title: "lorem ipsum dolor sit amet",
    time: "12:00 PM - 1:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "lorem ipsum dolor sit amet",
    time: "2:00 PM - 3:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "lorem ipsum dolor sit amet",
    time: "3:00 PM - 5:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Announcement = () => {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center">
        <EventsCard
          eventTitle="Announcements"
          eventAction={<SButton text="View All" />}
          cardDivClass="border-none even:bg-lSky odd:bg-lPurple"
          cardTitleClass="capitalize font-semibold text-white"
          cardTimeClass="bg-white rounded-md px-1 py-1 text-xs text-gray-500"
          cardDescriptionClass="text-gray-500 "
        />
      </div>
    </div>
  );
};

export default Announcement;
