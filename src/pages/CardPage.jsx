import CardItem from "../components/Card/cardItem";

export default function Card() {
  return (
    <div className="container mx-auto pt-[3rem] max-w-[1344px]">
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subtitle="Next-Gen Online Storefront"
          subhead="One-time payment for lifetime access."
          paragraph="Create the business you've always dreamed of, with no recurring charges or hidden fees."
          img="/card-1.png"
          primary={true}
        />
        <CardItem
          subtitle="Lifetime Access, No Monthly Fees"
          subhead="Effortlessly sell your products online."
          paragraph="Transform your social media profiles into powerful marketing tools and start selling your products today."
          img="/card-2.png"
          primary={false}
        />
      </div>
    </div>
  );
}
