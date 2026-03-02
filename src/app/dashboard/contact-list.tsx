"use client";

interface Contact {
  id: number;
  name: string;
  role: string;
  category: string;
  email: string;
  lastContact: string;
  avatar: string;
  status: "active" | "inactive";
}

const categoryColors: Record<string, string> = {
  place: "bg-sky-500/15 text-sky-500",
  skills: "bg-[#9a7fd4]/15 text-[#9a7fd4]",
  vcs: "bg-honey-500/15 text-honey-400",
  founders: "bg-[#d47f7f]/15 text-[#d47f7f]",
  entrepreneurs: "bg-[#7fc4a5]/15 text-[#7fc4a5]",
  friends: "bg-[#d4a07f]/15 text-[#d4a07f]",
  family: "bg-sage-500/15 text-sage-500",
};

const avatarGradients: Record<string, string> = {
  place: "from-[#6b9fc4] to-[#4a7a9e]",
  skills: "from-[#9a7fd4] to-[#7a5fb4]",
  vcs: "from-[#d4a853] to-[#b8903a]",
  founders: "from-[#d47f7f] to-[#b45f5f]",
  entrepreneurs: "from-[#7fc4a5] to-[#5fa485]",
  friends: "from-[#d4a07f] to-[#b4805f]",
  family: "from-[#7a9e7e] to-[#5a7e5e]",
};

function ContactRow({ contact, index }: { contact: Contact; index: number }) {
  const colorClass =
    categoryColors[contact.category] ?? "bg-noir-700/15 text-noir-400";
  const gradientClass =
    avatarGradients[contact.category] ?? "from-noir-600 to-noir-700";

  return (
    <div
      className="animate-fade-in-up border-noir-800/30 hover:bg-noir-850/80 group grid cursor-pointer grid-cols-[auto_1fr_auto_auto_auto] items-center gap-5 border-b px-8 py-4 transition-all duration-200"
      style={{ animationDelay: `${200 + index * 60}ms` }}
    >
      {/* Avatar */}
      <div
        className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-semibold text-white/90 ${gradientClass}`}
      >
        {contact.avatar}
      </div>

      {/* Name & role */}
      <div className="min-w-0">
        <p className="text-noir-100 group-hover:text-honey-300 truncate text-sm font-medium transition-colors duration-200">
          {contact.name}
        </p>
        <p className="text-noir-500 mt-0.5 truncate text-xs">{contact.role}</p>
      </div>

      {/* Category badge */}
      <span
        className={`rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ${colorClass}`}
      >
        {contact.category}
      </span>

      {/* Last contact */}
      <span className="text-noir-500 w-24 text-right text-xs">
        {contact.lastContact}
      </span>

      {/* Status dot + action */}
      <div className="flex w-16 items-center justify-end gap-2">
        <span
          className={`size-2 rounded-full ${
            contact.status === "active" ? "bg-sage-500" : "bg-noir-600"
          }`}
        />
        <button className="text-noir-600 hover:text-noir-300 opacity-0 transition-all duration-200 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Column headers */}
      <div className="border-noir-800/30 text-noir-500 bg-noir-950/90 sticky top-0 z-10 grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-5 border-b px-8 py-3 text-[11px] font-semibold tracking-[0.12em] uppercase backdrop-blur-md">
        <span className="w-10" />
        <span>Name</span>
        <span>Category</span>
        <span className="w-24 text-right">Last Contact</span>
        <span className="w-16 text-right">Status</span>
      </div>

      {/* Rows */}
      {contacts.map((contact, i) => (
        <ContactRow key={contact.id} contact={contact} index={i} />
      ))}
    </div>
  );
}
