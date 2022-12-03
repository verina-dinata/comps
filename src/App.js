import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want'
    },
    {
      label: 'Can I use Javascipt on a project?',
      content: 'You can use Javascipt on any project you want'
    },
    {
      label: 'Can I use Python on a project?',
      content: 'You can use Python on any project you want'
    }
  ];

  return <Accordion />;
}

export default App;
