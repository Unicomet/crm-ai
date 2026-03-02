import { SearchBar } from "./search-bar";
import { ContactList } from "./contact-list";

const contacts = [
  {
    id: 1,
    name: "Elena Marchetti",
    role: "Partner at Sequoia Capital",
    category: "vcs",
    email: "elena@sequoia.com",
    lastContact: "2 days ago",
    avatar: "EM",
    status: "active" as const,
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "CEO at NovaTech",
    category: "founders",
    email: "raj@novatech.io",
    lastContact: "1 week ago",
    avatar: "RP",
    status: "active" as const,
  },
  {
    id: 3,
    name: "Sofia Chen",
    role: "Full-Stack Developer",
    category: "skills",
    email: "sofia.chen@gmail.com",
    lastContact: "3 days ago",
    avatar: "SC",
    status: "active" as const,
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "Co-Founder at GreenLoop",
    category: "entrepreneurs",
    email: "marcus@greenloop.co",
    lastContact: "2 weeks ago",
    avatar: "MJ",
    status: "inactive" as const,
  },
  {
    id: 5,
    name: "Isabelle Moreau",
    role: "Based in Paris, France",
    category: "place",
    email: "isabelle.m@outlook.com",
    lastContact: "5 days ago",
    avatar: "IM",
    status: "active" as const,
  },
  {
    id: 6,
    name: "David Kim",
    role: "College friend, Stanford '18",
    category: "friends",
    email: "dkim@alumni.stanford.edu",
    lastContact: "1 month ago",
    avatar: "DK",
    status: "inactive" as const,
  },
  {
    id: 7,
    name: "Ana Torres",
    role: "Sister",
    category: "family",
    email: "ana.torres@icloud.com",
    lastContact: "Yesterday",
    avatar: "AT",
    status: "active" as const,
  },
  {
    id: 8,
    name: "James Wright",
    role: "Managing Director at a16z",
    category: "vcs",
    email: "jwright@a16z.com",
    lastContact: "4 days ago",
    avatar: "JW",
    status: "active" as const,
  },
  {
    id: 9,
    name: "Lina Bergström",
    role: "UX Designer, Freelance",
    category: "skills",
    email: "lina.b@designcraft.se",
    lastContact: "6 days ago",
    avatar: "LB",
    status: "active" as const,
  },
  {
    id: 10,
    name: "Omar Hassan",
    role: "Founder at Solaris Energy",
    category: "founders",
    email: "omar@solarisenergy.com",
    lastContact: "3 weeks ago",
    avatar: "OH",
    status: "inactive" as const,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <header className="animate-fade-in border-noir-800/40 border-b px-8 pt-8 pb-6">
        <div className="flex items-end justify-between">
          <div>
            <p
              className="text-honey-500/70 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ animationDelay: "100ms" }}
            >
              Your Network
            </p>
            <h2 className="text-noir-50 mt-1 font-serif text-3xl tracking-tight">
              Contacts
            </h2>
          </div>
          <div className="text-noir-500 flex items-center gap-4 text-sm">
            <span>
              <span className="text-noir-200 font-medium">
                {contacts.length}
              </span>{" "}
              people
            </span>
            <span className="bg-noir-700 h-4 w-px" />
            <span>
              <span className="text-sage-500 font-medium">
                {contacts.filter((c) => c.status === "active").length}
              </span>{" "}
              active
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6">
          <SearchBar />
        </div>
      </header>

      {/* Contacts */}
      <ContactList contacts={contacts} />
    </div>
  );
}
