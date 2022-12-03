import Accordion from "./components/Accordion";

function App() {

  const items = [
    {
      id: 'asdaed',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want'
    },
    {
      id: 'w3rnf',
      label: 'Can I use Javascipt on a project?',
      content: 'You can use Javascipt on any project you want'
    },
    {
      id: 'sijudfgn',
      label: 'Can I use Python on a project?',
      content: 'You can use Python on any project you want'
    }
  ];

  return <Accordion items={items} />;
}

export default App;
