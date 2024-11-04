 

const sharedClasses = {
  container: 'container mx-auto text-center py-10',
  heading: 'text-2xl font-bold mb-6',
  subHeading: 'text-lg font-semibold mb-4',
  image: 'mx-auto mb-2',
};

const CompanyComponent = () => {
  return (
    <div className={sharedClasses.container}>
      <h2 className={sharedClasses.heading}>700+ Companies Are Connected to Us</h2>
      <div className="grid grid-cols-3 gap-10">
        <CompanySection title="Working with" logos={['ICT', 'Logo', 'Logo']} color="text-red-600" />
        <CompanySection title="Members of" logos={['Logo', 'Logo']} color="text-zinc-800" />
        <CompanySection title="Our Concerns" logos={['Oxford', 'Logo']} color="text-zinc-800" />
      </div>
    </div>
  );
};

const CompanySection = ({ title, logos, color }) => {
  return (
    <div>
      <h3 className={`${sharedClasses.subHeading} ${color}`}>{title}</h3>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={`https://openui.fly.dev/openui/100x100.svg?text=${logo}`}
          alt={`${logo} Logo`}
          className={sharedClasses.image}
        />
      ))}
    </div>
  );
};

export default CompanyComponent;

// In the code above:
// - The `CompanyComponent` is the main component that renders the entire section.
// - The `CompanySection` component is used to render each section with a title and logos.
// - The `sharedClasses` object contains the shared tailwind classes that are used multiple times.
// - The `CompanySection` component takes props for title, logos array, and color to render each section.
// - The logos are mapped over to generate the image elements dynamically based on the provided logo names.