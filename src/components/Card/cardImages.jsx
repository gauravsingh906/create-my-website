import { PrimaryCard, SecondaryCard } from "./cardImage";

export default function CardImage({ primary }) {
  const primaryContainer = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.1 },
    },
    hidden: { y: 100 },
  };

  const miniModal = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hidden: {
      y: 100,
    },
  };

  const updatedProfiles = [
    {
      id: 0,
      avatar: "/profile-1.png",
      name: "Alexandra Reid",
      phone: "(555) 123-4567",
      amount: "$950.00",
    },
    {
      id: 1,
      avatar: "/profile-2.png",
      name: "Marcus Lee",
      phone: "(555) 234-5678",
      amount: "$625.75",
    },
    {
      id: 2,
      avatar: "/profile-3.png",
      name: "Samara Chen",
      phone: "(555) 345-6789",
      amount: "$1,125.30",
    },
  ];

  if (primary)
    return (
      <PrimaryCard
        primaryContainer={primaryContainer}
        miniModal={miniModal}
        fakeProfiles={updatedProfiles}
      />
    );

  return <SecondaryCard />;
}
