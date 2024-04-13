interface Props {
  accentColor?: "blue" | "yellow" | "pink" | "green";
}
const hero = ({ accentColor = "blue" }: Props) => {
  return (
    <div className="bg-black text-white font-satoshi mx-8 text-sm border-x border-white">
      <div className="grid lg:grid-cols-2 border-b border-white">
        <div className="font-clash p-8 text-6xl font-semibold h-full flex my-24 lg:items-end lg:my-0">
          <span>
            <span> You dream it.</span>
            <br />
            <br className="lg:hidden" />
            <span className={"text-" + accentColor}>We make it come true.</span>
          </span>
        </div>

        <div className="overflow-hidden ">
          <img
            className="h-auto float-right"
            src="/hero_1.png"
            alt="Black male wearing a tshirt and standing in front of a house."
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 border-b border-white">
        <div className="overflow-hidden lg:m-12 border border-white">
          <img
            className="h-auto "
            src="/hero_2.jpg"
            alt="Black male wearing a tshirt and standing in front of a house."
          />
        </div>
        <div className="font-satoshi p-8 text-xl h-full flex order-first lg:order-last">
          <span className="my-24 lg:m-auto lg:mx-14">
            We work <span className={"text-" + accentColor}>straight</span> with
            artists to make the best product for you. <br /> <br />
            The design <span className={"text-" + accentColor}>you want</span>,
            perfectly in the way{" "}
            <span className={"text-" + accentColor}>you want</span>.
            <br /> <br />
            We can help you with that!
          </span>
        </div>
      </div>
      <div className="grid border-b border-white py-16 lg:px-32" id="About">
        <div className="font-satoshi p-8 text-xl h-full m-auto flex items-center">
          <img className="h-auto float-center" src="/block.svg" alt="block" />
        </div>
        <div className="font-satoshi p-8 lg:px-24 text-xl h-full m-auto flex items-center text-center">
          <span>
            We are a{" "}
            <span className={"text-" + accentColor}>Brazilian company</span>{" "}
            located in{" "}
            <span className={"text-" + accentColor}>São Paulo, SP</span>. We
            have <span className={"text-" + accentColor}>13 years</span> of
            experience in clothing production and personalization, having worked
            with over <span className={"text-" + accentColor}>500 artists</span>{" "}
            to assist in the production of personalized{" "}
            <span className={"text-" + accentColor}>
              t-shirts, hoodies, tote bags and other items.
              <br />
              <br />
            </span>{" "}
            And we're excited to work with you!
          </span>
        </div>
        <div className="font-satoshi p-8 text-xl h-full m-auto flex items-center">
          <img className="h-auto float-center" src="/block.svg" alt="block" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 border-b border-white" id="Contact">
        <div className="font-clash p-8 text-6xl font-semibold h-full flex my-24 lg:items-end lg:my-0">
          <span>
            <span> You dream it.</span>
            <br />
            <br className="lg:hidden" />
            <span className={"text-" + accentColor}>We make it come true.</span>
          </span>
        </div>

        <div className="overflow-hidden ">
         <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fuga error iusto ut natus nulla tempore. Sint, beatae officia? Iure sapiente neque rerum voluptates ullam cupiditate? Sunt necessitatibus ipsam quidem!
         </span>
        </div>
      </div>
    </div>
  );
};

export default hero;
