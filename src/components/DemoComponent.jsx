import SecondComponent from "./SecondComponent";

// const DemoComponent = () => {
//   return (
//     <div>
//       <h1> NEW COMPONENT HERE!!</h1>;
//     </div>
//   );
// };

const DemoComponent = () => (
  <>
    <h1 className="first-heading"> NEW COMPONENT HERE!!</h1>
    <SecondComponent />
  </>
);

export default DemoComponent;
