import TeamAvatar from "@/src/components/teams/TeamAvatar";

interface CardItem {
  id: string | number;
  name: string;
  post: string;
  image?: string;
}

interface CardProps {
  items: CardItem[];
  /** Photo folder for members resolved by first name. */
  dir?: string;
}

export default function Card({ items, dir = "/assets/team2083" }: CardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {items.map((i) => (
        <article
          key={i.id}
          className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full items-center text-center border border-slate-200 hover:border-[#1eade6]"
          aria-labelledby={`svc-${i.id}-title`}
        >
          <div className="mb-4">
            <div className="w-20 h-20 sm:w-28 sm:h-28 relative rounded-full ring-2 ring-[#1eade6]/40 ring-offset-2 ring-offset-white overflow-hidden">
              <TeamAvatar name={i.name} image={i.image} dir={dir} />
            </div>
          </div>

          <h3
            id={`svc-${i.id}-title`}
            className="text-sm sm:text-lg font-semibold text-[#1b2c48] leading-tight"
          >
            {i.name}
          </h3>
          <p className="mt-1 text-xs sm:text-base text-[#1eade6] font-medium font-poppins">
            {i.post}
          </p>
        </article>
      ))}
    </div>
  );
}
