import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

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
type EventsCardProps = {
  cardDivClass?: string;
  cardTitleClass?: string;
  cardDescriptionClass?: string;
  cardTimeClass?: string;
  eventTitle: string;
  eventAction?: ReactNode | string;
};
const EventsCard = ({
  cardDivClass,
  cardTitleClass,
  cardDescriptionClass,
  cardTimeClass,
  eventTitle,
  eventAction,
}: EventsCardProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl p-4 ">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">{eventTitle}</h1>
        {eventAction ? (
          eventAction
        ) : (
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        )}
      </div>
      {events.map((event) => (
        <div
          key={event.id}
          className={clsx(
            "p-5 rounded-md border-2 border-t-4 odd:border-t-lPurple even:border-t-lSky border-gray-100",
            cardDivClass
          )}
        >
          <div className="flex items-center justify-between">
            <h2 className={clsx("font-semibold", cardTitleClass)}>
              {event.title}
            </h2>
            <p className={clsx("text-gray-300  text-xs", cardTimeClass)}>
              {event.time}
            </p>
          </div>
          <p
            className={clsx("mt-2 text-gray-400 text-xs", cardDescriptionClass)}
          >
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EventsCard;
