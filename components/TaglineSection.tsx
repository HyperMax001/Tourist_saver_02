const PillImage = ({
  src,
  alt,
  width = "w-[138px]",
}: {
  src: string;
  alt: string;
  width?: string;
}) => (
  <span
    className={`inline-block ${width} h-[58px] rounded-full overflow-hidden align-middle mx-1.5 relative top-[-2px]`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </span>
);

export default function TaglineSection() {
  return (
    <section className="bg-[#f2f2f2] py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-[50px] xl:text-[56px] font-normal text-black leading-[1.4] tracking-[-0.01em]">
          Make your move and discover
          <PillImage
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80"
            alt="Mountain landscape"
          />
          the
          <br />
          world
          <PillImage
            src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=300&q=80"
            alt="Aerial ocean view"
            width="w-[158px]"
          />
          that&apos;s waiting for you.
        </h2>

        <p className="mt-6 text-[13.5px] font-normal text-gray-400 max-w-[480px] mx-auto leading-relaxed">
          Traveling changes you. You see new places, meet new people, and become a new version of yourself.
        </p>

      </div>
    </section>
  );
}
